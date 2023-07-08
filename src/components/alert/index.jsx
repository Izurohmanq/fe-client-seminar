import React from "react";
import { Alert } from "react-bootstrap";

function SAlert({message, variant}){
    return <Alert variant={variant} > {message} </Alert>
}

export default SAlert