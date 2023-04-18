import Productwindow from "../component/Productwindow";
import { ProductCoffee } from "../Product/ProductCoffee";
import { useState, useEffect } from "react";
import axios from "axios";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";

const Wholesale = () => {
    const [isHover, setIsHover] = useState(false)
    return(

        <>
        <div className="pt-[200px] flex justify-center">
            <button className={`bg-yellow-300 border border-black w-20 h-10 mb-10 ${isHover ? "bg-black text-white" :null }`} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>Lo Lo Test</button>
        </div>
        </> 
    )
}        
export default Wholesale

// const Wholesale = () => {
//     const [data, setData] = useState(null)
//     const time = data?.current.sunrise
//     const test = Date(1678922723);
//     // const hour = test.getHours();
//     useEffect(() => {
//         axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=13.7563&lon=100.5018&appid=7125ae1bea3e5909b5f9cc5491b0fb12')
//         .then((result) => {
//             setData(result.data)
//         })
//     }, [])
//     return (
//         <div className="pt-20 h-[800px]">
//             <div>
//         Location: {data?.timezone}<br/>
//         Sunrise: {test}<br/>
//         Sunset: {Date(data?.current.sunset)}<br/>
//         Weather: {data?.current.weather[0].description}
//             </div>
//         </div>
//     )
// }
// export default Wholesale


// const Wholesale = () => {
//     const data = {
//         "A": 1678892930
//         , "B": [{ "BIRD": "ANGRY BIRD", "BOOK": "NOTE BOOK" }]
//         , "C": "CAT"
//     };
//     const eiei = 1678892930;
//     let unixTime = 1678949808
//     let datee = new Date().getHours();
//     let result = "";
//     // console.log(datee)
//     const checkDayorNight = () => {
//         if (datee >= 6 && datee < 18){
//             result = "DAY"
//         }
//         else {
//             result = "NIGHT"
//         }
//         return result
//     }
//     return (
//         <div className="pt-20 h-[800px] pl-5">
//             <div>
//             Test:{checkDayorNight()}
//             </div>
//         </div>
//     )
// }
// export default Wholesale