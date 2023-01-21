import { useState, useEffect } from "react";
import Cards from "./Cards";
import { Grid } from "@mui/material";

function DisplayProjects() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <Grid container style={{ justifyContent: "center" }}>
      {data.map((item, id) => {
        return <Cards key={id} item={item} type="experience" />;
      })}
    </Grid>
  );
}

export default DisplayProjects;
