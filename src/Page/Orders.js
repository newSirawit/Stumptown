import { Link, Outlet } from "react-router-dom"
const Orders = () => {
    return (
        <div className="pt-[80px] pl-[82px] pb-[80px]">
            <p className="text-[80px] font-serif font-bold mb-[10px]">Orders</p>
            <p className="text-[20px] font-semibold text-[#585350] mb-[40px]">There's nothing to see here. Yet.</p>
            <Link to="/shop/coffee"><button className="bg-black text-white w-[160px] flex justify-center items-center pb-[2px] h-[54px] font-semibold"><p>Shop Now</p></button></Link>
        </div>
    )
}
export default Orders