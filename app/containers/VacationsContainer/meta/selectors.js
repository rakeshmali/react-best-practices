import { initialState } from './reducer';
import { createSelector } from 'reselect';

export const select = (state) => state.vacations || initialState;
export const selectVacations = (state) => select(state).vacations;
export const makeSelectVacations = createSelector(
  selectVacations,
  (vacations) => {
    console.log('selectVacations');
    return vacations.map((vacation) => ({
      ...vacation,
      description: 'Hello ' + vacation.description,
    }));
  }
);

export const selectDiscounts = (state) => select(state).discounts;
export const getShowDiscounts = (state) => select(state).showDiscounts;

  export const selectActiveVacationId = (state) => select(state).activeVacationId;