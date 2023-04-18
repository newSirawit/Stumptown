import { Link, Outlet, Navigate } from "react-router-dom"
import { Dispatch } from "react"
import { logout } from "../slice/user"
import { useDispatch, useSelector } from "react-redux"
const AccountATLogin = () => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)
    if(!user.username) return <Navigate to="/account"></Navigate>
    console.log(Boolean(user.username));
    console.log(user.username);
    console.log(user.firstName);
    console.log("token is = " ,user.token);
    return (
        <div className="pt-[95px]">
            <div className="flex flex-row space-x-9 text-[20px] font-semibold text-[#585350] pl-[82px]">
                <Link to="/accountAFlogin/orders">Orders</Link>
                <Link to="/accountAFlogin/profile">Profile</Link>
                <button onClick={() => dispatch(logout())}>Log Out</button>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}
export default AccountATLogin