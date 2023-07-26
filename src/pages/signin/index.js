import { Card, Container, Form } from "react-bootstrap";
import { useState } from "react";
import SAlert from "../../components/alert";
import {  useNavigate } from "react-router-dom";
import FormCompo from "./form";
import { postData } from "../../utils/fetchData";
import { useDispatch  } from "react-redux";
import { userLogin } from "../../redux/auth/action";

function PageSignin() {
    const dispatch = useDispatch() 
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
            const result = await postData (`/cms/auth/signin`,
            form  
            )
            dispatch(userLogin(result.data.data.token, result.data.data.role,))
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
