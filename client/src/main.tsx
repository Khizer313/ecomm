import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Wishlist from "./components/wishList/wishList/WishList";
import Cart from "./components/Cart/Cart";
import JustForYou from "./components/wishList/justForYou/JustForYou";
import ProductDetail from "./components/ProductDetail";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // this is my layout with outlet
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "/recommended",
        element: <JustForYou />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
