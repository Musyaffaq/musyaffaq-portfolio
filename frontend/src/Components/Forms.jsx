import { useState } from "react";
import { TextField, Checkbox, Button } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import API_LINK from "../Api";

const token = sessionStorage.getItem("token");

function Forms({ type }) {
  // states of the fields
  const [projectName, setProjectName] = useState(null);
  const [role, setRole] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [check, setCheck] = useState(false);
  const [description, setDescription] = useState(null);
  const [skills, setSkills] = useState(null);
  const [github, setGithub] = useState(null);
  const [demo, setDemo] = useState(null);

  // handle changes in fields
  const onChangeProjectName = (e) => {
    setProjectName(e.target.value);
  };
  const onChangeRole = (e) => {
    setRole(e.target.value);
  };
  const onCheck = (e) => {
    setCheck(!check);
  };
  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const onChangeSkills = (e) => {
    setSkills(e.target.value);
  };
  const onChangeGithub = (e) => {
    setGithub(e.target.value);
  };
  const onChangeDemo = (e) => {
    setDemo(e.target.value);
  };

  // when submit button is clicked
  const onSubmit = async (e) => {
    e.preventDefault();

    let sendEndDate;

    if (check) {
      sendEndDate = null;
    } else {
      sendEndDate = endDate;
    }

    const newProject = {
      projectName: projectName,
      role: role,
      startDate: startDate,
      endDate: sendEndDate,
      present: true,
      description: description,
      skills: skills,
      github: github,
      demo: demo,
    };

    await fetch(`${API_LINK}/projects/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newProject),
    });
  };

  return (
    <form style={{ textAlign: "center" }}>
      <TextField
        required
        id="outlined-required"
        label="Project Name"
        style={{ margin: 10 }}
        onChange={onChangeProjectName}
      />
      <TextField
        required
        id="outlined-required"
        label="Role"
        style={{ margin: 10 }}
        onChange={onChangeRole}
      />
      <br />
      {/* Taken from https://mui.com/x/react-date-pickers/date-picker/ */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Start Date"
          value={startDate}
          onChange={(newValue) => {
            setStartDate(newValue.$d.toJSON());
          }}
          renderInput={(params) => (
            <TextField {...params} style={{ margin: 10 }} />
          )}
        />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          disabled={check}
          label="End Date"
          value={endDate}
          onChange={(newValue) => {
            setEndDate(newValue.$d.toJSON());
          }}
          renderInput={(params) => (
            <TextField {...params} style={{ margin: 10 }} />
          )}
        />
      </LocalizationProvider>
      <Checkbox id="present" onChange={onCheck} />
      <label htmlFor="present">Still ongoing</label>
      <br />
      <TextField
        required
        id="outlined-required"
        label="Description"
        style={{ margin: 10 }}
        onChange={onChangeDescription}
      />
      <TextField
        required
        id="outlined-required"
        label="Skills"
        style={{ margin: 10 }}
        onChange={onChangeSkills}
      />
      <br />
      <TextField
        id="outlined"
        label="GitHub Link"
        style={{ margin: 10 }}
        onChange={onChangeGithub}
      />
      <TextField
        id="outlined"
        label="Demo Link"
        style={{ margin: 10 }}
        onChange={onChangeDemo}
      />
      <br />
      <Button variant="outlined" style={{ margin: 10 }} onClick={onSubmit}>
        Submit
      </Button>
    </form>
  );
}

export default Forms;
