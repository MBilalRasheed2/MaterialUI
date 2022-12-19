import { Grid, TextField, Typography } from '@mui/material'
import React from 'react'

const OrderSummary = () => {
  const summary = [
    { name: 'Product 1', dec: 'A nice thing', price: 9.99 },
    { name: 'Product 2', dec: 'Another thing', price: 4.99 },
    { name: 'Product 3', dec: 'Something else', price: 6.99 },
    { name: 'Product 4', dec: 'Best thing of all', price: 14.99 },

  ]

  return (
    <Grid container mx={2} rowSpacing={2} md={12} sm={12}>
      <Grid item my={2} mx={2} md={12}>
        <Typography variant='h4' component={'h2'}>
          Order summary
        </Typography>
      </Grid>
      {
        summary.map(function (item) {
          return (<OrderDetails item={item} />)
        })
      }

      <OrderDetails item={{name:'Shipping',price:34.06}} />
    </Grid>
  )
  
}

const OrderDetails = ({item}) =>{
  return (<Grid key={item.name} item my={2} mx={2} md={12} sm={12}>
    <Grid direction={'row'} container alignItems={'center'} justifyContent='space-between' columnSpacing={2} px={2}>
      <Grid>
        <Typography variant='h6' component={'h2'}>
          {item.name}
        </Typography>
        <Typography color={'rgba(0, 0, 0, 0.6)'} variant='subtitle1' component={'h2'}>
          {item.dec}
        </Typography>
      </Grid>
      <Grid>
        <Typography>
          ${item.price}
        </Typography>
      </Grid>
    </Grid>
  </Grid>)
}

export default OrderSummary
