import { useState, useEffect } from "react";
import Cards from "./Cards";
import { Grid } from "@mui/material";
import API_LINK from "../Api";
import SkeletonLoading from "./SkeletonLoading";

function DisplayProjects() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${API_LINK}/projects`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <Grid container style={{ justifyContent: "center" }}>
      {data[0] === undefined ? (
        <>
          <SkeletonLoading />
        </>
      ) : (
        data.map((item, id) => {
          return <Cards key={id} item={item} type="experience" />;
        })
      )}
    </Grid>
  );
}

export default DisplayProjects;
