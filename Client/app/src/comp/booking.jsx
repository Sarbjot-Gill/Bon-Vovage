import axios from "axios"
import { useEffect, useState } from "react"
import { Button, Form } from "react-bootstrap";
import Navbarr from "./Navbar";


axios.defaults.baseURL = "http://localhost:9000/book"
function Booking() {
    const [userData, setUserData] = useState([]);
    const [deleteData , setDeleteData] = useState({
        _id : "",
    })
    
    useEffect(() => {
        axios.get("http://localhost:9000/book")
            .then(result => {
                console.log(result.data.data)
                setUserData(result.data.data)
            })
    }, [])
    
    const handleOnChange = (e) => {
        const { value, name } = e.target
        setDeleteData((preve) => {
          return {
            ...preve,
            [name]: value
    
          }
        })
      }
  
    console.log(deleteData)

    const handleDelete = async(e) =>{
        e.preventDefault();
        e.stopPropagation();
        axios.post('http://localhost:9000/Delete', deleteData)
        .then(result => {
          console.log(result)
          console.log(deleteData._id)
        if(result.status === "204"){
          alert("data deleted")
         
        }
       if(result.status === "404"){
        alert("Something Went Wrong")
       }
       
        })
    } 
    return (
        <>
        <Navbarr></Navbarr>
            {userData.map((item) => {
                return (
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Checkin</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>

                                <td>{item._id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.checkin}</td>
                                <td><button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Cancel Booking
                                </button>

                                    
                                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Are you Sure ?</h1>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                <Form onSubmit={handleDelete}>
                                                    <Form.Control name="_id" defaultValue={item._id} onChange={handleOnChange}></Form.Control>
                                                    <Button type="submit" >Cancel Booking</Button>
                                                </Form>
                                                </div>
                                            </div>
                                        </div>
                                    </div></td>
                            </tr>

                        </tbody>
                    </table>
                )
            })}
        </>
    )
}
export default Booking