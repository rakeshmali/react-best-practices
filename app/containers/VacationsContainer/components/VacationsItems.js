import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Vacation from "./Vacation";

const VacationsItems = ({ vacations, updateSelectedVacation }) => {
    return (
        vacations?.map((vacation,index) => (
                <Vacation key={index} vacation={vacation} updateSelectedVacation={updateSelectedVacation}/>))
    );
};

VacationsItems.propTypes = {
    vacations: PropTypes.array,
};

export default memo(VacationsItems);
