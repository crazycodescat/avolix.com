import { Outlet } from 'react-router-dom';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const RootLayout = () => {
  return (
    <>
      <div className="text-white font-manrope">
        <Header />
        <main className="">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default RootLayout;
