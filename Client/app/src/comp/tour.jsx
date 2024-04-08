import './hotel.css';
import Jj from "../media/dd.jpg";
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import axios from "axios";
import React from "react";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useLocation } from 'react-router-dom';



function Tour() {
  const [formData, setFormData] = useState({
    search: "",
    datea: "",
    dated: "",
    id: ""
  })
  const navigate = useNavigate();
  const location = useLocation();

  const daa = location.state;
  console.log(daa)
  // const [hotelData, setHotelData] = useState([])
  // const [listData, setlistData] = useState([])
  const handleOnChange = (e) => {
    const { value, name } = e.target
    setFormData((preve) => {
      return {
        ...preve,
        [name]: value

      }
    })
  }

  
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    const a = formData.search
    const aB = JSON.stringify(a)

    console.log(formData)

    const options = {
      method: 'GET',
      url: 'https://booking-com.p.rapidapi.com/v1/hotels/locations',
      params: {
        name: aB,
        locale: 'en-gb'
      },
      headers: {
       
      }
    };

    try {
      const response = await axios.request(options);
      console.log(response.data[0].dest_id);
      formData.id = response.data[0].dest_id;
      console.log(formData);
     

      navigate("/Hotel", { state: formData });
      // setFormData( id => response.data[0].dest_id )
      
      // while (formData.id === ""){
      //  const zz = JSON.stringify(formData.id)
      // if(zz === response.data[0].dest_id){
      //   navigate("/Hotel", { state:[formData] });
      //   break;
      // }}
      // navigate("/Hotel", { state:[formData] });
      // setHotelData(response.data[0].dest_id);
      // getData();
    } catch (error) {
      console.error(error);
    }


  }




  return (
    <>
      <Navbar className="bg-body" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/" className='qq'>Bon Vovage</Navbar.Brand>
          <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
              <Nav.Link href="/tour" className='qq'>Hotels</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/Ez' className='qq'>Famous Places</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {daa}
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="/Booking">Booking</a></li>
                </ul>
              </div>
            </Nav.Item>
          </Nav>
        </Container>

      </Navbar>
      <div className="card mb-3">
        <img src={Jj} className="card-img" alt="..."></img>
        <div className="card-img-overlay">
          <div className="Qq">
            <Form onSubmit={handleSubmit}>
              <div className='www'>
              <Form.Group>
                <Form.Control type="text" placeholder="Search Hotels" name="search" id='www' className="form-control-lg" onChange={handleOnChange}></Form.Control>
              </Form.Group>
              <div className='row g-6'>
                <div className='col-4'>
              <Form.Group>
              <Form.Label className='text-danger'><b>CheckIn Date</b></Form.Label>
                <Form.Control type="date" name="datea" placeholder="CheckIn Date" id='xx'  className="form-control-lg" onChange={handleOnChange}></Form.Control>
                
              </Form.Group></div>
              <div className='col-4'>
              <Form.Group>
              <Form.Label className='text-danger' ><b>CheckOut Date</b></Form.Label>
                <Form.Control type="date" placeholder='CheckOut Date' name="dated" id='xx'  className="form-control-lg" onChange={handleOnChange}></Form.Control>
              </Form.Group>
              </div>
              </div>
              </div>
              <Button variant="dark" type="submit" id="ttt" className="btn btn-outline-light btn-lg" onSubmit={handleSubmit}>Search</Button>
            </Form>
          </div>
        </div>
      </div>
      <div></div>
    </>
  )
}

export default Tour;