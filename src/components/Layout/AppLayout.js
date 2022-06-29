import React from "react";
import Sidebar from "../navigation/Sidebar/Sidebar";
import Footer from "../navigation/Footer";
import Logo from "../utils/Logo";
import BarMobile from "../navigation/Sidebar/BarMobile";

const AppLayout = ({ children }) => {
  return (
    <main className="md:flex min-h-screen">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className="block md:hidden">
        <BarMobile />
      </div>
      <section className="w-full md:ml-[20rem]">
        <div className="py-6 px-4 md:px-10">{children}</div>
        <div className="mt-8 md:mt-20"></div>
        <div className="md:py-6 md:px-10 ">
          <Footer />
        </div>
      </section>
    </main>
  );
};

export default AppLayout;
