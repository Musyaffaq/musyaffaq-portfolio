import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import ProjectPage from "./Pages/ProjectPage";
import WorkExperiencePage from "./Pages/WorkExperiencePage";
import ContactMePage from "./Pages/ContactMePage";
import Header from "./Components/Header";
import Container from "react-bootstrap/esm/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

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
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/experiences" element={<WorkExperiencePage />} />
            <Route path="/contact" element={<ContactMePage />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
