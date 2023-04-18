import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import { Navigate } from "react-router-dom"
import axios from "axios"
const Resetpassword = () => {
    const user = useSelector((state) => state.user)
    const [password, setPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [CFnewPassword, setCFnewPassword] = useState("")
    const [token, setToken] = useState(user.token)
    const [status, setStatus] = useState(0)
    const dispatch = useDispatch()
    console.log(password);
    console.log(newPassword);
    console.log(user.token);
    const resetPassword = () => {
        axios.put("/api/profile/resetPassword",{
            password:password,
            newPassword:newPassword
        },{
            headers:{
                token:token
            },
        })
        .then((response) => {
            console.log(response);
            console.log(typeof(response.status));
            setStatus(response.status)
        })
        .catch((error) => {
            console.error(error);
        })
    }
    const checkPassword = () => {
        if (newPassword == CFnewPassword){
            resetPassword()
        }
        else {
            window.alert("Not Pass!! please check your password")
        }
    }
    console.log(status);
    if(status == 200) return <Navigate to="/accountAFlogin/profile"></Navigate>
    return (
        <div className="pt-[80px] pl-[82px] pb-[80px] h-screen">
            <p className="text-[80px] font-serif font-bold mb-[10px]">Reset password</p>
            <div>
                <p className="text-[20px] font-bold text-[#585350] mb-[26px] mt-16">Password</p>
                <div className="flex flex-row space-x-16 mb-[60px] text-[14px] font-semibold">
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className="w-[400px] border-b border-black py-2 focus:outline-none"></input>
                </div>
            </div>
            <div className="flex flex-rol space-x-16 pt-[40px]">
                <div className="flex flex-col w-[400px]">
                    <div className="flex flex-rol justify-between">
                        <p className="text-[20px] font-bold text-[#585350] mb-[26px]">New password</p>
                    </div>
                    <div className="flex justify-start w-[400px]">
                        <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="w-[400px] border-b border-black py-2 text-[14px] focus:outline-none"></input>
                    </div>
                </div>
            </div>
            <div className="flex flex-rol space-x-16 pt-[40px]">
                <div className="flex flex-col w-[400px]">
                    <div className="flex flex-rol justify-between">
                        <span className="text-[20px] font-bold text-[#585350] mb-[26px]">Confirm new password</span>
                    </div>
                    <div className="flex justify-start w-[400px]">
                        <input type="password" value={CFnewPassword} onChange={(e) => setCFnewPassword(e.target.value)} className="w-[400px] border-b border-black py-2 text-[14px] focus:outline-none"></input>
                    </div>
                </div>
            </div>
            <button onClick={() => {
                checkPassword();
                }} className="bg-black text-white w-[150px] h-[54px] font-semibold flex justify-center items-center pb-[2px] mt-14"><p>Reset Password</p></button>
        </div>
    )
}
export default Resetpassword