// Adapted from here - https://mui.com/material-ui/react-app-bar/#ResponsiveAppBar.js
import { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import ThemeToggle from "./ThemeToggle";
import LogoutButton from "./LogoutButton";

const pages = [
  ["Home", "/"],
  ["Projects", "/projects"],
  ["Experience", "/experiences"],
  ["About This Site", "/about"],
  ["Contact Me", "/contact"],
];

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* This is the logo thingy */}
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                ":hover": { color: "white" },
              }}
            >
              MUSYAFFAQ
            </Typography>
          </Link>
          {/* This is for mobile, which is the hamburger menu */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map(([text, path], id) => (
                <Link key={id} to={path} style={{ textDecoration: "none" }}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography
                      textAlign="center"
                      color="text.primary"
                      variant="button"
                    >
                      {text}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                ":hover": { color: "white" },
              }}
            >
              MUSYAFFAQ
            </Typography>
          </Link>
          {/* This is for desktop navbar */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map(([text, path], id) => (
              <Link key={id} to={path} style={{ textDecoration: "none" }}>
                <Button
                  variant="text"
                  key={id}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, display: "block" }}
                  style={{ color: "white" }}
                >
                  {text}
                </Button>
              </Link>
            ))}
          </Box>
          <LogoutButton />
          <ThemeToggle />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
