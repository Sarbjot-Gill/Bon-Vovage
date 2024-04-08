import Navbarr from "./Navbar";
import Form from 'react-bootstrap/Form';
import Jj from "../media/dd.jpg";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { render } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import './hotel.css';

function Ez() {
    const [formData, setFormData] = useState({
        search: "",
    })
    const navigate = useNavigate();
    // const [tourData, settourData] = useState([])
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
        const encodedParams = new URLSearchParams();
        encodedParams.set('q', aB);
        encodedParams.set('language', 'en_US');

        const options = {
            method: 'POST',
            url: 'https://tourist-attraction.p.rapidapi.com/typeahead',
            headers: {
                
            },
            data: encodedParams,
        };

        try {
            const response = await axios.request(options);
            console.log(response.data.results.data[0]);
            navigate("/Dataend",{state:response.data.results.data[0]})
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
                                <Form.Control type="text" placeholder="Search Famous Places" id="www" name="search" className="form-control-lg" onChange={handleOnChange}></Form.Control>
                            </Form.Group>
                            <Button id="ttt" variant="dark" type="submit" className="btn btn-outline-light btn-lg" onSubmit={handleSubmit}>Search</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ez;