import { Grid, TextField, Typography } from '@mui/material'
import React from 'react'


const PaymentMethod = () => {
  const gereralProps = {
    xs: 12, sm: 6, md: 6, px: 1
  }
  const gereralProps2 = {
    xs: 11, sm: 11, md: 11, px: 1, mx: 1
  }
  return (
    <Grid container mx={2} rowSpacing={2}>
      <Grid item my={2} mx={2}>
        <Typography variant='h4' component={'h2'}>
          Payment Method
        </Typography>
      </Grid>
     
      <Grid item {...gereralProps2}>
        <TextField fullWidth id="standard-basic" label="Name on Card*" variant="standard" />
      </Grid>
      <Grid item {...gereralProps2}>
        <TextField fullWidth id="standard-basic" label="Card number*" variant="standard" />
      </Grid>
      <Grid item {...gereralProps2}>
        <TextField fullWidth id="standard-basic" label="Expiry Date*" variant="standard" />
      </Grid>
      <Grid item {...gereralProps2}>
        <TextField fullWidth id="standard-basic" label="CVV*" variant="standard" />
      </Grid>
     
      
    </Grid>
  )
}

export default PaymentMethod
