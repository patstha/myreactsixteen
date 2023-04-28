import React from 'react';
import { TextField } from 'office-ui-fabric-react';

export const MyFirstTextField: React.FunctionComponent = () => {
    return (
        <>
            <TextField
                title="my title"
                description="my description"
                placeholder="my placeholder"
            >
            </TextField>
        </>
    );
}