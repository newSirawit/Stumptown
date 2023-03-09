import { Outlet } from "react-router-dom";
import Navbar from "./component/Navbar";
import BTbar from "./component/bottombar";
import Home from "./Home";

const App = () => {
  return (
    <> 
      <div className="flex flex-col justify-between">
        <Navbar/>
        <Outlet/>
        <BTbar/>
      </div>
    </>
  );
}

export default App;
