import { TextField, Button } from "@mui/material";
import PageTitle from "../Components/PageTitle";
import { useState } from "react";
import API_LINK from "../Api";
import { useNavigate } from "react-router-dom";

function Login() {
  const token = sessionStorage.getItem("token");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };
    fetch(`${API_LINK}/users/login`, options)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          alert("There has been some error.");
        }
      })
      .then((data) => {
        sessionStorage.setItem("token", data.token);
        navigate("/");
      })
      .catch((error) => {
        console.log("There was an error", error);
      });
  };

  return (
    <>
      {token ? (
        <PageTitle pageName="You are logged in!" />
      ) : (
        <div>
          <PageTitle pageName="Login" />
          <form onSubmit={onSubmit} style={{ textAlign: "center" }}>
            <TextField
              required
              id="outlined-required"
              label="Email"
              style={{ margin: 10 }}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <br />
            <TextField
              required
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              style={{ margin: 10 }}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <br />
            <Button variant="outlined" style={{ margin: 10 }} type="submit">
              Login
            </Button>
          </form>
        </div>
      )}
    </>
  );
}

export default Login;
