import { Link } from "react-router-dom"
import {MdSearch} from "react-icons/md";

const Navbar = () => {
    return (
        <div className="w-full h-[80px] bg-[#ffffff] flex justify-between items-center px-[30px] fixed text-black">
            <div className="w-[25%] flex justify-start">
                <Link to="/"><img src="https://customers.seomanager.com/knowledgegraph/logo/stumptowncoffee_myshopify_com_logo.png" alt="Stump Town" width="120.38" height="34.88" /></Link>
            </div>
            <div className="font-medium text-[14px] w-[50%] flex justify-center">
                <div className="flex space-x-6">
                    <Link to="/shop" className="">Shop</Link>
                    <Link to="/subscribe" className="">Subscribe</Link>
                    <Link to="/blog" className="">Blog</Link>
                    <Link to="/blewguides" className="">Brew Guides</Link>
                    <Link to="/location" className="">Locations</Link>
                    <Link to="/wholesale" className="">Wholesale</Link>
                </div>
            </div>
            <div className="w-[25%] h-[42px] flex justify-between items-center font-medium text-[14px] text-black">
                <Link to="Findyourmatch" className="h-[42px] border-2 border-black flex justify-center items-center px-[24px] pt-[9px] pb-[11px]">Find Your Match</Link>
                <Link to="Search" className="mx-[35px]"><MdSearch className="w-6 h-6"/></Link>
                <Link to="Account" className="mr-[35px]"><img src="http://homemade-nieruchomosci.pl/wp-content/themes/homemade/img/contact.png" width="20" /></Link>
                <Link to="Cart" ><img src="https://uxwing.com/wp-content/themes/uxwing/download/e-commerce-currency-shopping/shopping-cart-icon.png" width="20" /></Link>              
            </div>
        </div>
    )
}
export default Navbar