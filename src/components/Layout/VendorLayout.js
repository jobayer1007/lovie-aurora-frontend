import React from "react";
import {
  EarnedIcon,
  OrdersIcon,
  SalesIcon,
  StarIcon,
} from "../icons/VendorIcons";
import VendorBar from "../navigation/VendorBar/VendorBar";
import { CaretUp } from "react-ionicons";
import Footer from "../navigation/Footer";
import VendorMobile from "../navigation/VendorBar/VendorMobile";
import { useRouter } from 'next/router'
const stats = [
  {
    id: 1,
    icon: <OrdersIcon />,
    metric: "32",
    decription: "Open orders",
    change: 2,
  },
  {
    id: 2,
    icon: <SalesIcon />,
    metric: "876",
    decription: "Sales this month",
    change: 3,
  },
  {
    id: 3,
    icon: <EarnedIcon />,
    metric: "$8456",
    decription: "Eearned this month",
    change: 4,
  },
];

const VendorLayout = ({ children }) => {
  const router = useRouter()
  return (
    <main className="md:flex min-h-screen">
      <div className="hidden md:block">
        <VendorBar />
      </div>
      <div className="block md:hidden">
        <VendorMobile />
      </div>
      <section className="py-6 px-4 md:px-10 w-full md:ml-[20rem]">
        {router.pathname === '/vendor-panel/chat/[chatSlug]' ? '' :
          <div div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 items-stretch">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="bg-[#337357] shadow-lg rounded-lg px-6 py-3 flex relative flex-1 "
              >
                {stat.icon}
                <h2 className="text-2xl md:text-3xl font-semibold text-white ml-4 flex items-center">
                  {stat.metric}
                  <span className="text-xs md:text-sm font-light ml-2 whitespace-nowrap">
                    {stat.decription}
                  </span>
                </h2>
                <p className="text-xs md:text-sm font-medium text-[#17C925] ml-2 absolute right-2 top-2 md:right-6 md:bottom-2 flex items-center gap-1">
                  <CaretUp height="16px" width="16px" color="#17C925" />{" "}
                  {stat.change}%
                </p>
              </div>
            ))}
            <div className="bg-[#337357] rounded-lg px-8 py-3 flex items-center md:justify-between justify-start flex-1  shadow-lg">
              <div className="md:flex gap-2 hidden">
                {["", "", "", "", ""].map((item, index) => (
                  <StarIcon small key={index} />
                ))}
              </div>
              <div className="md:hidden gap-2 flex">
                {["", "", "", "", ""].map((item, index) => (
                  <StarIcon small key={index} size="50" />
                ))}
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-white ml-4 flex items-center">
                4.8
                <span className="text-xs md:text-sm truncate font-light ml-2">
                  store reviews
                </span>
              </h2>
            </div>
          </div>}
        {children}
        <div className="mt-20"></div>
        <Footer />
      </section>
    </main >
  );
};

export default VendorLayout;
