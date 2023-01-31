import { Chip, Typography, CardContent, Card, Button } from "@mui/material";
import { Devices, GitHub } from "@mui/icons-material";

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
        <Typography
          color="text.secondary"
          variant="body2"
          fontFamily={"inherit"}
        >
          {item.startDate.slice(0, 7)} to{" "}
          {item.present ? "Present" : item.endDate.slice(0, 7)}
        </Typography>
        <Typography
          color="text.secondary"
          variant="body1"
          fontFamily={"inherit"}
        >
          {item.role}
        </Typography>
        <Typography variant="body1" fontFamily={"inherit"}>
          {item.description}
        </Typography>
        {item.skills.map((skill, id) => {
          return (
            <Chip
              key={id}
              label={skill}
              size="small"
              sx={{ marginRight: 0.5, marginTop: 0.5 }}
            />
          );
        })}
        <br />
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            marginTop: "1em",
          }}
        >
          {item.github ? (
            <Button
              component="a"
              href={item.github}
              variant="outlined"
              style={{ marginRight: "1em" }}
              startIcon={<GitHub />}
            >
              Github
            </Button>
          ) : null}
          {item.demo ? (
            <Button
              component="a"
              href={item.demo}
              variant="outlined"
              startIcon={<Devices />}
            >
              Demo
            </Button>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}

export default BasicCard;
