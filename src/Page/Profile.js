import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
const Profile = () => {
    const user = useSelector((state) => state.user)
    console.log(user.firstName);
    console.log(user.lastName)
    console.log(user.email)
    return (
        <div className="pt-[80px] pl-[82px] pb-[80px] h-screen">
            <p className="text-[80px] font-serif font-bold mb-[10px]">Profile</p>
            <div>
                <p className="text-[20px] font-bold text-[#585350] mb-[26px] mt-12">Name</p>
                <div className="flex flex-row space-x-16 mb-[60px] text-[14px] font-semibold">
                    <p className="w-[400px] border-b border-black py-2">{user.firstName}</p>
                    <p className="w-[400px] border-b border-black py-2">{user.lastName}</p>
                </div>
            </div>
            <div className="flex flex-rol space-x-16">
                <div className="flex flex-col w-[400px]">
                    <div className="flex flex-rol justify-between">
                        <span className="text-[20px] font-bold text-[#585350] mb-[26px]">Password</span>
                        <Link to = "/resetpassword" className="text-[14px] font-semibold underline">Reset password</Link>
                    </div>
                    <div className="flex justify-start w-[400px]">
                        <span className="w-[400px] border-b border-black py-2 text-[14px]">•••••••••••</span>
                    </div>
                </div>
                <div className="flex flex-col w-[400px]">
                    <div className="mb-[26px]">
                        <span className="text-[20px] font-bold text-[#585350]">Email Address</span>
                    </div>
                    <div>
                        <p className="w-[400px] border-b border-black py-2 text-[14px] font-semibold">{user.email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile