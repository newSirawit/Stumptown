import { useState } from "react"
import Productwindow from "../../../component/Productwindow"
import { ProductGear } from "../../../Product/ProductGear"
const Gear = () => {
    const [product] = useState(ProductGear)
    const [filterProduct, setfilterproduct] = useState(ProductGear)
    const category = [
        { name : "BREWING"},
        { name : "MERCH"},
        { name : "FILTER"},
        { name : "MUG"},
        { name : "GIFT CARD"}     
    ]
    return(
        <>
        <div className="w-[100%] flex justify-center">
            <button className="w-[82%] text-[14px] flex flex-row space-x-[10px] font-bold pt-6 text=[#1f1815] text-[#3e3936]">
                {category.map((cat) => (
                    <div className="border-2 border-black pt-[6px] px-[24px] pb-[8px]" 
                        onClick={() => {
                            setfilterproduct(product.filter(e => e.category == cat.name))
                        }}>
                        <div>
                            <p className="text-[12px]">{cat.name}</p>
                        </div>
                    </div>
                ))}
            </button>
        </div>
        <div className="flex justify-center py-[58px]">
            <div className="w-[82%] bg-white grid gap-8 grid-cols-3">
                {filterProduct.map((product) => (
                    <Productwindow name={product.name} price={product.price} category={product.category} img={product.img}/> 
                ))}
            </div>
        </div>
        </>               
    )
}
export default Gear