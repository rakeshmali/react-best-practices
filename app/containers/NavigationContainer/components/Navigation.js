import React, {memo, useEffect} from 'react';
import clsx from 'clsx';
import { useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { ChevronLeft, ChevronRight, ExitToApp, Home, Menu, Villa} from '@mui/icons-material';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {styles} from "../meta/styles";
import NavItem from "./NavItem";
import { Button, Switch } from '@mui/material';
import PropTypes from 'prop-types';
import VacationsContainer from '@/app/containers/VacationsContainer';
const useStyles = styles;
const icons = {
    'home': <Home />,
    'vacations': <Villa />,
};

function Navigation({ routes, user, logout, mode, updateThemeMode }) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [items, setItems] = React.useState([]);
    const [selectedKey, setSelectedKey] = React.useState(routes[0].key);

    console.log('mode', mode);

    useEffect(() => {
        const drawerItems = routes.map(route => (
            <NavItem onClick={() => setSelectedKey(route.key)}
                     selectedKey={selectedKey}
                     icon={icons[route.key]}
                     item={route} />)
        );
        setItems(drawerItems)
    }, [routes, selectedKey]);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const changeThemeMode = () => {
        if (mode.palette.mode === 'light') {
            updateThemeMode('dark');
        } else {
            updateThemeMode('light');
        }
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" noWrap className={classes.title}>
                        Vacations
                    </Typography>
                    <Switch
                        value={mode.palette.mode === 'dark'}
                        onChange={changeThemeMode}
                        color="secondary"
                        inputProps={{ 'aria-label': 'checkbox with default color' }}
                    />
                    {user && <Typography variant="h6" noWrap>{user.username}</Typography>}
                    {user && <Button onClick={logout} color="inherit">Sign Out</Button>}

                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {items}
                </List>
                <Divider />
                <List>
                    {['Sign Out'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{<ExitToApp />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
                <VacationsContainer />
            </main>
        </div>
    );
}

Navigation.propTypes = {

};

export default memo(Navigation);
