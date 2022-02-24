import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import "./navbar.css"
import VotingMethods from "../../votingContract/votingContract";
const pages = ["CANDIDATE SUBMIT", "VOTING", "ELETED"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [myWelltAddress, setmyWelltAddress] = useState('');

  useEffect(async () => {
    setmyWelltAddress(await VotingMethods.getSeletedAccount());
  }, []);

  return (
    <AppBar position="static" className="navbar-container">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              Enum30
            </Typography>
          </Link>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Enum30
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link to="/candidate">
              <Button >candidate SUBMIT</Button>
            </Link>
            <Link to="/vote">
              <Button>vote</Button>
            </Link>
            <Link to="/elected">
              <Button>Eleted</Button>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            지금 내 지갑주소 : {myWelltAddress}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;