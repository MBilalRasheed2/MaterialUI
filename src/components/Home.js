import { Card, Grid, Typography,styled } from '@mui/material';
import { data } from '../data/lineData'
import Layout from './body/Layout';
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { colors } from '../themes';


import React from "react";
import Orders from './Orders'

const RecentDeposits = styled(Grid, { name: 'recent-deposit' })((theme) => {
    return {
      color: colors.primary,
      fontSize: '20px',
      fontWeight: 'bold',
      fontFamily: 'Roboto","Helvetica","Arial",sans-serif'
    }
  })
  
  const RecentDepositsAmount = styled(Typography, { name: 'recent-deposit-amount' })((theme) => {
    return {
      color: colors.black,
      fontWeight: 500,
      fontSize: '2.25rem',
      fontFamily: 'Roboto","Helvetica","Arial",sans-serif'
    }
  })
  
  const RecentDepositsDate = styled(Typography, { name: 'recent-deposit-amount' })((theme) => {
    return {
      color: colors.green,
      fontWeight: 400,
      fontSize: '1rem',
      fontFamily: 'Roboto","Helvetica","Arial",sans-serif',
      height: '40%',
    }
  })
  
  const ViewRecentDeposits = styled(Grid, { name: 'view-recent-deposit' })((theme) => {
    return {
      color: colors.primary,
      fontSize: '15px',
      fontWeight: '400',
      fontFamily: 'Roboto","Helvetica","Arial",sans-serif',
      textDecoration: 'underline'
    }
  })
  const LargeGridGraph = styled(Grid, { name: 'large-grid-graph' })((theme) => {
    return {
      margin: '10px 0px 10px 10px'
    }
  })
  const SmallGridDeposit = styled(Grid, { name: 'snmall-grid-depsoit' })((theme) => {
    return {
      margin: '10px 10px 10px 10px'
    }
  })
  
  const OrderTable = styled(Grid, { name: 'order-grid-depsoit' })((theme) => {
  
    return {
      [theme.theme.breakpoints.up('md')]: { margin: '0px 20px 25px 10px' },
      [theme.theme.breakpoints.up('sm')]: { margin: '0px 20px 25px 10px' },
      [theme.theme.breakpoints.up('lg')]: { margin: '0px 25px 25px 10px' }
  
  
    }
  })
const Home = () => {
    return (

        <Layout>
            <Grid container spacing={2} marginY={2} paddingTop={10}>

                <Grid container md={12}>
                    <LargeGridGraph md={8}>
                        <Card sx={{ padding: '20px' }} >
                            <LineChart width={730} height={250} data={data}
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                            </LineChart>
                        </Card>
                    </LargeGridGraph>
                    <SmallGridDeposit md={3.5} >
                        <Card sx={{ padding: '20px', height: '250px' }}>
                            <Grid md={12} marginX={1}>
                                <RecentDeposits color="secondary">Recent Deposits</RecentDeposits>
                            </Grid>
                            <Grid md={12} marginX={1} marginY={2}>
                                <RecentDepositsAmount variant="h4" component="h5" color={''}>
                                    $3,024.00
                                </RecentDepositsAmount>
                            </Grid>
                            <Grid md={12} marginX={2} marginY={2}>
                                <RecentDepositsDate variant="h6" component="h6" color={''}>
                                    on 15 March, 2019
                                </RecentDepositsDate>
                            </Grid>
                            <Grid md={12} marginX={2} marginY={12}>
                                <ViewRecentDeposits variant="h6" component="h6" color={''}>
                                    View balance
                                </ViewRecentDeposits>
                            </Grid>
                        </Card>
                    </SmallGridDeposit>
                </Grid>
                <OrderTable container md={12}>
                    <Orders />

                </OrderTable>
            </Grid>
        </Layout>

    )
}

export default Home