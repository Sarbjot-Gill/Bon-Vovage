import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/esm/Button';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './home.css';
import { Alert, Button }  from 'react-bootstrap';



axios.defaults.baseURL = "http://localhost:9000/Login"

function Lform() {
  const [validated, setValidated] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [Wpassword , setWpassword] = useState(false); 


  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })


  const handleOnChange = (e) => {
    const { value, name } = e.target

    setFormData((preve) => {
      return {
        ...preve,
        [name]: value,

      }
    })
    console.log(value)
  }
  if (Loading) {
    return (
      <>
        <Alert variant='danger'>
          <Alert.Heading>
            User not found
          </Alert.Heading>
          <div className="d-flex justify-content-end">
          <Button onClick={() => setLoading(false)} variant="outline-danger">
            Close me
          </Button>
        </div>
        </Alert>
      </>
    )
  }
  if (Wpassword) {
    return (
      <>
        <Alert variant='danger'>
          <Alert.Heading>
            Wrong Password
          </Alert.Heading>
          <div className="d-flex justify-content-end">
          <Button onClick={() => setWpassword(false)} variant="outline-danger">
            Close me
          </Button>
        </div>
        </Alert>
      </>
    )
  }

  const handleSubmit = async (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    event.preventDefault()
    axios.post('http://localhost:9000/Login', formData)
      .then(result => {
        console.log(result)
        console.log(formData.username)
        if (result.data === "success") {
          navigate("/Tour", { state: formData.username });

        }
        if (result.data === "fail") {
          setWpassword(true);
        }
        if (result.data === "not register") {
          setLoading(true);

        }
      })
    // console.log(formData)
  };

  return (

    <Form noValidate validated={validated} name='oooo' onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>
          Username
        </Form.Label>
        <Form.Control type='text' name='username' onChange={handleOnChange} required></Form.Control>
        <Form.Control.Feedback type='invalid'> Field Empty</Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Group>
          Password
        </Form.Group>
        <Form.Control type='password' name='password' onChange={handleOnChange} required></Form.Control>
        <Form.Control.Feedback type='invalid'> Field Empty</Form.Control.Feedback>
      </Form.Group>
      <button className='btn btn-dark' type='submit'>Submit</button>
    </Form>

   

  )

}

export default Lform;