import { Outlet } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import TopContactInfo from "../components/TopContactInfo";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <TopContactInfo/>
      <Header companyName="Tacho-tech"/>
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
