import { Link } from "react-router-dom";
const ShopHeader = () => {
    return (
        <div className="w-[100%] flex flex-col items-center pt-[100px]">
            <div className="w-[82%] text-[20px] flex flex-row space-x-[40px] font-semibold text-[#3e3936]">
                <Link to="/shop/coffee"><p>Coffee</p></Link>
                <Link to="/shop/coldbrew"><p>Cold Brew</p></Link>
                <Link to="/shop/gear"><p>Gear</p></Link>
            </div>
        </div>
    )
}
export default ShopHeader