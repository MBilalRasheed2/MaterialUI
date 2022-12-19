import { Grid, styled, TextField, Typography } from '@mui/material'
import React from 'react'


const ShoppingAddress = () => {
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
                    Shipping Address
                </Typography>
            </Grid>
            <Grid item xs={11} sm={11} md={11}>
                <Grid md={12} container mx={1} >
                    <Grid item {...gereralProps}>
                        <TextField fullWidth id="standard-basic" label="First name" variant="standard" />
                    </Grid>
                    <Grid item {...gereralProps}>
                        <TextField fullWidth id="standard-basic" label="Last name" variant="standard" />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item {...gereralProps2}>
                <TextField fullWidth id="standard-basic" label="Address line 1" variant="standard" />
            </Grid>
            <Grid item {...gereralProps2}>
                <TextField fullWidth id="standard-basic" label="Address line 2" variant="standard" />
            </Grid>
            <Grid item xs={11} sm={11} md={11}>
                <Grid md={12} container mx={1} >
                    <Grid item {...gereralProps}>
                        <TextField fullWidth id="standard-basic" label="City *" variant="standard" />
                    </Grid>
                    <Grid item {...gereralProps}>
                        <TextField fullWidth id="standard-basic" label="State/Province/Region" variant="standard" />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={11} sm={11} md={11}>
                <Grid md={12} container mx={1} >
                    <Grid item {...gereralProps}>
                        <TextField fullWidth id="standard-basic" label="Zip/Postal code *" variant="standard" />
                    </Grid>
                    <Grid item {...gereralProps}>
                        <TextField fullWidth id="standard-basic" label="Country *" variant="standard" />
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default ShoppingAddress
