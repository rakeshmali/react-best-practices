import React, {useState} from 'react';
import PropTypes from 'prop-types';
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Paper from "@mui/material/Paper";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import {makeStyles} from "@mui/styles";
import DiscountsItems from "./DiscountsItems";

const useStyles = makeStyles({
    paper: {
        width: 500,
        height: 150,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        margin: '15px'
    },
});

const Discounts = ({ discounts, showDiscounts, updateShowDiscounts }) => {
    const classes = useStyles();

    return (
        <>
            <Typography variant="h6" component="h6">Discounts</Typography>
            <Switch
                checked={showDiscounts}
                onChange={updateShowDiscounts}
                color="primary"
                name="checkedB"
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <DiscountsItems discounts={discounts} showDiscounts={showDiscounts} classes={classes}/>
        </>
    );
};

Discounts.propTypes = {
    updateShowDiscounts: PropTypes.func,
    vacations: PropTypes.object,
};

export default Discounts;