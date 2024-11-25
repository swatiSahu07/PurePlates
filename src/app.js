import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import CRUD from "./components/Crud";

//* Building an food order app
/*LLD Design - layout
* Header
 *  -Logo
 *  -Nav items
 * Body
 *  -Search
 *  -RestaurantContainer
 *  -RestaurantCard
 *   -Img
 *   -Name of the restaurant
 *   -Star rating
 *   -Cuisine
 *   -Delivery Time
 * Footer
 *  -Copyright
 *  -Links
 *  -Address
 *  -Contact
 *
*/

const LayoutComoponent = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

// * creating Router list 
const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutComoponent/>,
    children: [
      {
        path: "/",
        element:    <Body />
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>
      },
      {
        path: "/restaurantCRUD",
        element: <CRUD/>
      },
    ]
  },
  // * calling routes as a individual pages
  // {
  //   path: "/about",
  //   element: <About/>
  // },
  // {
  //   path: "/contact",
  //   element: <Contact/>
  // },
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}/>);
