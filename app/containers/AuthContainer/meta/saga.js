import { all, takeLatest, put, call, select } from 'redux-saga/effects';
import * as constants from "./constants";
import * as actions from "./actions";
import makeSelectLoginPage from '../../LoginPage/meta/selectors';
import network from '@/app/utils/network';
import { getEndpointURL } from '@/app/utils/endpoint';
import { clearDataFromStorage, saveDataToStorage } from '@/app/utils/cookies';

function* handleGetAuth() {
    try {
        const loginPage = yield select(makeSelectLoginPage());
        const request = { username: loginPage.username, password: loginPage.password };
        const action = getEndpointURL('AUTHENTICATE');
        const response = yield call(network.postData, action, request);
        yield call(saveDataToStorage, response);
        network.setCredentials(response.token);
        yield put(actions.getAuthSuccess(response))

    } catch(error) {
        yield put(actions.getAuthError(error))
    }
}

function* handleLogout() {
    yield call(clearDataFromStorage);
}

export default function*() {
    yield all([
        yield takeLatest(constants.GET_AUTH, handleGetAuth),
        yield takeLatest(constants.LOGOUT, handleLogout),
    ]);
}