import { useDispatch, useSelector } from "react-redux"
import { Producthome } from "../Product/Producthome"
import { useState } from "react"
import { setCart,addQuantity } from "../slice/cartslice"
const Productwindow = ({ name, price, category, img }) => {
    // {name,price,category,img} export for use outside
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)
    const checkduplicate = () => {
        if(cart.items.some(e => e.name === name)){
            console.log("Duplicate")
            dispatch(addQuantity({
                name:name,
            }))
        }
        else{
            dispatch(setCart({
                name:name,
                price:price,
                category:category,
                img:img,
                quantity:1
            }))
            console.log("Not Duplicate") 
        }
    }
    return (
        <div className="bg-white group">
            <div className="w-[100%] h-[600px] bg-[#e3ded7] flex justify-center items-center group-hover:bg-[#c1bdb7] hover:duration-500 relative">
                <img className="w-[60%]" src={img} />
                <div className="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 duration-500">
                    <img src="https://stumptown-content.imgix.net/BOMQdYf4BJ1IF0FnX9pn3/f87da5b38e2fd300c9d87a413d04d4af/man-with-striped-pants.svg?auto=format,compress" />
                </div>
            </div>
            <div className="my-6">
                <a className="font-sans text-xs font-normal">{category}</a><br />
                <a className="font-serif text-2xl font-bold">{name}</a><a className="font-serif text-2xl">  ${price}</a>
            </div>
            <div className="overflow-hidden h-[32px]">
                <div className="hover:-translate-y-10 duration-300">
                    <div className="mb-2 font-medium text-neutral-700 ">Add to Cart</div>
                    {/* use some() before, if name == name count++ else dispatch setcart */}
                    <button onClick={() => {
                        checkduplicate()
                        // dispatch(setCart({
                        //     name: name,
                        //     price: price,
                        //     category: category,
                        //     img: img,
                        //     quantity: 1
                        // }))
                    }
                    } className="mb-2 font-medium text-neutral-700 translate-y-2 ">Add to Cart</button>
                </div>
            </div>
            <div className="border-b border-black" />
        </div>
    )
}
export default Productwindow