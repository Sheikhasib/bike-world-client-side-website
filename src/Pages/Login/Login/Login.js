import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    console.log(field, value);
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    alert("Hello");
    e.preventDefault();
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 10 }} xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Email"
              name="email"
              onChange={handleOnChange}
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-password-input"
              label="Your Password"
              type="password"
              name="password"
              onChange={handleOnChange}
              autoComplete="current-password"
              variant="standard"
            />

            <Button
              sx={{ width: "75%", m: 1 }}
              type="submit"
              variant="contained"
            >
              Login
            </Button>
            <NavLink style={{ textDecoration: "none" }} to="/register">
              <Button variant="text">New User? Please Register</Button>
            </NavLink>
            {isLoading && <CircularProgress />}
            {user?.email && (
              <Alert severity="success">Login Successfully!</Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>}
          </form>
          <p>--------------------</p>
          <Button onClick={handleGoogleSignIn} variant="contained">
            Google Sign In
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://i.ibb.co/HVJgZPr/login.png"
            alt=""
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
