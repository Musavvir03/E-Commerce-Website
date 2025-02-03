import React from "react";
import ReactDOM from "react-dom/client";

import Body from './components/Body.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import About from './components/About.js'
import Contact from './components/Contact.js'
import Error from './components/Error.js'
import { Outlet } from "react-router-dom";
import RestaurantDetails from "./components/RestaurantDetails.js";
// import RestaurantMenu from "./components/RestaurantMenu.js";
// import RestaurantInfo from "./components/RestaurantInfo.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Body />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="restaurant/:resId" element={<RestaurantDetails />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;