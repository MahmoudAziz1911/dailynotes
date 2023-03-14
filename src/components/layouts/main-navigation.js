import { AppBar, Box, Toolbar, Typography, Avatar } from "@mui/material";
import { Link } from "react-router-dom";

 const MainNavigation = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#a18080"}}>
        <Toolbar>
        <Avatar
          alt=""
          src="./images/logonote.png"
          sx={{ mr: 2 }}
          variant="square"
        />
          <Typography variant="overline" noWrap to="/" component={Link} sx={{ flexGrow: 1, fontSize: "19px", textDecoration: "none", color: "#fff" }}>
            Daily Notes
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MainNavigation;