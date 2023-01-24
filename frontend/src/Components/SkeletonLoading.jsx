import { Skeleton, Card } from "@mui/material";

function SkeletonLoading() {
  return (
    <>
      <Card
        sx={{ margin: 1 }}
        variant="outlined"
        style={{
          width: "30em",
          display: "inline-block",
          padding: "5px",
        }}
      >
        <Skeleton component={"h1"} sx={{ marginX: 2, width: "7em" }}></Skeleton>
        <Skeleton component={"h3"} sx={{ marginX: 2, width: "8em" }}></Skeleton>
        <Skeleton component={"h6"} sx={{ marginX: 2 }}></Skeleton>
        <Skeleton component={"h6"} sx={{ marginX: 2 }}></Skeleton>
        <Skeleton component={"h6"} sx={{ marginX: 2, width: "5em" }}></Skeleton>
      </Card>
      <Card
        sx={{ margin: 1 }}
        variant="outlined"
        style={{
          width: "30em",
          display: "inline-block",
          padding: "5px",
        }}
      >
        <Skeleton component={"h1"} sx={{ marginX: 2, width: "7em" }}></Skeleton>
        <Skeleton component={"h3"} sx={{ marginX: 2, width: "8em" }}></Skeleton>
        <Skeleton component={"h6"} sx={{ marginX: 2 }}></Skeleton>
        <Skeleton component={"h6"} sx={{ marginX: 2 }}></Skeleton>
        <Skeleton component={"h6"} sx={{ marginX: 2, width: "5em" }}></Skeleton>
      </Card>
      <Card
        sx={{ margin: 1 }}
        variant="outlined"
        style={{
          width: "30em",
          display: "inline-block",
          padding: "5px",
        }}
      >
        <Skeleton component={"h1"} sx={{ marginX: 2, width: "7em" }}></Skeleton>
        <Skeleton component={"h3"} sx={{ marginX: 2, width: "8em" }}></Skeleton>
        <Skeleton component={"h6"} sx={{ marginX: 2 }}></Skeleton>
        <Skeleton component={"h6"} sx={{ marginX: 2 }}></Skeleton>
        <Skeleton component={"h6"} sx={{ marginX: 2, width: "5em" }}></Skeleton>
      </Card>
      <Card
        sx={{ margin: 1 }}
        variant="outlined"
        style={{
          width: "30em",
          display: "inline-block",
          padding: "5px",
        }}
      >
        <Skeleton component={"h1"} sx={{ marginX: 2, width: "7em" }}></Skeleton>
        <Skeleton component={"h3"} sx={{ marginX: 2, width: "8em" }}></Skeleton>
        <Skeleton component={"h6"} sx={{ marginX: 2 }}></Skeleton>
        <Skeleton component={"h6"} sx={{ marginX: 2 }}></Skeleton>
        <Skeleton component={"h6"} sx={{ marginX: 2, width: "5em" }}></Skeleton>
      </Card>
    </>
  );
}

export default SkeletonLoading;
