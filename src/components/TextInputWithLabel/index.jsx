import React from "react";
import { Form } from "react-bootstrap";
import TextInput from "../TextInput";


function TextInputWithLabel({label, name, value, type, onChange, placeholder }) {
    return (
        <Form.Group>
            <Form.Label>{label}</Form.Label>
            <TextInput
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </Form.Group>
    )
}

export default TextInputWithLabel