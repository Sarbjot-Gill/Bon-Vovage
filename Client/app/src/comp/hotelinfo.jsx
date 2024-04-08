import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbarr from "./Navbar";
import './hotel.css';
import Accordion from 'react-bootstrap/Accordion';
import { Form } from 'react-bootstrap';


axios.defaults.baseURL = "http://localhost:9000/hotell"
function Hotelinfo() {
    const location = useLocation();
    const daataa = location.state;
    const [Loading, setLoading] = useState(false);
    const [mainData, setMaindata] = useState([]);
    const [rData, setRdata] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        rooms: "",
        adults: "",
        child: "",
        checkin: "",
        checkout: ""
    })
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

        event.preventDefault()
        // const data = await axios.post("/hotell", formData)
        // console.log(data)
        // if (data.data.success) {
        //     alert("Hotel Booked")
        // }
        alert("Booked")
    }
    // console.log(daataa)
    const roomData = async () => {
        const options = {
            method: 'GET',
            url: 'https://booking-com.p.rapidapi.com/v1/hotels/room-list',
            params: {
                hotel_id: daataa.hotel_id,
                currency: 'INR',
                checkout_date: '2023-12-28',
                locale: 'en-gb',
                checkin_date: '2023-12-27',
                adults_number_by_rooms: '3,1',
                units: 'metric',
                children_ages: '5,0,9',
                children_number_by_rooms: '2,1'
            },
            headers: {
                
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);
            setMaindata(response.data[0].block)

        } catch (error) {
            console.error(error);
        }
    }
    const reviewData = async () => {
        const options = {
            method: 'GET',
            url: 'https://booking-com.p.rapidapi.com/v1/hotels/review-scores',
            params: {
                hotel_id: daataa.hotel_id,
                locale: 'en-gb'
            },
            headers: {
              
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data.score_percentage
            );
            setRdata(response.data.score_percentage)
        } catch (error) {
            console.error(error);
        }
    }

    // useEffect(() => {
    //    helloData();
    // }, [])
    if (Loading === false) {
        // console.log(mainData)
        return (
            <>
                <Navbarr></Navbarr>
                <div className='card'>
                    <h1 className='hea'> {daataa.hotel_name}</h1>
                    <img src={daataa.max_photo_url} className='photo' alt=''></img>
                    <div className='mnm'>
                        <p>Room Available</p>
                        <p>{daataa.review_score}</p>
                        <p>Address : {daataa.address}</p>
                    </div>
                </div>
                <Accordion defaultActiveKey={['0']} >
                    <Accordion.Item onClick={roomData} eventKey="0">
                        <Accordion.Header>Rooms Information</Accordion.Header>
                        <Accordion.Body>
                            <br></br><br></br>
                            {mainData.map((item) => {
                                return (
                                    <div className='card'>
                                        <h6>{item.name}</h6>
                                        <p>{item.min_price.price} INR</p>

                                        <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            Book Now
                                        </button>


                                        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Booking</h1>
                                                        <button type="button" className="btn" data-bs-dismiss="modal" aria-label="Close"></button>
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
                                                                <Form.Control type='text' value={item.name} name='rooms' onChange={handleOnChange}></Form.Control>
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
                                                                <Form.Control type='date' placeholder='Enter Check In Date' name='checkin' onChange={handleOnChange}></Form.Control>
                                                            </Form.Group>
                                                            <br></br>
                                                            <Form.Group>
                                                                <Form.Control type='date' placeholder='Enter Check out Date' name='checkout' onChange={handleOnChange}></Form.Control>
                                                            </Form.Group>
                                                            {/* <Form.Group>
                                                                <Form.Control type='text' value={daataa.hotel_name} name='hname' onChange={handleOnChange} hidden></Form.Control>
                                                            </Form.Group>
                                                            <Form.Group>
                                                                <Form.Control type='number' value={item.min_price.price} name='price' onChange={handleOnChange } hidden></Form.Control> 
                                                           </Form.Group> */}
                                                            <button className='btn btn-dark' type='submit' onSubmit={handleSubmit}>Submit</button>
                                                        </Form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}


                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" onClick={reviewData}>
                        <Accordion.Header>Review</Accordion.Header>
                        <Accordion.Body>
                            <br></br><br></br>
                            <h6>
                                Review score Percentage
                            </h6>
                            {rData.map((item) => {
                                return (
                                    <div className='card'>

                                        <p>{item.score_start} - {item.score_end} : {item.count} Reviews({item.percent}%)</p>
                                    </div>
                                )
                            })}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </>
        )
    }
    return (

        <>
            {Loading ? <p>Loading...</p> : null}
        </>)
}
export default Hotelinfo;