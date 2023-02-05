import PageTitle from "../Components/PageTitle";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function LoggedOut() {
  return (
    <>
      <PageTitle pageName="You have logged out!" />
      <div style={{ justifyContent: "center", display: "flex" }}>
        <Link to="/login" style={{ textDecoration: "None" }}>
          <Button variant="outlined">Login</Button>
        </Link>
      </div>
    </>
  );
}

export default LoggedOut;
