import Navbar from "../component/Navbar"
const Blog = () => {
    return (
        <div>
            <div className="w-full h-[1000px] bg-cover flex justify-center items-center" style={{backgroundImage:'url("https://stumptown-content.imgix.net/3WChOYHRV0WjtRWwmjnFS1/f03a4a77a48caee768adb1416a636f5d/Blog_landing_desktop.jpg?w=1400&auto=format,compress")'}}>
                <div className="text-[#413d3c]">
                    <p className="text-[14px] flex justify-center font-bold">THE STUMPTOWN BLOG</p>
                    <p className="text-[80px] flex justify-center font-serif">Coffee and Community</p>
                </div>
            </div>
        </div>
    )
}
export default Blog