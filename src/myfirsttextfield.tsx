import React from 'react';
import { TextField } from 'office-ui-fabric-react';

export const MyFirstTextField: React.FunctionComponent = () => {
    return (
        <>
            <TextField
                aria-label='this is a sample text field'
                label='my label'
                title="my title"
                description="my description"
                errorMessage="this is my error message"
                placeholder="my placeholder"
            >
            </TextField>
        </>
    );
}