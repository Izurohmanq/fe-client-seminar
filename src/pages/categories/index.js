import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Container, Table, Spinner } from "react-bootstrap";
import SButton from "../../components/button";
import SBreadCrum from "../../components/BreadCrum";
import SNavbar from "../../components/Navbar";
import axios from "axios";
import { config } from "../../config";

function CategoriesPage() {
	const token = localStorage.getItem("token");
    const navigate = useNavigate()

    const [data, setData] = useState([])
    const [counter, setCounter] = useState(0)
    const [IsLoading, setIsLoading] = useState(false)


    useEffect(() => {
        const getCategoriesData = async() => {
            setIsLoading(true)
            try {
                const result = await axios.get(`${config.api_host_dev}/cms/categories`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
                setTimeout(() => {
                    setData(result.data.data)
                    setIsLoading(false)
                }, 3000)
            } catch (error) {
                setIsLoading(false)
                console.log(error)
            }
        } 
      getCategoriesData()
    }, [token])
    
	// kalau tokennya salah kita balikkan ke signin
	if (!token) {
		return <Navigate to="/signin" replace={true} />;
	}

	return (
		<Container>
			<SNavbar />
            <SBreadCrum textSecond='Categories' />

            <SButton action={() => navigate('/categories/create')}>Create</SButton>
			<div className="m-3 ">
				<Table className="mt-3" striped bordered hover variant="dark">
					<thead>
						<tr>
							<th>Nomor</th>
							<th>Name</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
                        {IsLoading 
                            ? (<tr>
                                <td colSpan={data.length + 1} className="text-center">
                                    <div className="flex items-center justify-center">
                                        <Spinner animation="grow" variant="light"/>
                                    </div>
                                </td>
                            </tr>)  
                            : (data.map((data, index)=> (
                                <tr key={index}>
                                    <td>{(index += 1)}</td>
                                    <td>{data.name}</td>
                                    <td>testing</td>
                                </tr>
                            )))
                        }
					</tbody>
				</Table>
			</div>
		</Container>
	);
}

export default CategoriesPage;
