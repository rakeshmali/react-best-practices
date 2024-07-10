import { connect } from 'react-redux';
import Vacations from './components/Vacations';
import {getVacations} from "./meta/actions";
import {makeSelectVacations, selectDiscounts, getShowDiscounts, selectActiveVacationId} from "./meta/selectors";
import {updateShowDiscounts, updateSelectedVacation} from "./meta/actions";

const mapStateToProps = state => ({
    vacations: makeSelectVacations(state),
    showDiscounts: getShowDiscounts(state),
    discounts: selectDiscounts(state),
    activeVacationId: selectActiveVacationId(state),
});

const mapDispatchToProps = ({
    getVacations,
    updateShowDiscounts,
    updateSelectedVacation,
});

const VacationsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Vacations);

export default VacationsContainer;