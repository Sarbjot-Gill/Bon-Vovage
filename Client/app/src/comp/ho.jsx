import Navbarr from "./Navbar";
import Jj from "../media/dd.jpg";
import "./hoe.css";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";
import { useState } from "react";
import axios from "axios";
import React from "react";
import { useRef } from "react";
import {useNavigate} from "react-router-dom";

// import { json } from "react-router-dom";



function Ho() {
  const [formData, setFormData] = useState({
    search: "",
  })
  const [hotelData, setHotelData] = useState([])

  const handleOnChange = (e) => {
    const { value, name } = e.target
    setFormData((preve) => {
      return {
        ...preve,
        [name]: value

      }
    })
  }
  const ref = useRef();
  const navigate = useNavigate();
  


  // useEffect(() => {
  //   handleSubmit();
  // },[])
  const handleHotel = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const a = ref.current.value;
    console.log(a)

    const options = {
      method: 'GET',
      url: 'https://hotels-com5.p.rapidapi.com/properties/detail',
      params: {
        property_id: a,
      },
      headers: {
        'X-RapidAPI-Key': '57b246d315mshbd5e35002b0f4bap144ffcjsn22ddf69cd6b3',
        'X-RapidAPI-Host': 'hotels-com5.p.rapidapi.com'
    
      }
    };

    try {
      const response = await axios.request(options);
      console.log(response.data.data);
      navigate("/Exp", {state: response.data.data});
    } catch (error) {
      console.error(error);
    }

  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    const a = formData.search
    const aB = JSON.stringify(a)

    console.log(formData)

    const options = {
      method: 'GET',
      url: 'https://hotels-com-provider.p.rapidapi.com/v2/regions',
      params: {
        query: aB,
        domain: 'IN',
        locale: 'en_IN'
      },
      headers: {
       
      }
    };

    try {
      const response = await axios.request(options);
      console.log(response.data.data)
      setHotelData(response.data.data)


    } catch (error) {
      console.error(error);
    }
  }
  
  

  
  return (
    <>
      <Navbarr></Navbarr>
      <div className="card mb-3">
        <img src={Jj} className="card-img" alt="..."></img>
        <div className="card-img-overlay">
          <div className="Qq">
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Control type="text" placeholder="Search Hotels" name="search" className="form-control-lg" onChange={handleOnChange}></Form.Control>
              </Form.Group>
              <Button variant="dark" type="submit" className="btn btn-outline-light btn-lg" onSubmit={handleSubmit}>Search</Button>
            </Form>
          </div>
        </div>
      </div>
      <div>
        {hotelData.map((item) => {
          return (
            <div className="card shadow sm-3 mb-2  ">

              <div className="card-body">
                <h5 className="card-title">{item.regionNames.shortName}</h5>
                <p className="card-text">{item?.hotelAddress?.street},{item?.hotelAddress?.city},{item?.hotelAddress?.province}</p>
                <div>
                  <Form onSubmit={handleHotel}>
                    <Form.Group>
                      <Form.Control ref={ref} type="text" name="search" className="form-control-lg" defaultValue={item.hotelId} hidden></Form.Control>
                    </Form.Group>

                    <button className="kk" type="submit">view</button>
                  </Form>
                  
                </div>
              </div>
            </div>
            
          )
        })}
        {/* {hotelDataa.map((itt) => {
                    return(

                   
                  <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1 className="modal-title fs-5" id="staticBackdropLabel">{itt.summary.name}</h1>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          ...
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="button" className="btn btn-primary">Understood</button>
                        </div>
                      </div>
                    </div>
                  </div>
                   )
                  })} */}
      </div>



    </>
  )
}

export default Ho;