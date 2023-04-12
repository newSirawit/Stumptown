import { useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setCredentials } from "../slice/user"
import axios from "axios"
const Account = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const loginDispatch = () => {
        dispatch(setCredentials({
            username:username,
            password:password
        }))}
    const loginAPI = () => {
        axios
            .post("/api/login",{
                username:username,
                password:password
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            })
    }
    console.log(username)
    return (
        <div className="h-[900px] pt-[140px] px-[82px] flex flex-row justify-between text-[#1f1815]">
            <div className="w-[50%] bg-red text-7xl font-serif font-bold">
                <p>Hello,</p>
                <p>there.</p>
                <p className=" text-red-500 text-xl">username is {user.username}</p>
                <p className=" text-blue-500 text-xl">password is {user.password}</p>
            </div>
            <div className="w-[50%] pr-[82px] font-semibold">
                <div className="bg-blue mb-[30px]">
                    <span className="font-bold">Note:</span><span> If you already have an account and this is your first time visiting our new site,</span><span className="italic font-bold">you will be unable to login with your old credentials. </span><Link to="/register" className="underline">Sing up</Link><span> for a new account using the username associated with your old account.</span><br/><br/>
                    <span>Don't have an account? </span><Link to="/register" className="underline">Sing up</Link>
                </div>
                <div className="pb-[40px]">
                    <input className=" focus:outline-none font-medium text-sm h-[32px] w-[100%] border-b border-black flex items-center" value={username} onChange={(e) => {setUsername(e.target.value)}} placeholder="username"/>
                    <p className="h-[36px]"> </p>
                    <input className="focus:outline-none font-medium text-sm h-[32px] w-[100%] border-b border-black flex items-center" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
                </div>
                <div className="flex flex-row space-x-5  h-[54px]">
                    <button onClick={() => {loginDispatch();loginAPI();}} className="bg-black text-white w-[120px] flex justify-center items-center pb-[2px]"><p>Login</p></button>
                    <Link to="/forgetpassword"><p className="underline text-[#585350] flex justify-center items-center">Forgot password?</p></Link>
                </div>
            </div>
        </div>
    )
}
export default Account