import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './hotel.css';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbarr from './Navbar';

function Hotel() {
    const location = useLocation();
    const ref = useRef();
    const navigate = useNavigate();
    const daata = location.state;
    const avv = location.formData;
    console.log(avv);
    console.log(daata);
    const [Hotel, setHotel] = useState([]);
    const [Loading, setLoading] = useState(true);
    const a = Hotel[0];
    const b = Hotel[1];
    const c = Hotel[2];
    const d = Hotel[3];
    const e = Hotel[4];
    const f = Hotel[5];
    const g = Hotel[6];
    const h = Hotel[7];
    console.log(a)

    const getData = async (e) => {

        const optionss = {
            method: 'GET',
            url: 'https://booking-com.p.rapidapi.com/v1/hotels/search',
            params: {
                checkin_date: daata.datea,
                dest_type: 'city',
                units: 'metric',
                checkout_date: daata.dated,
                adults_number: '2',
                order_by: 'popularity',
                dest_id: daata.id,
                filter_by_currency: 'INR',
                locale: 'en-us',
                room_number: '1',
                children_number: '2',
                children_ages: '5,0',
                categories_filter_ids: 'class::2,class::4,free_cancellation::1',
                page_number: '0',
                include_adjacency: 'true'
            },
            headers: {
             
            }
        };

        try {
            const responsee = await axios.request(optionss);
            console.log(responsee.data.result)
            setHotel(responsee.data.result)
            setLoading(false);
        } catch (error) {
            console.error(error);
        }

    }
    useEffect(() => {
        getData();
    }, [])
    if (Loading === false) {
        console.log(Hotel)
        async function handleHotel(e) {
            e.preventDefault();
            e.stopPropagation();

            // const id = ref.current.value;
            const idd = e.get("gg");
            console.log(idd);
            // console.log(id)
            // console.log(a.hotel_id)
            // if(id === a.hotel_id){
            //     navigate("/Hotelinfo", {state: a});
            //     console.log(a)
            // }
            // else if(id === b.hotel_id ){
            //     navigate("/Hotelinfo", {state: b});
            // }
            // else if(id === c.hotel_id ){
            //     navigate("/Hotelinfo", {state: c});
            // }
            // else if(id === d.hotel_id ){
            //     navigate("/Hotelinfo", {state: d});
            // }
            // else if(id === e.hotel_id ){
            //     navigate("/Hotelinfo", {state: e});
            // }
            // else if(id === f.hotel_id ){
            //     navigate("/Hotelinfo", {state: f});
            // }
            // else if(id === g.hotel_id ){
            //     navigate("/Hotelinfo", {state: g});
            // }
            // else if(id === h.hotel_id ){
            //     navigate("/Hotelinfo", {state: h});
            // }
            // else{
            //     alert("oppps! something went wrong")
            // }
            // console.log(id)
            // navigate("/Hotelinfo", {state: id});
        }
        return (
            <>
                <Navbarr></Navbarr>
                <div className="row row-cols-1 row-cols-md-2 g-4 w-75  ">
                    {/* 
                    {Hotel.map((item) => {
                        return (
                            <div className="card">
                                <div className="col">
                                    <img src={item.max_1440_photo_url} className="card-img-top  " alt="..."></img>
                                    <div className="card-body">
                                        <h4 className="card-title">{item.hotel_name}</h4>
                                        <p className="card-text">{item.address},{item.city}</p>
                                        <h5>{item[0]?.min_total_price} INR</h5>
                                        <Form onSubmit={handleHotel}>
                                            <Form.Control type='text' id='gg' name='toez' value={item.hotel_id} hidden></Form.Control>
                                            <Button id='eee' type='submit'  >Book</Button>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        )
                    })} */}
                    <div className="card">
                        <div className="col">
                            <img src={a.max_1440_photo_url} className="card-img-top  " alt="..."></img>
                            <div className="card-body">
                                <h4 className="card-title">{a.hotel_name}</h4>
                                <p className="card-text">{a.address},{a.city}</p>
                                <h5>{a.min_total_price} INR</h5>
                                <Form action={handleHotel}>
                                    <Form.Control type='text' id='gg' name='toez' value={a.hotel_id} hidden></Form.Control>
                                    <Button id='eee' type='submit'  >Book</Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="col">
                            <img src={b.max_1440_photo_url} className="card-img-top  " alt="..."></img>
                            <div className="card-body">
                                <h4 className="card-title">{b.hotel_name}</h4>
                                <p className="card-text">{b.address},{b.city}</p>
                                <h5>{b.min_total_price} INR</h5>
                                <Form onSubmit={handleHotel}>
                                    <Form.Control type='text' id='gg' ref={ref} name='toez' value={b.hotel_id} hidden></Form.Control>
                                    <Button id='eee' type='submit'  >Book</Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="col">
                            <img src={c.max_1440_photo_url} className="card-img-top  " alt="..."></img>
                            <div className="card-body">
                                <h4 className="card-title">{c.hotel_name}</h4>
                                <p className="card-text">{c.address},{c.city}</p>
                                <h5>{c.min_total_price} INR</h5>
                                <Form onSubmit={handleHotel}>
                                    <Form.Control type='text' ref={ref} name='toez' value={c.hotel_id} hidden></Form.Control>
                                    <Button id='eee' type='submit'  >Book</Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="col">
                            <img src={d.max_1440_photo_url} className="card-img-top  " alt="..."></img>
                            <div className="card-body">
                                <h4 className="card-title">{d.hotel_name}</h4>
                                <p className="card-text">{d.address},{d.city}</p>
                                <h5>{d.min_total_price} INR</h5>
                                <Form onSubmit={handleHotel}>
                                    <Form.Control type='text' ref={ref} name='toez' value={d.hotel_id} hidden></Form.Control>
                                    <Button id='eee' type='submit'  >Book</Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="col">
                            <img src={e.max_1440_photo_url} className="card-img-top  " alt="..."></img>
                            <div className="card-body">
                                <h4 className="card-title">{e.hotel_name}</h4>
                                <p className="card-text">{e.address},{e.city}</p>
                                <h5>{e.min_total_price} INR</h5>
                                <Form onSubmit={handleHotel}>
                                    <Form.Control type='text' ref={ref} name='toez' value={e.hotel_id} hidden></Form.Control>
                                    <Button id='eee' type='submit'  >Book</Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="col">
                            <img src={f.max_1440_photo_url} className="card-img-top  " alt="..."></img>
                            <div className="card-body">
                                <h4 className="card-title">{f.hotel_name}</h4>
                                <p className="card-text">{f.address},{f.city}</p>
                                <h5>{a.min_total_price} INR</h5>
                                <Form onSubmit={handleHotel}>
                                    <Form.Control type='text' ref={ref} name='toez' value={f.hotel_id} hidden></Form.Control>
                                    <Button id='eee' type='submit'  >Book</Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="col">
                            <img src={g.max_1440_photo_url} className="card-img-top  " alt="..."></img>
                            <div className="card-body">
                                <h4 className="card-title">{g.hotel_name}</h4>
                                <p className="card-text">{g.address},{g.city}</p>
                                <h5>{a.min_total_price} INR</h5>
                                <Form onSubmit={handleHotel}>
                                    <Form.Control type='text' ref={ref} name='toez' value={g.hotel_id} hidden></Form.Control>
                                    <Button id='eee' type='submit'  >Book</Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="col">
                            <img src={h.max_1440_photo_url} className="card-img-top  " alt="..."></img>
                            <div className="card-body">
                                <h4 className="card-title">{h.hotel_name}</h4>
                                <p className="card-text">{h.address},{h.city}</p>
                                <h5>{h.min_total_price} INR</h5>
                                <Form onSubmit={handleHotel}>
                                    <Form.Control type='text' ref={ref} name='toez' value={h.hotel_id} hidden></Form.Control>
                                    <Button id='eee' type='submit'  >Book</Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }


    return (
        <>
            {Loading ? <p>Loading...</p> : null}
        </>
    )
}

export default Hotel