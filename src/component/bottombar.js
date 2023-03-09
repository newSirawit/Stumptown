import { Link } from "react-router-dom";
import { MdSearch } from "react-icons/md";

const BTbar = () => {
    return (
        <div className="w-full h-[517px] bg-[#b54747] p-[64px] text-black flex flex-col justify-between">
            {/* topside */}
            <div className="flex flex-row justify-between items-center">
                {/* shop */}
                <div className="bg-blue-300 flex flex-col w-[30%] space-y-5">
                    <p className="font-medium text-sm">SHOP</p>
                    <p className="font-serif text-5xl font-bold">Subscibe</p>
                    <p className="font-serif text-5xl font-bold">Coffee</p>
                    <p className="font-serif text-5xl font-bold">Cold brew</p>
                    <p className="font-serif text-5xl font-bold">Gear</p>
                </div>
                {/* other */}
                <div className="bg-green-300 flex flex-row justify-around w-[40%] h-full">
                    <div className="space-y-3">
                        <p className="font-medium text-sm mb-5">ABOUT</p>
                        <p className="font-medium text-sm">Our Story</p>
                        <p className="font-medium text-sm">Locations</p>
                        <p className="font-medium text-sm">Jobs</p>
                        <p className="font-medium text-sm">FAQ</p>
                        <p className="font-medium text-sm">Contact</p>
                    </div>
                    <div className="space-y-3">
                        <p className="font-medium text-sm mb-5">LEARN</p>
                        <p className="font-medium text-sm">Brew Guides</p>
                        <p className="font-medium text-sm">Blog</p>
                        <p className="font-medium text-sm">Impact</p>
                    </div>
                    <div className="space-y-3">
                        <p className="font-medium text-sm mb-5">WHOLESALE</p>
                        <p className="font-medium text-sm">Serve Stumptown</p>
                        <p className="font-medium text-sm">Ordering</p>
                    </div>
                </div>
                {/* contact */}
                <div className="bg-yellow-300 flex flex-col w-[30%] h-[292px]">
                    <a className="font-medium text-sm">GET SECRET NOTES</a>
                    <a className="font-medium text-sm h-[46px] border-b border-black flex items-center">Enter your email</a>
                    <a className="font-medium text-sm mt-[40px]">Need help? Call us Monday-Friday</a>
                    <a className="font-medium text-sm mb-[16px]">8am–4pm (PT)</a>
                    <a className="font-medium text-sm">(855) 711–3385</a>
                </div>
            </div>
            {/* bottomside */}
            <div>
                <div className="h-[46px] flex items-center">
                    asdasdasdasd
                </div>
                <div>
                    123123123
                </div>
            </div>
        </div>
    )
}
export default BTbar