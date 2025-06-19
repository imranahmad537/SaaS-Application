
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar"

const MainLayout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex">
            <Outlet/>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
