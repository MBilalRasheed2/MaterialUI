import React from 'react'
import { deepOrange, deepPurple } from '@mui/material/colors';
import { Avatar, Button, Checkbox, FormControlLabel, FormGroup, Grid, styled, TextField, Typography } from '@mui/material'
import HttpsIcon from '@mui/icons-material/Https';
const LoginGrid = styled(Grid, { name: 'login-grid' })({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '100px 10px 10px 10px'
})
const FormContainer = styled(Grid, { name: 'form-container' })((theme)=>{
   
    return{
        margin: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.theme.breakpoints.up('md')]: {
            minWidth: 500,
            width:'480px',
            
        },
        [theme.theme.breakpoints.up('sm')]: {
            minWidth: 500,
            width:'480px',
            
        },
        [theme.theme.breakpoints.up('lg')]: {
            minWidth: 500,
            width:'480px',
            
        }
    
    }
})

const FormInput = styled(TextField, 'email-address')({
    margin: '10px',
    borderRadius: '50px'
})
const CheckboxInput = styled(FormControlLabel, 'email-address')({
  
    alignSelf:'flex-start',
    marginBottom:'10px'
})
const LoginButton = styled(Button)({
    
})
const ForgotButton = styled(Button)({
    fontSize: '0.875rem',
    fontWeight:400,
    margin:'10px 0px 0px 0px'

})
const SignInTitle = styled(Typography)({
    fontFamily: "Roboto",
    fontWeight: 400,
    fontSize: '1.5rem',
})


const LoginPage = () => {
    return (
        <LoginGrid container md={12}>
            <Avatar sx={{ bgcolor: deepPurple[500], width: 46, height: 46 }}  >
                <HttpsIcon sx={{ width: 26, height: 26 }} />
            </Avatar>
            <SignInTitle>
            Sign in

            </SignInTitle>
            <FormContainer>
                <FormInput fullWidth label="Email Address" variant="outlined" />
                <FormInput fullWidth label="Password *" variant="outlined" />
                <CheckboxInput control={<Checkbox defaultChecked />} label="Remember me" />
                <LoginButton fullWidth variant='contained'>Login</LoginButton>
                <Grid container alignSelf={'center'} justifyContent={"space-between"}>
                    <ForgotButton >Forgot password?</ForgotButton>
                    <ForgotButton>Don't have an account? Sign Up</ForgotButton>
                </Grid>

            </FormContainer>

        </LoginGrid>
    )
}

export default LoginPage
