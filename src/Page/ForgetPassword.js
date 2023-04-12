import { Link } from "react-router-dom"
import { useState } from "react"
import { useDispatch,useSelector } from "react-redux"
import { setCredentials } from "../slice/user"
const ForgetPassword = () => {
        const [email, setEmail] = useState("")
        const dispatch = useDispatch()
        const ForgetPassword = () => {
            dispatch(setCredentials({
                email:email
            }))
        }
        console.log(email)
    return (
        <div className="h-[900px] pt-[140px] px-[82px] flex flex-row justify-between text-[#1f1815]">
            <div className="w-[50%] bg-red text-7xl font-serif font-bold">
                <p>Reset your</p>
                <p>password</p>
                <div className="mt-[350px]"><img className="w-40 h-40" src="https://i.pinimg.com/originals/e0/5a/21/e05a21e9fc1ed73988a8f4e34c3ec72b.jpg"/></div>
            </div>
            <div className="w-[50%] pr-[82px] font-semibold">
                <div className="bg-blue mb-[30px]">
                    <span>We will send you an email to reset your password.</span>
                </div>
                <div className="pb-[40px]">
                    <input className="focus:outline-none font-medium text-sm h-[32px] w-[100%] border-b border-black flex items-center" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address"/>
                </div>
                <div className="flex flex-row space-x-5  h-[54px]">
                    <button onClick={() => ForgetPassword()} className="bg-black text-white w-[120px] flex justify-center items-center pb-[2px]"><p>Submit</p></button>
                    <div className="flex justify-center items-center"><Link to="/account" className="underline text-[#585350] flex">Cancel</Link></div>
                </div>
            </div>
        </div>
    )
}
export default ForgetPassword