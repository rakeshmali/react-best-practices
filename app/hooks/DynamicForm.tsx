import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Fab from "@mui/material/Fab";
import {Box, TextField} from "@mui/material";
import { Add } from '@mui/icons-material';
import useInterval from '@/app/hooks/useInterval';

const getElementFields = (_fields: string[]) => {
    return _fields.map((field, index) => (
        <TextField
            key={index}
            id={field}
            label={field}
            variant="outlined"
            color="secondary"
    />));
}

const DynamicForm = ({ labels, isExtendedForm }: { labels: string[], isExtendedForm: boolean }) => {

    const [fields, setFields] = useState(labels);

    const [fieldElements, setFieldElements] = useState(getElementFields(fields));
    const containerRef = useRef<HTMLDivElement>(null);

    const handleAddNewField = () => {
        setFields([...fields, `New Field`])
    }

    const getContainerHeight = () => {
        if(containerRef?.current) return containerRef.current.clientHeight;
    }

    useEffect(() => {
        if(isExtendedForm && fields.length > 3) {
            setFieldElements(getElementFields(fields));
        } else {
            setFieldElements(getElementFields(fields.slice(0, 3)));
        }
    }, [fields, isExtendedForm]);

    // useInterval(() => {
    //     setFields([...fields, `New Field`])
    // }, 3000)

    return (
        <>
            <Box 
                ref={containerRef}  
                sx={{
                    display: 'grid',
                    gridColumnGap: '10px',
                    gridRowGap: '15px',
                    gridTemplateColumns: '2fr 2fr 2fr',
                    margin: '30px',
                }}>
                {fieldElements}
                <div>{getContainerHeight()}</div>
            </Box>
            <Fab color="secondary" aria-label="add">
                <Add onClick={handleAddNewField} />
            </Fab>
        </>
    );
};

DynamicForm.propTypes = {
    labels: PropTypes.array,
};

export default DynamicForm;
