import { Link } from "react-router-dom"
import {MdSearch} from "react-icons/md";
import { useState, useEffect } from "react";
import axios from "axios";
import Popup from "reactjs-popup";
import Modal from "react-modal";
import { useSelector,useDispatch } from "react-redux";
import { increment,decrement,setCart,removeItem,addQuantity} from "../slice/cartslice";
import { logout} from "../slice/user";
Modal.setAppElement("#root");
const Navbar = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=13.7563&lon=100.5018&appid=7125ae1bea3e5909b5f9cc5491b0fb12')
        .then((result) => {
            setData(result.data)
        })
    }, [])

    // const sunmoon = data?.current.sunset;
    const hourcount = new Date().getHours();
    const [datepic, setDatepic] = useState("https://static.thenounproject.com/png/4808961-200.png")
    // setInterval(() => {
    //     if (hourcount >= 6 && hourcount < 18){
    //         setDatepic("https://static.thenounproject.com/png/4808961-200.png")
    //     }
    //     else {
    //         setDatepic("https://cdn2.iconfinder.com/data/icons/ui-minimalist-0-1-1/16/UI_Web_Moon_Night_Night_Mode_Dark-512.png")
    //     }
    //     return setDatepic
    // },5000);
    
    const [iconWeather, setIconWeather] = useState("")
    const weatherMain = data?.current.weather[0].main
    const changeiconWeather = () => {
        if(weatherMain == "Thunderstorm"){
            return setIconWeather("http://openweathermap.org/img/wn/11d@2x.png")
        }
        else if(weatherMain == "Drizzle"){
            return setIconWeather("http://openweathermap.org/img/wn/10d@2x.png")
        }
        else if(weatherMain == "Rain"){
            return setIconWeather("http://openweathermap.org/img/wn/09d@2x.png")
        }
        else if(weatherMain == "Snow"){
            return setIconWeather("http://openweathermap.org/img/wn/13d@2x.png")
        }
        else if(weatherMain == "Clear"){
            return setIconWeather("http://openweathermap.org/img/wn/01d@2x.png")
        }
        else if(weatherMain == "Clouds"){
            return setIconWeather("http://openweathermap.org/img/wn/02d@2x.png")
        }
        else{
            return setIconWeather("http://openweathermap.org/img/wn/50d@2x.png")
        }
    }

    const heightThermo = Math.round(data?.current.temp - 273.15) * 2;
    const [colorThermo, setColorThermo] = useState("")
    const changecolorThermo = () => {
        if(heightThermo >= 66){
            return setColorThermo("#f44040")
        }
        else if (heightThermo >= 54){
            return setColorThermo("#f4a040")
        }
        else if (heightThermo >= 0){
            return setColorThermo("#9af440")
        }
    }

    const [displayCart, setDisplayCart] = useState("translate(100%)")
    const [displayGray, setDisplaygray] = useState("none")
    // const cartTranslate = "translate(100%)"
    const showCart = () => {
        setDisplayCart("translate(0%)");
        setDisplaygray("flex")
    }
    const notshowCart = () => {
        setDisplayCart("translate(100%)")
        setDisplaygray("none")
    }
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    return (
        <>
        <div className="">
            {/* cart */}
            <div className="">
                <div className="w-full h-full bg-black/30 fixed mt-[80px] z-20" style={{display:displayGray}} onClick={() => notshowCart()}></div>
                <div className=" bg-white drop-shadow-2xl w-[450px] h-screen flex flex-col justify-between z-50 fixed right-0 duration-700" style={{ transform:displayCart}}>
                    <div className=" bg-white h-[113px] flex flex-row justify-between px-[30px] items-center border-b border-black font-semibold">
                        <div>Your cart</div>
                        <img className="w-[18px] h-[18px]" onClick={() => notshowCart()} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt3_kxEnxuk7LtUDubkeo4XYssftYFOM8KQg&usqp=CAU"/>
                    </div>
                    <div className="w-full h-full overflow-y-scroll">
                        {cart.items.map((item) => (
                            <div className="">
                                <div className="flex flex-row mx-[30px] py-9 border-b border-black">
                                    <div>
                                        <img className="w-[90px] h-[90px]" src={item.img}/>
                                    </div>
                                    <div className=" w-[245px] ml-5">
                                        <p className="mr-8 mb-2 w-44 text-xl font-semibold">{item.name}</p>
                                        <p className="text-[11px] font-semibold">${item.price}</p>
                                        <p className="mt-6 text-[11px] font-semibold">QUANTITY</p>
                                        <div className="mt-3 h-10 flex flex-row justify-between items-center border-b border-black">
                                            <button><img onClick={() => {dispatch(decrement({name:item.name}))}} className="w-3 h-3" src="https://cdn-icons-png.flaticon.com/512/1828/1828901.png"/></button>
                                            <p className="font-semibold text-sm">{item.quantity}</p>
                                            <button><img onClick={() => {dispatch(addQuantity({name:item.name}))}} className="w-3 h-3" src="https://cdn-icons-png.flaticon.com/512/32/32339.png"/></button>
                                        </div>
                                    </div>
                                    <div className=" relative right-14 pt-1 w-[20px]">
                                        <button onClick={() => {dispatch(removeItem({name:item.name}))}} className="text-[14px] text-[#585350] font-semibold underline ml-2">Remove</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className=" bg-white border-t border-black px-[30px]">
                        <div className="h-[45px] flex flex-row justify-between mb-[24px] items-center font-semibold">
                            <div>Subtotal</div>
                            <div>${cart.totalcost}</div>
                        </div>
                        <button className="w-[100%] h-[54px] mb-[10px] bg-black text-white flex justify-center items-center font-semibold">Checkout</button>
                        <p className="flex justify-center underline mb-[20px] text-[14px] text-[#3e3936] font-semibold">View Cart</p>
                    </div>
                </div>           
            </div>        
            <div className="w-full h-[80px] bg-white flex justify-between items-center px-[30px] fixed text-black z-10">
                <div className="w-[25%] flex justify-start">
                    <Link to="/"><img src="https://customers.seomanager.com/knowledgegraph/logo/stumptowncoffee_myshopify_com_logo.png" alt="Stump Town" width="120.38" height="34.88" /></Link>
                </div>
                <div className="font-medium text-[14px] w-[50%] flex justify-center">
                    <div className="flex space-x-6">
                        <Link to="/shop/coffee">Shop</Link>
                        <Link to="/subscribe">Subscribe</Link>
                        <Link to="/blog">Blog</Link>
                        <Link to="/blewguides">Brew Guides</Link>
                        <Link to="/location">Locations</Link>
                        <Link to="/wholesale">Wholesale</Link>
                    </div>
                </div>
                <div className="w-[25%] h-[42px] flex justify-between items-center font-medium text-[14px] text-black">
                    {/* <div className=" w-16" ><img className="w-8" src={datepic}/></div> */}
                    <div className="w-16">
                        <Popup trigger={<button><img onClick={() => {changeiconWeather(); changecolorThermo();}} className="w-8" src={datepic}/></button>}>
                            <div className="w-64 h-48 bg-[#ffffff] border-2 border-[#585350] fixed top-[90px] right-[350px] rounded-xl flex flex-row">
                                <div className="w-[35%] flex justify-center items-center bg-[#f2f2f4] rounded-xl">
                                <div className="flex flex-row">
                                    <div className="flex flex-col items-center h-[160px] w-[24px] relative">
                                        <div className="bg-gray-300 rounded-full w-3 dark:bg-gray-700 h-[140px] flex items-end">
                                            <div className="w-3 rounded-full" style={{height:heightThermo,backgroundColor:colorThermo}}></div>
                                        </div>
                                        <div className="w-6 h-6 rounded-full absolute bottom-0 left-0 text-[14px] font-semibold text-center" style={{backgroundColor:colorThermo}}>°C</div>
                                    </div>
                                    <div className="flex flex-col justify-end text-[10px] font-semibold space-y-[3px] h-[140px]">
                                        <div>- 70</div>
                                        <div>- 60</div>
                                        <div>- 50</div>
                                        <div>- 40</div>
                                        <div>- 30</div>
                                        <div>- 20</div>
                                        <div>- 10</div>
                                        <div>- 0</div>
                                    </div>
                                </div>
                                </div>
                                <div className="w-[65%] flex flex-col items-center">
                                    <div className="h-[50%] flex justify-start">
                                        <img className="w-[90px]" src={iconWeather}/>
                                    </div>
                                    <div className="h-[50%] text-xs font-semibold flex flex-col justify-start">
                                        <p><b>Temp: </b>{Math.round(data?.current.temp - 273.15)} °C</p> 
                                        <p><b>Weather: </b>{data?.current.weather[0].description}</p>
                                        <p><b>Wind speed: </b>{data?.current.wind_speed} km/hr</p> 
                                        <p><b>UV: </b>{data?.current.uvi}</p>
                                    </div>
                                </div>
                            </div>
                        </Popup>
                    </div>
                    <Link to="findyourmatch" className="h-[42px] border-2 border-black flex justify-center items-center px-[24px] pt-[9px] pb-[11px]">Find Your Match</Link>
                    <button to="search" onClick={() => dispatch(logout())} className="mx-[35px]"><MdSearch className="w-6 h-6"/></button>
                    <Link to="account" className="mr-[35px]"><img className="w-5 h-5" src="http://homemade-nieruchomosci.pl/wp-content/themes/homemade/img/contact.png"/></Link>
                    <button onClick={() => showCart()}><img className="w-5 h-5" src="https://uxwing.com/wp-content/themes/uxwing/download/e-commerce-currency-shopping/shopping-cart-icon.png"/>
                            <div className="w-4 h-4 flex justify-center items-center font-bold border border-black rounded-full bg-red-500 text-[12px] absolute top-5 right-[30px] text-white">{cart.totalitem}</div>
                    </button>             
                </div>
            </div>
        </div>
        </>
    )
}
export default Navbar