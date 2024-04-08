import Navbarr from './Navbar';
import { useLocation } from 'react-router-dom';
import "./exp.css";
import { Card, Form } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';

axios.defaults.baseURL = "http://localhost:9000/"

function Exp() {

  const location = useLocation();
  const data = location.state;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rooms: "",
    adults: "",
    child: "",
    checkin: "",
    checkout: ""
  })
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleOnChange = (e) => {
    const { value, name } = e.target
    setFormData((preve) => {
      return {
        ...preve,
        [name]: value
      }
    })
  }
console.log(data)
  // const a = data.summary.amenities.amenities[0].contents;
  // const b = data.summary.nearbyPOIs.items;
  // const c = data.propertyGallery.images
  // console.log(a)
  // console.log(b)
  // console.log(data.reviewInfo.summary.averageOverallRating.formatted)

  const handleSubmit = async (event) => {

    event.preventDefault()
    const data = await axios.post("/hotel", formData)
    console.log(data)
    if (data.data.success) {
      alert("Hotel Booked")
    }
  }

  return (
    <>
      <Navbarr></Navbarr>
      {/* <div>
        <h1 className='qqq'>{data.summary.name}</h1>
        <img className='tt' src={data.summary.location.staticImage.url} alt=""></img>
        <div className='gg'>
          <p>Room Available</p>
          <p>Rating: ({data.reviewInfo.summary.averageOverallRating.formatted})</p>
          <p>address: {data.summary.location.address.addressLine}</p>
</div> */}

      <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Book Now
      </button>


      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Book Your Room</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Control type='text' placeholder='Enter Your Name' name='name' onChange={handleOnChange} ></Form.Control>
                </Form.Group>
                <br></br>
                <Form.Group>
                  <Form.Control type='email' placeholder='Enter Your Email' name='email' onChange={handleOnChange}></Form.Control>
                </Form.Group>
                <br></br>
                <Form.Group>
                  <Form.Control type='number' placeholder='Enter no Rooms' name='rooms' onChange={handleOnChange}></Form.Control>
                </Form.Group>
                <br></br>
                <Form.Group>
                  <Form.Control type='number' placeholder='Enter no of Adults' name='adults' onChange={handleOnChange}></Form.Control>
                </Form.Group>
                <br></br>
                <Form.Group>
                  <Form.Control type='number' placeholder='Enter no of Children' name='child' onChange={handleOnChange}></Form.Control>
                </Form.Group>
                <br></br>
                <Form.Group>
                  <Form.Control type='text' placeholder='Enter Check In Date' name='checkin' onChange={handleOnChange}></Form.Control>
                </Form.Group>
                <br></br>
                <Form.Group>
                  <Form.Control type='text' placeholder='Enter Check out Date' name='checkout' onChange={handleOnChange}></Form.Control>
                </Form.Group>
                <button type='submit' onSubmit={handleSubmit}>Submit</button>
              </Form>
            </div>
          </div>
        </div>
      </div>

      <Accordion defaultActiveKey={['0']} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Rooms Information</Accordion.Header>
          <Accordion.Body>
            <br></br><br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Policy</Accordion.Header>
          <Accordion.Body>
            <br></br><br></br>
            {/* {a.map((ho) => {
              return (
                <div>
                  <div>
                    {ho.items.map((item) => {
                      return (
                        <table className='table table-bordered table-align-middle' border={1}>
                          <tbody>
                            <tr>
                              <th >{ho.heading}</th>
                              <th>{item.text}</th>
                            </tr>
                            
                          </tbody>
                        </table>
                      )
                    })} */}
{/* 
                  </div>
                </div>
              )
            })} */}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>




    </>
  )
}
export default Exp;
