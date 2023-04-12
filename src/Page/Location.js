import Navbar from "../component/Navbar"
import { useState } from "react"
import Modal from "react-modal"
const Location = () => {
    // const [displayCart, setDisplayCart] = useState(false)
    const [displayCart, setDisplayCart] = useState("none")
    return (
        <>
        <div className="pt-[80px] bg-[#e3ded7] flex flex-col justify-center items-center h-[500px] border-b border-black">
            <div className="w-fit">            
                <p className="text-[80px] font-bold font-serif justify-center">Find Stumptown</p>
                <p className="text-[80px] font-bold font-serif flex justify-center">Near You</p>
                <p className=" font-semibold flex justify-center">Not located near one of our cafes? Search for Coffee and Cold</p>
                <p className=" font-semibold flex justify-center">Brew products sold at retail partners nationwide, or order</p>
                <p className=" font-semibold flex justify-center">online for the freshest coffee delivered to your door.</p>
            </div>
        </div>
        <div className="bg-white h-[360px]"/>          
        </>
    )
}
export default Location