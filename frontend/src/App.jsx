import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "react-bootstrap/esm/Container";

import Homepage from "./Pages/Homepage";
import ProjectPage from "./Pages/ProjectPage";
import WorkExperiencePage from "./Pages/WorkExperiencePage";
import ContactMePage from "./Pages/ContactMePage";
import Header from "./Components/Header";
import AboutPage from "./Pages/AboutPage";

// theme created using https://bareynol.github.io/mui-theme-creator/
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#9a918c",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#9a918c",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") !== null
      ? localStorage.getItem("theme") === "true"
      : true
  );

  // solved using this answer - https://stackoverflow.com/a/71410902/20317549
  window.addEventListener("theme", () => {
    setTheme(localStorage.getItem("theme") === "true");
  });

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Container style={{ paddingBottom: "4em" }}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/experiences" element={<WorkExperiencePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactMePage />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
