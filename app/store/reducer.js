import { combineReducers } from "redux";
import app from '@/app/containers/App/meta/reducer';
import loginPage from '@/app/containers/LoginPage/meta/reducer';
import vacations from '@/app/containers/VacationsContainer/meta/reducer';
import profile from '@/app/containers/ProfileContainer/meta/reducer';
import Auth from '@/app/containers/AuthContainer/meta/reducer';

export default combineReducers({
    loginPage,
    app,
    profile,
    vacations,
    Auth,
});

