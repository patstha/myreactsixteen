import React from "react";
import { TextField } from 'office-ui-fabric-react';
export const Program: React.FunctionComponent = () => {
    let mytextfield = "";
    return (
        <>
        <h1>Hello, Pratikchhya!</h1>
        <TextField title="my title" description="my description" value={mytextfield}></TextField>
        </>
    );
}
