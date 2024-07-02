import { connect } from 'react-redux';
import Navigation from './components/Auth';

const mapStateToProps = state => ({
    routes: [{ key: 'home', path: 'home', text: 'Home' }, { key: 'vacations', path: 'vacations', text: 'Vacations' }]
});

const mapDispatchToProps = {};

const AuthContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Navigation);

export default AuthContainer;
