import { Button } from "@mui/material";
import DisplayProjects from "../Components/DisplayProjects";
import Forms from "../Components/Forms";
import PageTitle from "../Components/PageTitle";
import { useState } from "react";

function ProjectPage() {
  const token = sessionStorage.getItem("token");
  const [showForm, setShowForm] = useState(false);
  const newButton = () => {
    setShowForm(!showForm);
  };
  return (
    <>
      <PageTitle pageName={"My Past Projects"} />
      {token ? (
        <div style={{ justifyContent: "center", display: "flex" }}>
          <Button onClick={newButton} variant="outlined">
            {showForm ? "Cancel" : "New"}
          </Button>
        </div>
      ) : null}
      {token && showForm ? <Forms type="projects" /> : null}
      <DisplayProjects />
    </>
  );
}

export default ProjectPage;
