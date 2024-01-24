import React, {useEffect} from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Logout = () => {

    useEffect(()=> {
        const token = localStorage.getItem('token');
        const navigate = useNavigate();
 axios.post("http://localhost:9000/api/logout", {}, {
    headers: {
        authorization: token
    }
 })
 .then(resp => {
    localStorage.removeItem('token')
    navigate('/login')
 })
 .catch(err => {
    console.log(err)
 })
    },[])
    return(<div></div>)
}
export default Logout