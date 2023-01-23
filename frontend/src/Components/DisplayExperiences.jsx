import { useState, useEffect } from "react";
import Cards from "./Cards";
import { Grid } from "@mui/material";
import API_LINK from "../Api";
import { Skeleton, Typography } from "@mui/material";

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
          <Skeleton width="30em">
            <Typography>.</Typography>
          </Skeleton>
          <Skeleton width="30em">
            <Typography>.</Typography>
          </Skeleton>
          <Skeleton width="30em">
            <Typography>.</Typography>
          </Skeleton>
          <Skeleton width="30em">
            <Typography>.</Typography>
          </Skeleton>
          <Skeleton width="30em">
            <Typography>.</Typography>
          </Skeleton>
          <Skeleton width="30em">
            <Typography>.</Typography>
          </Skeleton>
          <Skeleton width="30em">
            <Typography>.</Typography>
          </Skeleton>
          <Skeleton width="30em">
            <Typography>.</Typography>
          </Skeleton>
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
