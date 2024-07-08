import { connect } from 'react-redux';
import Navigation from './components/Navigation';
import { logout } from '../AuthContainer/meta/actions';
import { getUser } from '../AuthContainer/meta/selectors';
import { updateThemeMode } from '@/app/containers/App/meta/actions';
import { selectTheme } from '../App/meta/selectors';

const mapStateToProps = (state) => ({
    routes: [
        {
            key: 'home',
            path: 'home',
            text: 'Home' },
        {
            key: 'vacations',
            path: 'vacations',
            text: 'Vacations' }
        ],
    user: getUser(state),
    mode: selectTheme(state)
});
const mapDispatchToProps = {
    logout,
    updateThemeMode,
};

const NavigationContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Navigation);

export default NavigationContainer;
