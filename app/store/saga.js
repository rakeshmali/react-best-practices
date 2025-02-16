import {all} from 'redux-saga/effects';
import vacationsSaga from '@/app/containers/VacationsContainer/meta/saga';
import profileSaga from '@/app/containers/ProfileContainer/meta/saga';
import authSaga from '@/app/containers/AuthContainer/meta/saga';

export default function* saga() {
    yield all([
        vacationsSaga(),
        profileSaga(),
        authSaga(),
    ]);
}

