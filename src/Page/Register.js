import { Link } from "react-router-dom";
import { useState } from "react";
import { setCredentials } from "../slice/user";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
const Register = () => {
    // const [email, setEmail] = useState("")
    // const [firstname, setFirstname] = useState("")
    // const [lastname, setLastname] = useState("")
    // const [password, setPassword] = useState("")
    // const [repassword, setRepassword] = useState("")
    // for john
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [firstName, setFirstname] = useState("")
    const [lastName, setLastname] = useState("")
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    // const registerDispatch = () => {
    //     dispatch(setCredentials({
    //         email:email,
    //         firstname:firstname,
    //         lastname:lastname,
    //         password:password,
    //         repassword:repassword
    //     }))
    // }
    // for john
    const registerDispatch = () => {
        dispatch(setCredentials({
            username: username,
            password: password,
            email: email,
            firstName: firstName,
            lastName: lastName,
        }))
    }
    const registerAPI = () => {
        axios
            .post("/api/register", {
                username: username,
                password: password,
                email: email,
                firstName: firstName,
                lastName: lastName,
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
                console.log("eiei");
                // console.log(error.response.data.detail);
            })
    }
    const Validation = () => {
        if(email.length >= 6 && password.length >= 5 ){
            window.alert("Pass!!")
        }
        else{window.alert("Don't pass, please correct information")}
    }
    console.log(username)
    console.log(email)
    return(
        <div className="h-[900px] pt-[140px] px-[82px] flex flex-row justify-between text-[#1f1815]">
        <div className="w-[50%] bg-red text-7xl font-serif">
            <div className="w-[540px]">
                <span className="font-bold">First things first... </span>
                <span>Let’s get you set up!</span>
                <p className=" text-green-500 text-xl">firstname is {user.firstname}</p>
                <img className="w-[150px] mt-[200px] grayscale" src="https://icons.iconarchive.com/icons/raindropmemory/in-spirited-we-love/256/User-Kaonashi-Who-icon.png"/>
            </div>
        </div>
        <div className="w-[50%] pr-[82px] mt-5 font-semibold">
            <div className="bg-blue mb-[30px]">
                <p>Create an account to order and manage your subscription.</p>
                <span>Already have an account?</span><Link to="/account" className="underline"> Log-in here.</Link>
            </div>
            <div className="pb-[40px] space-y-10">
                <div><input autoFocus className="focus:outline-none font-medium text-sm h-[32px] w-[100%] border-b border-black flex items-center" value={username} type="text" onChange={(e) => setUsername(e.target.value)} placeholder="Username"/></div>
                <div><input className="focus:outline-none font-medium text-sm h-[32px] w-[100%] border-b border-black flex items-center" value={password} type="text" onChange={(e) => setPassword(e.target.value)} placeholder="Password"/></div>
                <div><input className="focus:outline-none font-medium text-sm h-[32px] w-[100%] border-b border-black flex items-center" value={email} type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Email"/></div>
                <div>
                    <input className=" focus:outline-none font-medium text-sm h-[32px] w-[100%] border-b border-black flex items-center" value={firstName} type="text" onChange={(e) => setFirstname(e.target.value)} placeholder="Firstname"/>
                    
                </div>
                <div><input className=" focus:outline-none font-medium text-sm h-[32px] w-[100%] border-b border-black flex items-center" value={lastName} type="text" onChange={(e) => setLastname(e.target.value)} placeholder="Lastname"/></div>
            </div>
            <div className="flex flex-row space-x-5  h-[54px]">
                <button className="bg-black text-white w-[200px] h-[54px] flex justify-center items-center pb-[2px]" 
                onClick={() => {
                    registerAPI()}}
                ><p>Create Account</p></button>
            </div>
        </div>
    </div>
    )
}
export default Register

// hello = function() {
//     return "Hello"
// }

// hello = () => {
//     return "Hello"
// }

// hello = () => "Hello"