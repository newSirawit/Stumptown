import Productwindow from "../../../component/Productwindow"
import { ProductCoffee } from "../../../Product/ProductCoffee"
import { useState } from "react" 
const Coffee = () => {
    const [product] = useState(ProductCoffee)
    const [filterproduct, setfilterproduct] = useState(ProductCoffee)
    const [buttonChange, setButtonChange] = useState(null)
    const category = [
        { name : "SUBSCRIPTION ONLY"},
        { name : "SINGLE ORIGIN"},
        { name : "BLEND"}
    ]
    return(
        <>
        <div className="w-[100%] flex justify-center">
            <button className="w-[82%] text-[14px] flex flex-row space-x-[10px] font-bold pt-6 text=[#1f1815] text-[#3e3936]">
                {category.map((cat,index) => (
                <div className={`border-2 border-black pt-[6px] px-[24px] pb-[8px] hover:bg-black hover:text-white ${buttonChange == index ? "bg-black text-white" : null}`}
                    onClick={() => {
                        setfilterproduct(product.filter(e => e.category == cat.name));
                        setButtonChange(index)
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
                {filterproduct.map((product) => (
                    <Productwindow name={product.name} price={product.price} category={product.category} img={product.img}/>
                ))}
            </div>
        </div>
        </> 
    )
}
export default Coffee