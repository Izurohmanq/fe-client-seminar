import React from "react";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import SButton from "../../components/button";
import { Form } from "react-bootstrap";

function FormCompo({ form, handleChange, handleSubmit, loading }) {
	return (
		<div>
			<Form>
				{/* <Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control name="email" value={form.email} type="email" placeholder="Enter email" onChange={handleChange}/>
							<Form.Text className="text-muted">
								We'll never share your email with anyone else.
							</Form.Text>
						</Form.Group> */}
				<TextInputWithLabel
					label="Email"
					name="email"
					type="email"
					value={form.email}
					placeholder="Enter Email"
					onChange={handleChange}
				/>
				<TextInputWithLabel
					label="Password"
					name="password"
					type="password"
					value={form.password}
					placeholder="Enter password"
					onChange={handleChange}
				/>
				<SButton
					loading={loading}
					disabled={loading}
					action={handleSubmit}
					variant="primary"
					type="submit"
					className="mt-3"
				>
					Submit
				</SButton>
			</Form>
		</div>
	);
}

export default FormCompo;
