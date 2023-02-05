import { Button } from "@mui/material";
import DisplayExperiences from "../Components/DisplayExperiences";
import Forms from "../Components/Forms";
import PageTitle from "../Components/PageTitle";
import { useState } from "react";

function WorkExperiencePage() {
  const token = sessionStorage.getItem("token");
  const [showForm, setShowForm] = useState(false);
  const newButton = () => {
    setShowForm(!showForm);
  };
  return (
    <>
      <PageTitle pageName={"My Work Experiences"} />
      {token ? (
        <div style={{ justifyContent: "center", display: "flex" }}>
          <Button onClick={newButton} variant="outlined">
            {showForm ? "Cancel" : "New"}
          </Button>
        </div>
      ) : null}
      {token && showForm ? <Forms type="experiences" /> : null}
      <DisplayExperiences />
    </>
  );
}

export default WorkExperiencePage;
