import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from "@mui/styles";
import Vacation from "./Vacation";
import Discounts from "./Discounts";
import VacationsItems from "./VacationsItems";

const useStyles = makeStyles({
    vacationsRoot: {
        display: 'grid',
        gridColumnGap: '10px',
        gridRowGap: '15px',
        gridTemplateColumns: '2fr 2fr 2fr',
    },
});

function Vacations({ getVacations, updateShowDiscounts, vacations, discounts, showDiscounts, activeVacationId, updateSelectedVacation }) {
    useEffect(() => {
        if (getVacations) {
            getVacations()
        }
    }, []);

    const classes = useStyles();

    return (
        <>
            <Discounts updateShowDiscounts={updateShowDiscounts} discounts={discounts} showDiscounts={showDiscounts} />
            <div className={classes.vacationsRoot}>
                <VacationsItems vacations={vacations} updateSelectedVacation={updateSelectedVacation}/>
            </div>
        </>
    );
}

Vacations.propTypes = {
    getVacations: PropTypes.func,
    vacations: PropTypes.array,
    discounts: PropTypes.array,
    showDiscounts: PropTypes.bool,
    updateShowDiscounts: PropTypes.func,
};

export default Vacations;
