import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { useHistory, Link } from "react-router-dom";
import "./Header.css";

const Header = ({ children, hasHiddenAuthButtons }) => {
  const history = useHistory();
  const explore=()=>{
    history.push("/")
}
const Register=()=>{
  history.push("/register")
}
const Login=()=>{
  history.push("/login")
}

  const logout=()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("username")
    localStorage.removeItem("balance")
    history.push("/")
    window.location.reload();
  }

  if(hasHiddenAuthButtons){
    return(
      <Box className="header">
        <Box className="header-title">
          <Link to="/">
            <img src="logo_light.svg" alt="QKart-icon"></img>
          </Link>
        </Box>
        {children}
        <Button
          className="explore-button"
          startIcon={<ArrowBackIcon />}
          variant="text"
          onClick={explore}
        >
          Back to explore
        </Button>
        </Box>
    )
    
    
  }
    return (
      <Box className="header">
        <Box className="header-title">
          <Link to="/">
            <img src="logo_light.svg" alt="QKart-icon"></img>
          </Link>
        </Box>
        {children}
        <Stack direction="row" spacing={1} alignItems="center">
          {localStorage.getItem("username") ? (
            <>
              <Avatar
              src="public/avatar.png"
              alt={localStorage.getItem("username")|| "profile"}
              />
              <p className="username-text">{localStorage.getItem("username")}</p>
              <Button type="primary" onClick={logout}>
                LOGOUT
              </Button>
            </>
          ) : (
            <>
             <Button  onClick={Login}>LOGIN</Button>
             <Button variant="contained" onClick={Register}>REGISTER</Button>
            </>
            )}
        </Stack>
      </Box>
    );
};

export default Header;
