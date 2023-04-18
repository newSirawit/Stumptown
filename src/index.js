import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom"
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
import Register from './Page/Register';
import Coffee from './Page/shop/Coffee/Coffee';
import ColdBrew from './Page/shop/ColdBrew/ColdBrew';
import Gear from './Page/shop/Gear/Gear';
import ForgetPassword from './Page/ForgetPassword';
import AccountATLogin from './Page/AccountATLogin';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import Orders from './Page/Orders';
import Profile from './Page/Profile';
import Resetpassword from './Page/Resetpassword';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="/" element={<Home />} />
              <Route path="shop" element={<Shop />}>
                <Route path="coffee" element={<Coffee />} />
                <Route path="coldbrew" element={<ColdBrew />} />
                <Route path="gear" element={<Gear />} />
              </Route>
              <Route path="blewguides" element={<BlewGuides />} />
              <Route path="blog" element={<Blog />} />
              <Route path="location" element={<Location />} />
              <Route path="subscribe" element={<Subscribe />} />
              <Route path="wholesale" element={<Wholesale />} />
              <Route path="account" element={<Account />} />
              <Route path="cart" element={<Cart />} />
              <Route path="findyourmatch" element={<Findyourmatch />} />
              <Route path="search" element={<Search />} />
              <Route path="register" element={<Register />} />
              <Route path="forgetpassword" element={<ForgetPassword />} />
              <Route path="accountAFlogin" element={<AccountATLogin />}>
                <Route path="orders" element={<Orders/>}></Route>
                <Route path="profile" element={<Profile/>}></Route>
              </Route>
              <Route path="resetpassword" element={<Resetpassword/>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

