import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
import { ProductCoffee } from "../Product/ProductCoffee"
import { ProductGear } from "../Product/ProductGear"
const Shop = () => {
    const refreshpage = () => {
        window.reload();
    }
    return (   
        <>
        <div className="py-[100px]">
            <div className="w-[100%] flex flex-col items-center ">
                <div className="w-[82%] text-[20px] flex flex-row space-x-[40px] font-semibold text-[#3e3936]">
                    <Link to="/shop/coffee" onClick={() => refreshpage()}><p>Coffee</p></Link>
                    <Link to="/shop/coldbrew" onClick={() => refreshpage()}><p>Cold Brew</p></Link>
                    <Link to="/shop/gear" onClick={() => refreshpage()}><p>Gear</p></Link>
                </div>
            </div>
            <div>
            <Outlet/>
            </div>
        </div>
        </>
    )
}
export default Shop