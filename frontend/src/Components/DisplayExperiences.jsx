import { useState, useEffect } from "react";
import Cards from "./Cards";
import { Grid } from "@mui/material";

function DisplayExperiences() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/experiences")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <Grid container style={{ justifyContent: "center" }}>
      {data.map((item, id) => {
        return <Cards key={id} item={item} type="work" />;
      })}
    </Grid>
  );
}

export default DisplayExperiences;
