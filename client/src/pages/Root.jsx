import { Outlet } from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const RootLayout = () => {
  return (
    <>
      <div className="text-white font-manrope mx-auto max-w-[1200px]">
        <div className="">
          <Header />
          <main className="">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default RootLayout;
