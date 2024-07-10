import React from 'react';
import {withStyles, makeStyles} from '@mui/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

function OrdersHistory({ orders }) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Destination</StyledTableCell>
                        <StyledTableCell>From</StyledTableCell>
                        <StyledTableCell>To</StyledTableCell>
                        <StyledTableCell align="right">Total</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders.map((row) => (
                        <StyledTableRow key={row.destination}>
                            <StyledTableCell component="th" scope="row">
                                {row.destination}
                            </StyledTableCell>
                            <StyledTableCell>{row.from}</StyledTableCell>
                            <StyledTableCell>{row.to}</StyledTableCell>
                            <StyledTableCell align="right">{row.price}&#36;</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

OrdersHistory.propTypes = {};

export default OrdersHistory;
