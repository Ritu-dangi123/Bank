import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"
import BASE_URL from "../Config";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import "../css/login.css"
const Login = () =>{
  
    let [input,setInput] = useState({});
    let nav = useNavigate();

    const handleinput = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
        setInput((values) => ({...values,[name]:value}))
        console.log(input)
    }
  
    const handlesubmit = async (e) =>{
      e.preventDefault();
  
      let api = `${BASE_URL}/customer/login`;
  
      try {
  
        let response = await axios.post(api,input);
        localStorage.setItem("token" , response.data.token);
        localStorage.setItem("fname", response.data.User.fname)
         localStorage.setItem("lname", response.data.User.lname)
        localStorage.setItem("email", response.data.User.email)
        localStorage.setItem("custId", response.data.User._id)
        localStorage.setItem("photo", response.data.User.photo)
        localStorage.setItem("acnumber", response.data.User.acnumber)
        localStorage.setItem("address", response.data.User.address)
        localStorage.setItem("city", response.data.User.city)
        localStorage.setItem("email", response.data.User.email)
        localStorage.setItem("mobile", response.data.User.mobile)
        console.log(response.data);
        toast.success(response.data)
        nav("/dashboard")
        
      } catch (error) {
        console.log(error.response.data.msg)
      }
    }
  

    return(
        <>
        <div className='body'>

        <div className="registerform">
        <div className="login">
          <h1 style={{color:"",textAlign:"center",fontSize:"35px",color:"gray"}}>Login</h1>
        </div>
           <Form className="formedit">
      

       

       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control style={{backgroundColor:"#F5F5F5",borderRadius:"5px"}} type="email" name="email" placeholder="Enter your email" onChange={handleinput} />
      </Form.Group>
    
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Password</Form.Label>
        <Form.Control style={{backgroundColor:"#F5F5F5",borderRadius:"5px"}} type="password" name="password" placeholder="Enter your password" onChange={handleinput} />
      </Form.Group>
       
      <Button style={{backgroundColor:"#800000",border:"none"}}  type="submit" onClick={handlesubmit}>
        Submit
      </Button>
    </Form>

        </div>
        </div>
         <ToastContainer /> 
        
        
        </>
    )
}

export default Login