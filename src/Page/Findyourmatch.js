import { Link, Outlet } from "react-router-dom"
import Navbar from "../component/Navbar"
const Findyourmatch = () => {
    return (
        <div className="pt-[95px]">
            <div className="flex flex-row space-x-9 text-[20px] font-semibold text-[#746f6d] pl-[82px]">
                <Link>Orders</Link>
                <Link>Profile</Link>
                <Link>Log Out</Link>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}
export default Findyourmatch