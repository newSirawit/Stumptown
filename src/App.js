import { Outlet } from "react-router-dom";
import Navbar from "./component/Navbar";
import BTbar from "./component/bottombar";
const App = () => {
  return (
    <>
      <div>
        <Navbar/>
        <Outlet/>
        <BTbar/>
      </div>
    </>
  );
}

export default App;
