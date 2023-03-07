import { Outlet } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./Home";

const App = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  );
}

export default App;
