import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function BasicCard({ item, type }) {
  return (
    <Card
      sx={{ margin: 1 }}
      variant="outlined"
      style={{
        fontFamily: "monospace",
        width: "30em",
        display: "inline-block",
      }}
    >
      <CardContent>
        <Typography
          style={{ fontWeight: "bold" }}
          gutterBottom
          fontFamily={"inherit"}
        >
          {type === "work" ? item.company : item.projectName}
        </Typography>
        <Typography color="text.secondary" fontFamily={"inherit"}>
          {item.startDate.slice(0, 7)} to {item.endDate.slice(0, 7)}
        </Typography>
        <Typography variant="body1" fontFamily={"inherit"}>
          {item.role}
        </Typography>
        <Typography variant="body1" fontFamily={"inherit"}>
          {item.description}
        </Typography>
        <Typography variant="body2" fontFamily={"inherit"}>
          {item.skills}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default BasicCard;
