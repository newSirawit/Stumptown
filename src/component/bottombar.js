import { Link } from "react-router-dom";
import { MdSearch } from "react-icons/md";

const BTbar = () => {
    return (
        <div className="w-full h-[517px] bg-[#e3ded7] py-[64px] px-[82px] text-black flex flex-col justify-between border-t border-black">
            {/* topside */}
            <div className="flex flex-row justify-between items-center">
                {/* shop */}
                <div className=" flex flex-col w-[33%] space-y-5">
                    <p className="font-medium text-sm">SHOP</p>
                    <p className="font-serif text-5xl font-bold">Subscibe</p>
                    <p className="font-serif text-5xl font-bold">Coffee</p>
                    <p className="font-serif text-5xl font-bold">Cold brew</p>
                    <p className="font-serif text-5xl font-bold">Gear</p>
                </div>
                {/* other */}
                <div className=" flex flex-row justify-around w-[40%] h-full">
                    <div className="space-y-3 w-1/3">
                        <p className="font-medium text-sm mb-5">ABOUT</p>
                        <p className="font-medium text-sm">Our Story</p>
                        <p className="font-medium text-sm">Locations</p>
                        <p className="font-medium text-sm">Jobs</p>
                        <p className="font-medium text-sm">FAQ</p>
                        <p className="font-medium text-sm">Contact</p>
                    </div>
                    <div className="space-y-3 w-1/3">
                        <p className="font-medium text-sm mb-5">LEARN</p>
                        <p className="font-medium text-sm">Brew Guides</p>
                        <p className="font-medium text-sm">Blog</p>
                        <p className="font-medium text-sm">Impact</p>
                    </div>
                    <div className="space-y-3 w-1/3">
                        <p className="font-medium text-sm mb-5">WHOLESALE</p>
                        <p className="font-medium text-sm">Serve Stumptown</p>
                        <p className="font-medium text-sm">Ordering</p>
                    </div>
                </div>
                {/* contact */}
                <div className=" flex flex-col w-[27%] h-[292px]">
                    <a className="font-medium text-sm">GET SECRET NOTES</a>
                    <a className="font-medium text-sm h-[46px] w-[350px] border-b border-black flex items-center">Enter your email</a>
                    <a className="font-medium text-sm mt-[40px]">Need help? Call us Monday-Friday</a>
                    <a className="font-medium text-sm mb-[16px]">8am–4pm (PT)</a>
                    <a className="font-medium text-sm">(855) 711–3385</a>
                </div>
            </div>
            {/* bottomside */}
            <div className="flex flex-row justify-between font-medium text-sm">
                <div className="h-[46px] w-[65%] flex items-center space-x-5">
                    <img className="w-[46px]" src="https://logo.clearbit.com/stumptowncoffee.com"/>
                    <p>©2023 Stumptown Coffee Roasters</p>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Your Privacy Choices</p>
                </div>
                <div className="flex flex-row space-x-5 items-center">
                    <img className="w-[30px] h-[30px]" src="https://stumptown-shop.imgix.net/files/Instagram_logo_icon_5befc966-e582-4d67-92d9-0ce41d1ba814.png?v=1663881897&auto=format,compress&w=128"/>
                    <img className="w-[30px] h-[30px]" src="https://stumptown-shop.imgix.net/files/facebook_logo_icon_8d294332-cbb8-4c73-b52f-e9ec9bdf5f07.png?v=1663881920&auto=format,compress&w=128"/>
                    <img className="w-[30px] h-[30px]" src="https://stumptown-shop.imgix.net/files/twitter_logo_icon_32a40ddd-2086-4e20-b238-960c0f9fe744.png?v=1663881939&auto=format,compress&w=128"/>
                    <img className="w-[30px] h-[30px]" src="https://stumptown-shop.imgix.net/files/Pinterest_icon_57ac8ac4-b4ee-4264-be9f-07495a46c06e.png?v=1663881960&auto=format,compress&w=128"/>
                    <img className="w-[30px] h-[30px]" src="https://stumptown-shop.imgix.net/files/TikTok_icon_0b64c45d-d82c-4860-a611-531e0844ac79.png?v=1663881981&auto=format,compress&w=128"/>
                </div>
            </div>
        </div>
    )
}
export default BTbar