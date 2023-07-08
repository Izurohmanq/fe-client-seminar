import { Card, Container, Form } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import SAlert from "../../components/alert";
import { Navigate, useNavigate } from "react-router-dom";
import { config } from "../../config";
import FormCompo from "./form";

function PageSignin() {
    const token = localStorage.getItem('token') // kita ambil dlu tokennya
    const navigate = useNavigate()
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    
    const [alert, setAlert] = useState({
        status: false,
        message: '',
        type: ''
    })

    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = async() => {
        setLoading(true)
        try {
            const result = await axios.post(`${config.api_host_dev}/cms/auth/signin`,
            form
            )
            localStorage.setItem('token', result.data.data.token)
            setLoading(false)
            navigate('/') //buat ngarahin ke halaman selanjutnya
        } catch (error) {
            setLoading(false)
            setAlert({
                status:true,
                message:error.response.data.msg,
                type:'danger'
            })
        }
    }
    
    if (token) { // kalau misalkan ada tokennya ya gak bisa masuk ke signin
        return (
            <Navigate to='/' replace={true} />
        )
    }
	return (
		<Container>
            <div className="m-auto w-50 mt-3">
                {alert.status && <SAlert variant={alert.type} message={alert.message}/>}
            </div>
			<Card style={{ width: "50%" }} className="m-auto mt-5">
				<Card.Title className="text-center mt-3">Form Login</Card.Title>
				<Card.Body>
					<FormCompo 
                        form={form}
                        handleChange={handleChange}
                        loading={loading}
                        handleSubmit={handleSubmit}
                    />
				</Card.Body>
			</Card>
		</Container>
	);
}

export default PageSignin;
