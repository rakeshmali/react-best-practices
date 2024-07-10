import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from "@mui/styles";
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
    },
    media: {
        height: 140,
    },
});

export function Vacation({ vacation, updateSelectedVacation }) {
    const classes = useStyles();

    return (
        <Card onClick={() => updateSelectedVacation(vacation.id)} className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    className={classes.media}
                    src={vacation.image}
                    title={vacation.description}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {vacation.destination}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {vacation.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="contained" size="small" color="primary">
                    Order
                </Button>
                <Button size="small" color="secondary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}

Vacation.propTypes = {
    vacation: PropTypes.object
};

export default Vacation;
