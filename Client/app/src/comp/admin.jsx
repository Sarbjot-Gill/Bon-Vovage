import Navbarr from './Navbar';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './home.css';
import Phh from '../media/cc.jpg';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
function Admin() {
    axios.defaults.baseURL = "http://localhost:9000/Login"


    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();

    const [formData,setFormData] = useState({
      username : "",
      password : "",
  })

  const handleOnChange = (e)=>{
    const {value,name} = e.target
    
    setFormData((preve)=>{
        return{
            ...preve,
            [name] : value,
            
        }
    })
    console.log(value)
}
  
    const handleSubmit = async(event) => {
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
      if(result.data === "success"){
        navigate("/Booking" ,{state: formData.username});
       
      }
     if(result.data === "fail"){
      alert("Wrong Password")
     }
     if(result.data === "not register"){
      alert("User Not Found");
     }
      })
      // console.log(formData)
    };
    return (
        <>
            <Navbarr>
            </Navbarr>
            <img src={Phh} alt='zz'></img>
            <div className='ez'>
                <b> <center><p className='fs-1'>Admin Log-In</p></center></b>
            </div>
            <div className='Xxx shadow-lg p-3 mb-5 bg-body-tertiary rounded"'>
                <Tabs
                    defaultActiveKey="profile"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="home" title="Sign In">
                        <center><h3 className='oo'>Log in</h3></center>
                        <div className='zz'>
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
                                <button type='submit'>Submit</button>
                            </Form>

                        </div>
                    </Tab>
                </Tabs>

            </div>
        </>

    )
}

export default Admin;