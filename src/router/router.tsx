import { createBrowserRouter } from "react-router-dom";
import Intro from "@/components/Intro";
// import BestSeller from "@/components/BestSeller";
import MainLayout from "./MainLayout";
import Home from "@/components/Home";
import Product from "@/components/Product";
import Gallery from "@/components/Gallery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <Intro />,
      },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "contact",
        element: "nanti",
      },
    ],
  },
]);

export default router;
