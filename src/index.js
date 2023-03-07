import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter,Routes,Route} from"react-router-dom"
import Page2 from './Page2';
import Page3 from './Page3';
import Home from './Home';
import Shop from './Page/Shop';
import BlewGuides from './Page/BlewGuides';
import Blog from './Page/Blog';
import Location from './Page/Location';
import Subscribe from './Page/Subscribe';
import Wholesale from './Page/Wholesale';
import Account from './Page/Account';
import Cart from './Page/Cart';
import Findyourmatch from './Page/Findyourmatch';
import Search from './Page/Search';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path= "/" element={<App/>}>
          <Route path= "/" element={<Home/>}/>
          <Route path= "shop" element={<Shop/>}/>
          <Route path= "blewguides" element={<BlewGuides/>}/>
          <Route path= "blog" element={<Blog/>}/>
          <Route path= "location" element={<Location/>}/>
          <Route path= "subscribe" element={<Subscribe/>}/>
          <Route path= "wholesale" element={<Wholesale/>}/>
          <Route path= "account" element={<Account/>}/>
          <Route path= "cart" element={<Cart/>}/>
          <Route path= "findyourmatch" element={<Findyourmatch/>}/>
          <Route path= "search" element={<Search/>}/>
        </Route>
        
        {/* <Route path= "home" element={<Home/>}/> */}

        <Route path= "Page2" element={<Page2/>}/>
        <Route path= "Page3" element={<Page3/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

