import { Link } from "react-router-dom"
import Navbar from "./component/Navbar"
const Home = () => {
    return (
        <div className="w-full">
            {/* bg-home */}
            <div className="w-full h-screen bg-cover flex justify-center items-center bg-fixed" style={{backgroundImage: `url("https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,h_1200,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/neworleans/69775_3484_80d0cd87-5056-b365-ab251cd6a16c8f3d.jpg")`}}>
                <div className=" text-white flex flex-col bg-fixed">
                    <a className="font-serif text-8xl font-bold flex justify-center">Free shipping</a><br/>
                    <a className="font-serif text-7xl flex justify-center">on all subscriptions</a><br/>
                    <a className="text-lg font-medium flex justify-center">Plus, get 30% off your first order with code SAVE30</a>                            
                </div>
            </div>
            {/* contenet-1 */}
            <div className="h-[100%] flex flex-row border-b border-black">
                <div className="w-[50%] bg-orange-500 p-[56px] flex flex-col justify-between">
                    <div>
                        <a className="font-serif text-5xl font-bold flex justify-start">Colombia Cantillo Family</a><br/>
                        <a className="font-serif text-5xl font-medium flex justify-start">An elegant and floral cup with notes of melon and a velvety mouthfeel.</a>
                    </div>
                    <div className="w-[230px] h-[54px] bg-black flex justify-center items-center">
                        <a className="text-base text-white font-bold flex justify-start">Get Cantillo Family</a><br/>
                    </div>
                </div>
                <div className="w-[50%] bg-green-600">
                    <img className="w-[100%]" src="https://stumptown-content.imgix.net/4PVV4pBfuDGiS3pvBzbr7Y/9a5c6b644d23716ad5adbc4b35138836/Cantillo_SplitTout_Desktop__1_.jpg?w=1080&auto=format,compress"/>
                </div>
            </div>
            {/* content-2 */}
            <div className="pt-[137px] flex flex-row justify-center">
                <div className="bg-blue-500 w-[42%] pr-4">
                    <img src="https://stumptown-content.imgix.net/4xIE3beR5XbxD80XQKYZDv/3af378785775e7283f6410a523f55bc8/Coffee_Quiz_Left_Tout.jpg?auto=format,compress" />
                    <div className=" my-[32px] mr-[120px]">
                        <a className="font-serif text-3xl font-bold">Discover your match </a><br/>
                        <a className="font-serif text-3xl font-medium">with our coffee quiz.</a>
                    </div>
                    <div className="mb-2 font-medium text-neutral-700">Take the Quiz</div>
                    <div className="border-b border-black"/>
                </div>
                <div className="bg-green-300 w-[42%] pl-4">
                    <img src="https://stumptown-content.imgix.net/3dMnXejfo2nUCTlrj8an7l/29287bf453dea5fd745674d12c6f8bbe/Subscription_Right_Tout.jpg?auto=format,compress" />
                    <div className=" my-[32px] mr-[120px]">
                        <a className="font-serif text-3xl font-bold">Subscribe and Save. </a><br/>
                        <a className="font-serif text-3xl font-medium">Fresh Stumptown Delivered to Your Door</a>
                    </div>
                    <div className="mb-2 font-medium text-neutral-700">Shop Subscriptions</div>
                    <div className="border-b border-black"/>
                </div>
            </div>
            {/* content-3 shop */}
            <div className="flex justify-center pt-[137px]">
            <div className="w-[80%] bg-yellow-200 grid gap-8 grid-cols-3">
                <div className="bg-red-800">
                    <div className="w-[100%] h-[540px] bg-gray-300 flex justify-center items-center"><img className="w-[298px] h-[298px]" src="https://stumptown-shop.imgix.net/products/Roaster_sPickbadgeDeOro.png?v=1677096836?w=360&auto=format,compress" /></div>
                    <div className="my-6">
                        <a>Subscribetion only</a><br/>
                        <a className="font-serif text-2xl font-bold">Roaster's Pick $23</a>
                    </div>
                    <div className="mb-2 font-medium text-neutral-700">Add to Cart</div>
                    <div className="border-b border-black"/>
                </div>
                <div className="bg-red-800">2</div>
                <div className="bg-red-800">3</div>
                <div className="bg-red-800">4</div>
                <div className="bg-red-800">5</div>
                <div className="bg-red-800">6</div>
                <div className="bg-red-800">1</div>
                <div className="bg-red-800">2</div>
                <div className="bg-red-800">3</div>
                <div className="bg-red-800">4</div>
                <div className="bg-red-800">5</div>
                <div className="bg-red-800">6</div>
            </div>
            </div>
        </div>
    )
}
export default Home