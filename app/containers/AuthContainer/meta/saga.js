import { all, takeLatest, put, call } from 'redux-saga/effects';
import * as constants from "./constants";
import * as actions from "./actions";

function* handleGetAuth() {
    try {
        yield put(actions.getAuthSuccess())
    } catch(error) {
        yield put(actions.getAuthError(error))
    }
}

export default function* authSaga() {
    yield all([
        yield takeLatest(constants.GET_AUTH, handleGetAuth),
    ]);
}