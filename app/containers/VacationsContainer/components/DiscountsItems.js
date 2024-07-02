import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const DiscountsItems = ({ vacations }) => {

    const [selected, setSelected] = useState('');

    return (
        <Paper variant="outlined">
            <List component="nav" aria-label="secondary mailbox folders">
                {vacations.discounts.map(vac => <ListItem onClick={() => setSelected(vac.id)} button selected={vac.id === selected}>
                    <ListItemText primary={`${vac.destination} 15% OFF`} />
                </ListItem>)}
            </List>
        </Paper>
    );
};

DiscountsItems.propTypes = {
    vacations: PropTypes.object,
};

export default DiscountsItems;
