import produce from 'immer';
import * as constants from './constants';

export const initialState = {
};

/* eslint-disable no-param-reassign */
const AuthReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case constants.GET_AUTH_SUCCESS:
                draft.user = action.payload.user;
                draft.orders = action.payload.orders;
                break;
            case constants.GET_AUTH_ERROR:
                break;
            default:
                break;
        }
    });

export default AuthReducer;
