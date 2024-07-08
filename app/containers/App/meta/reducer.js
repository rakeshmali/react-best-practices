/* eslint-disable no-param-reassign */
import produce from 'immer';
import { getTheme } from './theme';

export const initialState = {
  theme: getTheme(),
  mode: 'light',
};

const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case 'UPDATE_THEME_MODE':
        draft.theme = getTheme(action.payload);
        break;
      default:
        break;
    }
  });

export default appReducer;
