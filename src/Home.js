import { Link } from "react-router-dom"
import Navbar from "./component/Navbar"
import Productwindow from "./component/Productwindow"
import { Producthome } from "./Product/Product"
import { Producthome2 } from "./Product/Product"
const Home = () => {
    return (
        <div className="w-full">
            {/* bg-home */}
            <div className="w-full h-screen bg-cover flex justify-center items-center bg-fixed" style={{ backgroundImage: `url("https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,h_1200,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/neworleans/69775_3484_80d0cd87-5056-b365-ab251cd6a16c8f3d.jpg")` }}>
                <div className=" text-white flex flex-col bg-fixed">
                    <a className="font-serif text-8xl font-bold flex justify-center">Free shipping</a><br />
                    <a className="font-serif text-7xl flex justify-center">on all subscriptions</a><br />
                    <a className="text-lg font-medium flex justify-center">Plus, get 30% off your first order with code SAVE30</a>
                </div>
            </div>
            {/* contenet-1 recommend */}
            <div className="h-[100%] flex flex-row border-b border-black">
                <div className="w-[50%] bg-white p-[56px] flex flex-col justify-between">
                    <div>
                        <a className="font-serif text-5xl font-bold flex justify-start">Colombia Cantillo Family</a><br />
                        <a className="font-serif text-5xl font-medium flex justify-start">An elegant and floral cup with notes of melon and a velvety mouthfeel.</a>
                    </div>
                    <div className="w-[230px] h-[54px] bg-black flex justify-center items-center">
                        <a className="text-base text-white font-bold flex justify-start">Get Cantillo Family</a><br />
                    </div>
                </div>
                <div className="w-[50%] bg-white">
                    <img className="w-[100%]" src="https://stumptown-content.imgix.net/4PVV4pBfuDGiS3pvBzbr7Y/9a5c6b644d23716ad5adbc4b35138836/Cantillo_SplitTout_Desktop__1_.jpg?w=1080&auto=format,compress" />
                </div>
            </div>
            {/* content-2 advertise */}
            <div className="pt-[137px] flex flex-row justify-center">
                <div className="bg-white w-[40%] mr-4">
                    <div className="group overflow-hidden hover:rounded-t-full duration-[3000ms]">
                        <div className=" overflow-hidden"><img className="group-hover:scale-110 duration-[500ms]" src="https://stumptown-content.imgix.net/4xIE3beR5XbxD80XQKYZDv/3af378785775e7283f6410a523f55bc8/Coffee_Quiz_Left_Tout.jpg?auto=format,compress" /></div>
                        <div className="my-[32px] mr-[120px] group-hover:scale-100">
                            <a className="font-serif text-2xl font-bold">Discover your match </a><br />
                            <a className="font-serif text-2xl font-medium">with our coffee quiz.</a>
                        </div>
                        <div className="mb-2 font-medium text-neutral-700 group-hover:scale-100">Take the Quiz</div>
                        <div className="border-b border-black" />
                    </div>
                </div>
                <div className="bg-white w-[40%] ml-4">
                    <img src="https://stumptown-content.imgix.net/3dMnXejfo2nUCTlrj8an7l/29287bf453dea5fd745674d12c6f8bbe/Subscription_Right_Tout.jpg?auto=format,compress" />
                    <div className=" my-[32px] mr-[80px]">
                        <a className="font-serif text-2xl font-bold">Subscribe and Save. </a><br />
                        <a className="font-serif text-2xl font-medium">Fresh Stumptown Delivered to Your Door</a>
                    </div>
                    <div className="mb-2 font-medium text-neutral-700">Shop Subscriptions</div>
                    <div className="border-b border-black" />
                </div>
            </div>
            {/* content-3 coffee shop */}
            <div className="flex justify-center py-[137px]">
                <div className="w-[82%] bg-white grid gap-8 grid-cols-3">
                    {Producthome.map((product) => (
                        <Productwindow name={product.name} price={product.price} category={product.category} img={product.img}/>
                    ))}
                </div>
            </div>
            {/* content-3 gear shop */}
            <div className="flex justify-center py-[137px]">
                <div className="w-[82%] bg-white grid gap-8 grid-cols-3">
                    {Producthome2.map((product) => (
                        <Productwindow name={product.name} price={product.price} category={product.category} img={product.img}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Home