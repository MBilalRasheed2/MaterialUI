import { Card, Grid, styled, Typography } from '@mui/material'
import React from 'react'
import CheckoutStepper from './CheckoutStepper'

const Checkout = () => {
    return (
        <Grid container md={6} py={2} mx={'auto'}>
            <Grid py={2} md={12}>
                <Typography variant="h2" component="h2">
                    Checkout
                </Typography>
                <CheckoutStepper />
            </Grid>

        </Grid>
    )
}

export default Checkout
