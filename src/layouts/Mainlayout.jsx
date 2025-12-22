import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout(){
  return (
    <div className="app-shell flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <div className="soft-divider" />
      <Footer />
    </div>
  );
}
