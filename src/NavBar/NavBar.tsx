import "./NavBar.css";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import barLogo from "../assets/images/bar-logo.png";
import userAvatar from "../assets/images/user.png";
import { useNavigate } from "react-router-dom";

const settings = ["Home", "Favorites"];

const NavBar = () => {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (setting: string) => {
    setAnchorElUser(null);
    switch (setting) {
      case "Favorites":
        navigate("/favourites");
        break;
      case "Home":
        navigate("/");
        break;

      default:
        break;
    }
  };

  return (
    <AppBar sx={{ background: "#332C39" }} position="static">
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: "space-between" }} disableGutters>
          <img alt="logo" className="logo" src={barLogo} />
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={userAvatar} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={() => handleCloseUserMenu(setting)}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
