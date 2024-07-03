import { connect } from 'react-redux';
import Auth from './components/Auth';

const mapStateToProps = state => ({
    auth: selectUser(state),
});

const mapDispatchToProps = ({
    getAuth
});

constAuthContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Auth);

export default AuthContainer;