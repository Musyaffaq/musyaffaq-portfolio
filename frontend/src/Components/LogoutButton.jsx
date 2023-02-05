import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function LogoutButton() {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");

  const onClick = () => {
    sessionStorage.removeItem("token");
    navigate("/loggedout");
  };

  return (
    <>
      {token ? (
        <Button variant="text" onClick={onClick} style={{ color: "white" }}>
          Logout
        </Button>
      ) : null}
    </>
  );
}

export default LogoutButton;
