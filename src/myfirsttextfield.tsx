import React from 'react';
import { TextField } from 'office-ui-fabric-react';

export const MyFirstTextField: React.FunctionComponent = () => {
    let mytextfield = "";
    return (
        <>
            <TextField
                title="my title"
                description="my description"
                value={mytextfield}
                placeholder="my placeholder"
            >
            </TextField>
        </>
    );
}