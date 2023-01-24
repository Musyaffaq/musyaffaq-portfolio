import { useState, useEffect } from "react";
import Cards from "./Cards";
import { Grid } from "@mui/material";
import SkeletonLoading from "./SkeletonLoading";
import API_LINK from "../Api";

function DisplayExperiences() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${API_LINK}/experiences`)
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
          return <Cards key={id} item={item} type="work" />;
        })
      )}
    </Grid>
  );
}

export default DisplayExperiences;
