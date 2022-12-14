import React from "react";
import { deepOrange, deepPurple } from "@mui/material/colors";
import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import HttpsIcon from "@mui/icons-material/Https";
import { width } from "@mui/system";
const LoginGrid = styled(Grid, { name: "login-grid" })({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "100px 10px 10px 10px",
});
const FormContainer = styled(Grid, { name: "form-container" })({
  minWidth: 500,
  width: "500px",
  margin: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const FormInput = styled(
  TextField,
  "email-address"
)({
  margin: "10px",
  borderRadius: "50px",
});
const CheckboxInput = styled(
  FormControlLabel,
  "email-address"
 
)({
  alignSelf: "flex-start",
  marginBottom: "20px",
  width: '80%',
});
const LoginButton = styled(Button)({});
const ForgotButton = styled(Button)({
  fontSize: "0.875rem",
  fontWeight: 400,
  margin: "10px 0px 0px 0px",
});
const SignInTitle = styled(Typography)({
  fontFamily: "Roboto",
  fontWeight: 400,
  fontSize: "1.5rem",
});
const CopyRight = styled(Typography)({
    fontFamily: "Roboto",
    fontWeight: 400,
    fontSize: '0.875rem',
    color: 'rgba(0, 0, 0, 0.6)',
    marginTop:'20px'
  });

const SignUp = () => {
  return (
    <LoginGrid container md={12}>
      <Avatar sx={{ bgcolor: deepPurple[500], width: 46, height: 46 }}>
        <HttpsIcon sx={{ width: 26, height: 26 }} />
      </Avatar>
      <SignInTitle>Sign Up</SignInTitle>
      <FormContainer>
        <Grid container alignSelf={"center"} justifyContent={"space-between"}>
          <FormInput label="First Name*" variant="outlined" />
          <FormInput label="Last Name *" variant="outlined" />
        </Grid>
        <FormInput fullWidth label="Email Address" variant="outlined" />
                <FormInput fullWidth label="Password *" variant="outlined" />
        <CheckboxInput
          control={<Checkbox defaultChecked />}
          label="I want to receive inspiration, marketing promotions and updates via email."
        />
        <LoginButton fullWidth variant="contained">
         Sign Up
        </LoginButton>
        <Grid container alignSelf={"center"} justifyContent={"flex-end"}>
          <ForgotButton>Already have an account? Sign in</ForgotButton>
        </Grid>
        <CopyRight>Copyright © Your Website 2022.</CopyRight>
      </FormContainer>
    </LoginGrid>
  );
};

export default SignUp;
