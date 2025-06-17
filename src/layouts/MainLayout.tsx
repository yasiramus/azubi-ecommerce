import { Outlet } from "react-router";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-[#191919] font-manrope text-white">
      <Navbar />
      <div className="max-w-8xl mx-10 border-b border-gray-700"></div>
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
