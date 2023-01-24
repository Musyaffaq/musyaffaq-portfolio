import PageTitle from "../Components/PageTitle";
import { LinkedIn, Email, Language, GitHub } from "@mui/icons-material";
import {
  Card,
  CardContent,
  Grid,
  Link,
  Typography,
  CardActionArea,
} from "@mui/material";

function ContactMePage() {
  const socials = [
    [<LinkedIn />, "LinkedIn", "https://linkedin.com/in/musyaffaq"],
    [<GitHub />, "GitHub", "https://github.com/musyaffaq/"],
    [<Email />, "Email", "mailto:ahmadmm.2021@scis.smu.edu.sg"],
    [<Language />, "Personal Website", "https://musyaffaq.com"],
  ];
  return (
    <>
      <PageTitle pageName={"Contact Me!"} />
      <Grid container style={{ justifyContent: "center" }}>
        {socials.map(([icon, text, link], id) => {
          return (
            <Link
              key={id}
              href={link}
              underline="none"
              target="_blank"
              rel="noopener"
            >
              <Card
                sx={{ margin: 1 }}
                variant="outlined"
                style={{
                  display: "inline-block",
                  width: "25em",
                }}
              >
                <CardActionArea>
                  <CardContent>
                    <Typography style={{ textAlign: "center" }} gutterBottom>
                      {icon}
                    </Typography>
                    <Typography
                      style={{ textAlign: "center" }}
                      variant="inherit"
                    >
                      {text}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          );
        })}
      </Grid>
    </>
  );
}

export default ContactMePage;
