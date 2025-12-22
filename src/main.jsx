   
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import router from "./routes";
import "./index.css";
import "aos/dist/aos.css";
import AOS from "aos";
import "swiper/css";
import "swiper/css/pagination";
AOS.init({ once:true, duration:600 });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster position="top-center" />
  </React.StrictMode>
);
