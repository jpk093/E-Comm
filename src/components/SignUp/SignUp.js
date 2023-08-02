import React ,{useState} from "react";
import { useNavigate } from "react-router-dom";

const SignUp =() =>{
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");
    const navigate=useNavigate();

    const collectData = async () =>{
        console.log(name,email,password)
        let result= await fetch('http://localhost:3002/user',{
            method:'post',
            body:JSON.stringify({name,email,password}),
            headers:{
                'Content-type':'application/json'
            },
        });
        result=await result.json()
        console.log(result);
        if(result){
            navigate('/list');
        }
    }
    return(
        <div className="register">
            <h1>Register</h1>
            <input className="inputBox" type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"  required/>
            <input className="inputBox" type="text" value={email} onChange={(e)=>setEmail(e.target.value)}placeholder="Enter Email"  required/>
            <input className="inputBox" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" required/>
           <button onClick={collectData} className="appButton" type="button">Sign up</button>
        </div>
    )
}

export default SignUp;