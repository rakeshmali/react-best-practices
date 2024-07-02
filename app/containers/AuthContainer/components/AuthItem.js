import React, {memo} from 'react';
import PropTypes from 'prop-types';
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";

const AuthItem = ({ item, selectedKey, icon, onClick }) => {
    return (<ListItem button
                      onClick={onClick}
                      selected={selectedKey === item.key}
                      aria-selected={selectedKey === item.key}
                      key={item.key}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={item.text} />
    </ListItem>);
};

AuthItem.propTypes = {
    item: PropTypes.object,
    selectedKey: PropTypes.string,
    icon: PropTypes.object,
    onClick: PropTypes.func
};

export default memo(AuthItem);
