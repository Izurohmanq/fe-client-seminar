import React from "react";
import { Navigate } from "react-router-dom";
import { Container, Table } from "react-bootstrap";
import SButton from "../../components/button";
import SBreadCrum from "../../components/BreadCrum";
import SNavbar from "../../components/Navbar";

function Dashboard() {
	const token = localStorage.getItem("token");

	// kalau tokennya salah kita balikkan ke signin
	if (!token) {
		return <Navigate to="/signin" replace={true} />;
	}

	return (
		<Container>
			<SNavbar />

			<div className="m-3 ">
				<SBreadCrum />
				<SButton>Tambah</SButton>
				<Table className="mt-3" striped bordered hover variant="dark">
					<thead>
						<tr>
							<th>#</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Username</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>Mark</td>
							<td>Otto</td>
							<td>@mdo</td>
						</tr>
						<tr>
							<td>2</td>
							<td>Jacob</td>
							<td>Thornton</td>
							<td>@fat</td>
						</tr>
						<tr>
							<td>3</td>
							<td colSpan={2}>Larry the Bird</td>
							<td>@twitter</td>
						</tr>
					</tbody>
				</Table>
			</div>
		</Container>
	);
}

export default Dashboard;
