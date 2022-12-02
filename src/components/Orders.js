import { Card, Paper, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";

const Orders = () => {
    return (<TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell align="right">Shape</TableCell>
                    <TableCell align="right">Name</TableCell>
                    <TableCell align="right">Ship To</TableCell>
                    <TableCell align="right">Payment Method</TableCell>
                    <TableCell align="right">Sale Amount</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
              {[1,2,3,4,5].map(item=>(  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell align="right">Shape</TableCell>
                    <TableCell align="right">Name</TableCell>
                    <TableCell align="right">Ship To</TableCell>
                    <TableCell align="right">Payment Method</TableCell>
                    <TableCell align="right">Sale Amount</TableCell>
                </TableRow>))}
            </TableBody>
        </Table>
    </TableContainer>)
}

export default Orders