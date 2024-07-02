import React, { useState } from 'react';
import DynamicForm from "./DynamicForm";
import PageWrapper from "@/app/components/Common/PageWrapper";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";

const labels = ['First Name', 'Last Name'];

const HomePage = () => {

    const [isExtendedForm, setIsExtendedForm] = useState(false);

    const handleChangeExtended = (_isExtendedForm: boolean) => {setIsExtendedForm(!_isExtendedForm)};

    return (
        <PageWrapper
            textAlign="left"
            marginTop={0}
            disableBackground={false}
            paddingLeftRight={0}
            padding={0}
            disableTopPadding={false}
            overflowY="auto"
            height="100%"
        >
            <Typography>Extended Form is {isExtendedForm ? `ON` : `OFF` }</Typography>
            <Switch
                checked={isExtendedForm}
                onChange={() => handleChangeExtended(isExtendedForm)}
                color="primary"
                name="checkedB"
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <DynamicForm labels={labels} isExtendedForm={isExtendedForm} />
        </PageWrapper>
    );
};

export default HomePage;
