import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import "./style.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantInfo from "./src/components/RestaurantInfo";
import { lazy, Suspense } from "react";
import Shimmer from "./src/components/Shimmer";
import { Provider } from "react-redux";
import store from "./src/utils/store";
import Cart from "./src/components/cart";


const Instamart = lazy(() => import("./src/components/instamart"));

const root = ReactDOM.createRoot(document.getElementById("root"));


const AppLayout = () => {

  return (
    <>
      <Provider store={store}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantInfo />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ],
  },
]);

root.render(<RouterProvider router={appRouter} />);
