import { initialState } from './reducer';
/**
 * Get Auth
 * @param state
 * @returns {Object}
 */
const select = state => state.profile || initialState;
