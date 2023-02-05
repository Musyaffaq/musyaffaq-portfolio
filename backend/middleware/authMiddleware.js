// add this module "protect" to a path to protect it with authorisation

const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer") // in the header there is the authorisation which looks like "Bearer <code> so wna check if its there"
  ) {
    try {
      // get token from the header
      token = req.headers.authorization.split(" ")[1]; // bc the authorisation looks like "Bearer <code>", split by the space and get idx 1

      // verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      //get the user from the token
      req.user = await User.findById(decoded.id).select("-password"); // bc in  userController.js we signed it using the id, so find by the id, but don't want the password

      next();
    } catch (error) {
      console.log(error);
      res.status(401); // not authorised
      throw new Error("Not authorised");
    }
  }
  if (!token) {
    console.log("hello");
    res.status(401);
    throw new Error("Not authorised, no token");
  }
});

module.exports = { protect };
