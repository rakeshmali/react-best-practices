import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from "@mui/styles";
import Vacation from "./Vacation";

const useStyles = makeStyles({
    vacationsRoot: {
        display: 'grid',
        gridColumnGap: '10px',
        gridRowGap: '15px',
        gridTemplateColumns: '2fr 2fr 2fr',
    },
});

function Vacations({ getVacations, vacations }) {

    const [items, setItems] = React.useState([]);

    useEffect(() => {
        if (getVacations) {
            getVacations()
        }
    }, []);

    useEffect(() => {
        if (!vacations || vacations.length === 0) {
            return;
        }
        console.log('vacations are', vacations);
        const vacationsElements = vacations?.vacations?.map(vacation => (
            <Vacation vacation={vacation} />)
        );
        setItems(vacationsElements)
    }, [vacations]);

    const classes = useStyles();

    return <div className={classes.vacationsRoot}>
        {items}
    </div>;
}

Vacations.propTypes = {
    getVacations: PropTypes.func,
    vacations: PropTypes.array,
};

export default Vacations;
