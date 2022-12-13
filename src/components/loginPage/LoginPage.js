import React from 'react'
import { deepOrange, deepPurple } from '@mui/material/colors';
import { Avatar, Checkbox, FormControlLabel, FormGroup, Grid, styled, TextField } from '@mui/material'
import HttpsIcon from '@mui/icons-material/Https';
const LoginGrid = styled(Grid, { name: 'login-grid' })({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '100px 10px 10px 10px'
})
const FormContainer = styled(Grid, { name: 'form-container' })({
    minWidth: 300,
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
})

const FormInput = styled(TextField, 'email-address')({
    width: '80%',
    margin: '10px',
    borderRadius: '50px'
})
const CheckboxInput = styled(FormControlLabel, 'email-address')({
    margin: '10px',
})



const LoginPage = () => {
    return (
        <LoginGrid container md={12}>
            <Avatar sx={{ bgcolor: deepPurple[500], width: 86, height: 86 }}  >
                <HttpsIcon sx={{ width: 46, height: 46 }} />
            </Avatar>
            <FormContainer>
                <FormInput label="Email Address" variant="outlined" />
                <FormInput label="Password *" variant="outlined" />
                <CheckboxInput control={<Checkbox defaultChecked />} label="Remember me" />
            </FormContainer>

        </LoginGrid>
    )
}

export default LoginPage
