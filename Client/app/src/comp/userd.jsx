import axios from "axios";
import { useEffect , useState } from "react";

axios.defaults.baseURL = "http://localhost:9000/user"
function Userd(){
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:9000/user")
            .then(result => {
                console.log(result.data.data)
                setUserData(result.data.data)
            })
    }, [])
    
    return(
        <></>
    )
}
export default Userd;