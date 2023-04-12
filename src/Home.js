import { Link } from "react-router-dom"
import Navbar from "./component/Navbar"
import Productwindow from "./component/Productwindow"
import { Producthome } from "./Product/Producthome"
import { Producthome2 } from "./Product/Producthome"

const Home = () => {
    return (
        <div className="w-full">
            {/* bg-home */}
            <div className="w-full h-screen bg-cover flex justify-center items-center bg-fixed" style={{ backgroundImage: `url(/img/bg5.jpg)`}}>
                <div className=" text-white flex flex-col bg-fixed contrast-100">
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
                    <img className="w-[100%]" src="https://stumptown-content.imgix.net/397UWI9TdmQNTd8DRyyTjc/2792f761d47b794e47732e2716f1a30a/Desktop_Colombia_Huayku_SplitTout.jpg?w=1080&auto=format,compress" />
                </div>
            </div>
            {/* content-2 advertise */}
            <div className="pt-[137px] flex flex-row justify-center">
                {/* content-2 part1 */}
                <div className="bg-white w-[40%] mr-4 group overflow-hidden hover:rounded-t-full duration-[2000ms]">
                    <div className="overflow-hidden relative">
                        <img className="group-hover:scale-105 duration-[500ms]" src="https://stumptown-content.imgix.net/4xIE3beR5XbxD80XQKYZDv/3af378785775e7283f6410a523f55bc8/Coffee_Quiz_Left_Tout.jpg?auto=format,compress"/>
                            <div  className="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 duration-500">
                                <img src="https://stumptown-content.imgix.net/BOMQdYf4BJ1IF0FnX9pn3/f87da5b38e2fd300c9d87a413d04d4af/man-with-striped-pants.svg?auto=format,compress"/>
                            </div>
                    </div>
                    <div className="my-[32px] mr-[120px]">
                        <a className="font-serif text-2xl font-bold">Discover your match </a><br />
                        <a className="font-serif text-2xl font-medium">with our coffee quiz.</a>
                    </div>
                    <div className="overflow-hidden h-[32px]">
                        <div className="hover:-translate-y-10 duration-300">
                            <div className="mb-2 font-medium text-neutral-700">Take the Quiz</div>
                            <div className="mb-2 font-medium text-neutral-700 translate-y-2">Take the Quiz</div>
                        </div>
                    </div>
                    <div className="border-b border-black" />                   
                </div>
                {/* content-2 part2 */}
                <div className="bg-white w-[40%] ml-4 group overflow-hidden hover:rounded-t-full duration-[2000ms]">
                    <div className="overflow-hidden relative">
                        <img className="group-hover:scale-105 duration-[500ms]" src="https://stumptown-content.imgix.net/3dMnXejfo2nUCTlrj8an7l/29287bf453dea5fd745674d12c6f8bbe/Subscription_Right_Tout.jpg?auto=format,compress" />
                            <div  className="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 duration-500">
                                <img src="https://stumptown-content.imgix.net/BOMQdYf4BJ1IF0FnX9pn3/f87da5b38e2fd300c9d87a413d04d4af/man-with-striped-pants.svg?auto=format,compress"/>
                            </div>
                    </div>
                    <div className=" my-[32px] mr-[80px]">
                        <a className="font-serif text-2xl font-bold">Subscribe and Save. </a><br />
                        <a className="font-serif text-2xl font-medium">Fresh Stumptown Delivered to Your Door</a>
                    </div>
                    <div className="overflow-hidden h-[32px]">
                        <div className="hover:-translate-y-10 duration-300">
                            <div className="mb-2 font-medium text-neutral-700">Shop Subscriptions</div>
                            <div className="mb-2 font-medium text-neutral-700 translate-y-2">Shop Subscriptions</div>
                        </div>
                    </div>
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
                    {Producthome2.map((product) => 
                        <Productwindow name={product.name} price={product.price} category={product.category} img={product.img}/>
                    )}
                </div>
            </div>
        </div>
    )
}
export default Home