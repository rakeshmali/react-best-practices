import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import PageWrapper from "../../../components/Common/PageWrapper";
import LoginLayout from "../../../components/Login/LoginLayout";
import LoginForm from "../../../components/Login/LoginForm";
import useStyles from "./styles";
import { Box } from '@mui/material';

const LoginPage = ({ dispatchPasswordChange, dispatchUsernameChange, dispatchAuthenticate }) => {

    const handleUsernameChange = (e) => dispatchUsernameChange(e.target.value);

    const handlePasswordChange = (e) => dispatchPasswordChange(e.target.value);

    const classes = useStyles();

    return (
        <PageWrapper height="100vh" textAlign="center" width="100%">
            <LoginLayout>
                <Card
                    classes={{ root: classes.cardRoot }}
                    className={classes.loginCard}
                >
                    <CardContent classes={{ root: classes.cardContentRoot }}>
                        <div className={classes.logoLoginRoot}>
                            <Box
                                component={'img'}
                                sx={{width: '115px'}}
                                alt="logo"
                                src={'../../../assets/logo.png'}
                            />
                        </div>
                        <LoginForm
                            forgotPasswordClass={classes.forgotPasswordClass}
                            handlePasswordChange={handlePasswordChange}
                            submit={dispatchAuthenticate}
                            handleUsernameChange={handleUsernameChange}
                            formControlClass={classes.formControl}
                            inputClass={classes.input}
                        />
                    </CardContent>
                </Card>
            </LoginLayout>
        </PageWrapper>
    );
};

LoginPage.propTypes = {
    dispatchUsernameChange: PropTypes.func,
    dispatchPasswordChange: PropTypes.func,
    dispatchAuthenticate: PropTypes.func,
    classes: PropTypes.object.isRequired,
};

export default memo(LoginPage);
