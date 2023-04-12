import Navbar from "../component/Navbar"
const Subscribe = () => {
    return (
        <>
        <div className="pt-[80px]">
            <div className="w-full h-[840px] bg-cover flex flex-col justify-between" style={{ backgroundImage: `url("https://cdn.builder.io/api/v1/image/assets%2F9b6836fa3ba643fe8fff0164397e2c60%2Fbd26683d37654311a1adb35574968920?format=webp&width=2000")` }}>
                <div className=" text-[#e3ded7] flex flex-col contrast-100 w-full pr-[95px] pt-[50px]">
                    <p className="font-serif text-[72px] font-bold flex justify-end">Subscribe</p>
                    <p className="font-serif text-[72px] font-bold flex justify-end mb-[10px]">& Delight</p>
                    <p className="text-[16px] flex font-semibold justify-end">Enjoy fresh Stumptown coffee delivered directly to your</p>
                    <p className="text-[16px] flex font-semibold justify-end">door with a subscription — plus a bunch of other perks</p>
                    <p className="text-[16px] flex font-semibold justify-end">like free shipping, discounts, and early access to</p>
                    <p className="text-[16px] flex font-semibold justify-end">exclusive product drops.</p>
                    <p className="text-[16px] flex font-bold justify-end mt-[50px]">SHOP SUBSCRIPTIONS</p>
                    <p className="text-[16px] flex font-bold justify-end">LEARN MORE</p>
                </div>
                <div className="font-serif w-[100%] h-[300px] bg-[#1f1815] text-[24px] font-bold text-[#e3ded7] flex flex-row justify-around">
                    <div className="-space-y-2 w-[240px] flex flex-col justify-center items-center">
                        <p>How it</p>
                        <p>Works</p>
                    </div>
                    <div className="w-[240px]">
                        <img className="w-56 absolute pl-[16px] pt-[16px]" src="https://cdn.builder.io/api/v1/image/assets%2F9b6836fa3ba643fe8fff0164397e2c60%2F24674886859440f2820879478dcc8077?format=webp&width=2000"/>
                        <div className="pt-[96px] pl-[100px] -space-y-2">
                            <p>Choose</p>
                            <p>Your</p>
                            <p>Coffee</p>
                            <div className="text-[16px] font-medium font-sans -space-y-1">
                                <p>from the three</p>
                                <p>subscription</p>
                                <p>options below</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[240px]">
                        <img className="w-56 absolute pl-[16px] pt-[16px]" src="https://cdn.builder.io/api/v1/image/assets%2F9b6836fa3ba643fe8fff0164397e2c60%2F401bcf20744a42c3b974abb08f880c14?format=webp&width=2000"/>
                        <div className="pt-[96px] pl-[100px] -space-y-2">
                            <p>Select</p>
                            <p>How</p>
                            <p>Much</p>
                            <div className="text-[16px] font-medium font-sans -space-y-1">
                                <p>size, quantity,</p>
                                <p>and frequency</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[240px] mr-20">
                        <img className="w-56 absolute pl-[16px] pt-[16px]" src="https://cdn.builder.io/api/v1/image/assets%2F9b6836fa3ba643fe8fff0164397e2c60%2F163d556b42a94dab8698c71c742eddd6?format=webp&width=2000"/>
                        <div className="pt-[96px] pl-[100px] -space-y-2">
                            <p>Enjoy</p>
                            <p>All The</p>
                            <p>Perks</p>
                            <div className="text-[16px] font-medium font-sans -space-y-1">
                                <p>discounts,</p>
                                <p>free shipping,</p>
                                <p>and more!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Subscribe