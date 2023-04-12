import { useState } from "react"
import { ProductCoffee } from "../Product/ProductCoffee"
import Productwindow from "./Productwindow"
const Coffeebar = () => {
    const [products, setProducts] = useState(ProductCoffee)
    const [filterproduct, setfilterproduct] = useState(ProductCoffee)
    const category =  [
        {name: "SUBSCRIPTION ONLY"},
    ]
    return(
        <div className="w-[100%] flex justify-center">
            <div className="w-[82%] text-[14px] flex flex-row space-x-[10px] font-bold pt-6 text=[#1f1815] text-[#3e3936]">
                <button onClick={() => {setfilterproduct(products.filter(e => e.category == category.name ))}} className="border-2 border-black pt-[6px] px-[24px] pb-[8px]">Subscription Eligible</button>
                {/* <button onClick={ProductCoffee.filter((product) => (product.category === "SUBSCRIPTION ONLY"))} value={subscribe} className="border-2 border-black pt-[6px] px-[24px] pb-[8px]">Subscription Eligible</button> */}
                <div className="border-2 border-black pt-[6px] px-[24px] pb-[8px]">Blends</div>
                <div className="border-2 border-black pt-[6px] px-[24px] pb-[8px]">Single Origins</div>
                <div className="border-2 border-black pt-[6px] px-[24px] pb-[8px]">5 LB Bags</div>
                <div className="border-2 border-black pt-[6px] px-[24px] pb-[8px]">Gift Sets</div>
                <div className="border-2 border-black pt-[6px] px-[24px] pb-[8px]">Organic Coffee</div>
                <div className="border-2 border-black pt-[6px] px-[24px] pb-[8px]">Ground</div>
                <div className="border-2 border-black pt-[6px] px-[24px] pb-[8px]">Decaf</div>
            </div>
        </div>
    )
}
export default Coffeebar