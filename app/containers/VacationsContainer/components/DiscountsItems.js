import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const DiscountsItems = ({ discounts, showDiscounts, classes }) => {
  const [selected, setSelected] = useState('');

  return (
    <>
      {showDiscounts ? (
        <Paper variant="outlined">
          <List component="nav" aria-label="secondary mailbox folders">
            {discounts?.map((vac, index) => (
              <ListItem
                key={index}
                onClick={() => setSelected(vac.id)}
                button
                selected={vac.id === selected}
              >
                <ListItemText primary={`${vac.destination} 15% OFF`} />
              </ListItem>
            ))}
          </List>
        </Paper>
      ) : (
        <Paper classes={{ root: classes?.paper }}> Discounts are hidden</Paper>
      )}
    </>
  );
};

DiscountsItems.propTypes = {
  vacations: PropTypes.object,
};

export default DiscountsItems;
