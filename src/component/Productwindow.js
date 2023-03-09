import { Producthome } from "../Product/Product"
const Productwindow = ({name,price,category,img}) => {
    return(
        <div className="bg-white">
            <div className="w-[100%] h-[540px] bg-gray-300 flex justify-center items-center hover:bg-[#708090] hover:duration-500"><img className="w-[298px] h-[298px]" src={img} /></div>
            <div className="my-6">
                <a className="font-sans text-xs font-normal">{category}</a><br />
                <a className="font-serif text-2xl font-bold">{name}</a><a className="font-serif text-2xl">  ${price}</a>
            </div>
            <div className="mb-2 font-medium text-neutral-700">Add to Cart</div>
            <div className="border-b border-black" />
        </div>
    )
}
export default Productwindow