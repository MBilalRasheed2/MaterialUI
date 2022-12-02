import { Container, styled } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { colors } from '../../themes'
import Header from '../header/Header'


const RecentDepositsDate = styled(Box, { name: 'recent-deposit-amount' })((theme) => {
    return {
      backgroundColor:'#f5f5f5',
      color: colors.green,
      fontWeight: 400,
      fontSize: '1rem',
      fontFamily: 'Roboto","Helvetica","Arial",sans-serif',
      height: '40%'
    }
  })
  
const Layout = (props) => {
    return (
        <RecentDepositsDate>
            <Header />
            <Container maxWidth="lg"> 
                {
                    props.children
                }
            </Container>
        </RecentDepositsDate>
    )
}

export default Layout
