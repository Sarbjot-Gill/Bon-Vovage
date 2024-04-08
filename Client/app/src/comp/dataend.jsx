import Navbarr from "./Navbar";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";



function Dataend() {
    const location = useLocation();
    const dataa = location.state;
    // console.log(dataa);
    const aB = dataa.result_object.location_id;
    // const qq = dataa.lon;
    // const dd = dataa.lat;

    console.log(aB)
    const [tourData, settourData] = useState([])
    const [isLoading, setIsLoading] = useState(true);


    const handleData = async (event) => {
        const encodedParams = new URLSearchParams();
        encodedParams.set('location_id', aB);
        encodedParams.set('language', 'en_US');
        encodedParams.set('currency', 'USD');
        encodedParams.set('offset', '0');

        const options = {
            method: 'POST',
            url: 'https://tourist-attraction.p.rapidapi.com/search',
            headers: {
              
            },
            data: encodedParams,
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);
            settourData(response.data)
            setIsLoading(false)
        } catch (error) {
            console.error(error);
        }


    }
    useEffect(() => {
        handleData();
    }, [])
    if (isLoading === false) {
        // console.log(tourData)
        const ddd = tourData.results.data;
        console.log(ddd)
        return (
            <>
                <Navbarr></Navbarr>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {ddd.map((item) => {
                        return (
                            <div className="col">
                            <div className="card">
                                <img src={item.photo.images.medium.url} class="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">{item.description}</p>
                                    <p className="card-text"><small class="text-body-secondary">{item.address_obj.street1},{item.address_obj.city}</small></p>
                                </div>
                            </div>
                            </div>


                        )
                    })}
                </div>
            </>
        )
    }



    return (
        <>
            <Navbarr></Navbarr>
            <div>
                {isLoading ? <p>Loading...</p> : null}
            </div>

        </>

    )

}


export default Dataend;