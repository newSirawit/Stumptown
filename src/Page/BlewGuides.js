import Navbar from "../component/Navbar"
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
const BlewGuides = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
            <div className="w-full h-screen bg-cover flex justify-center items-center" style={{backgroundImage:'url("https://stumptown-content.imgix.net/6bv6c3maGrPElum5Cmy7N5/a0589cc33911e081d4b274faab84f501/STC_Shopify_Brew_Guide_Hero_Desktop.jpg?w=1400&auto=format,compress")'}}>
                <div className="text-[#f7f7f7]">
                    <p className="text-[14px] flex justify-center font-bold">THE BREW GUIDE</p>
                    <div className="-space-y-8">
                        <p className="text-[72px] flex justify-center font-serif font-bold">These guides serve</p>
                        <p className="text-[72px] flex justify-center font-serif">as a good place to</p>
                        <p className="text-[72px] flex justify-center font-serif">start</p>
                    </div>
                    <div className="-space-y-1">
                        <p className="text-[20px] flex justify-center font-semibold">The grinder you use, coffee you choose, and yes, even the water</p>
                        <p className="text-[20px] flex justify-center font-semibold">from your sink, can alter the taste in the cup. Every machine is</p>
                        <p className="text-[20px] flex justify-center font-semibold">different, so you'll want to think of these parameters more as</p>
                        <p className="text-[20px] flex justify-center font-semibold">guidelines than law.</p>
                    </div>
                </div>
            </div>
    )
}
export default BlewGuides