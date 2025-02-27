import { createBrowserRouter } from "react-router-dom";
import Intro from "@/components/Intro";
import BestSeller from "@/components/BestSeller";
import MainLayout from "./MainLayout";
import Home from "@/components/Home";

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
        element: <BestSeller />,
      },
      {
        path: "gallery",
        element: "nanti",
      },
      {
        path: "contact",
        element: "nanti",
      },
    ],
  },
]);

export default router;
