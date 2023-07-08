import React from "react";
import { Form } from "react-bootstrap";

function TextInput({name, value, type, onChange, placeholder }) {
    return (
        <Form.Control
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    )
}

export default TextInput