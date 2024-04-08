import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/esm/Button';
import { useState } from 'react';
import axios from 'axios';
import "./home.css";
import { Alert, AlertHeading, Button} from 'react-bootstrap';

axios.defaults.baseURL = "http://localhost:9000"

function Sform() {
    const [validated, setValidated] = useState(false);
    const [done, isDone] = useState(false); 
    const [formData,setFormData] = useState({
        username : "",
        password : "",
        email : "",
    })

    const handleOnChange = (e)=>{
        const {value,name} = e.target
        setFormData((preve)=>{
            return{
                ...preve,
                [name] : value
            }
        })
    }
    if(done) {
        return(
            <>
            <Alert variant='success'>
                <AlertHeading>
                    Sign Up Success
                    <br>
                    </br>Login to Continue ......
                </AlertHeading>
                <Button onClick={() => isDone(false)} variant="outline-success">
            Close me
          </Button>
            </Alert>
            </>
        )
    }


    const handleSubmit = async(event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
       
        event.preventDefault()
        const data = await axios.post("/create",formData)
        console.log(data)
        if (data.data === "success"){
            isDone(true);
        }
    };
    return (
        <Form noValidate validated={validated} name='oooo' onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control type='text' name='username' className='username' id='username' onChange={handleOnChange} required></Form.Control>
                <Form.Control.Feedback type='invalid'> Field Empty</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' name='password' className='password' id='password' onChange={handleOnChange} required></Form.Control>
                <Form.Control.Feedback type='invalid'> Field Empty</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type='password' name='cpass' className='cpass' id='cpass' required></Form.Control>
                <Form.Control.Feedback type='invalid'> Field Empty</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' name='email' className='email' id='email' onChange={handleOnChange} required></Form.Control>
                <Form.Control.Feedback type='invalid'> Field Empty</Form.Control.Feedback>
            </Form.Group>
            <button className='btn btn-dark'  type='submit'> submit</button>
            {/* <Button >Submit</Button> */}
        </Form>
    )
}

export default Sform;