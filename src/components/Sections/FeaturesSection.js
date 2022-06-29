import React from "react";
import { HeartHalf } from "react-ionicons";
import { Brand, Platform, Store } from "../icons/SocialIcons";

const FeaturesSection = () => {
  return (
    <div className="mt-14 text-coolBlack text-center max-w-[45rem] mx-auto">
      <h2 className="font-cool text-5xl uppercase text-coolBlack font-semibold">
        Features
      </h2>
      <div className="flex items-start justify-between mt-20 gap-10">
        <div className="flex flex-col items-center flex-1">
          <Store size="60" />
          <p className="text-sm mt-6 text-coolBlack">
            Each Creator can curate their own independent store appearance.
          </p>
        </div>
        <div className="flex flex-col items-center flex-1">
          <Platform size />
          <p className="text-sm mt-6 text-coolBlack">
            Encourage creators to build connection with their followers and
            customers.
          </p>
        </div>
      </div>
      <div className="flex items-start justify-between mt-20 gap-10">
        <div className="flex flex-col items-center flex-1">
          <Brand size />
          <p className="text-sm mt-6 text-coolBlack">
            Stores have the chance to be picked and displayed on Lovie Aurora
            homepage and under other spotlights.
          </p>
        </div>
        <div className="flex flex-col items-center flex-1">
          <div className="bg-coolBlack w-[8rem] h-8 mb-2 mt-6"></div>
          <div className="bg-coolBlack w-[8rem] h-8 mb-2"></div>
          <p className="text-sm mt-7 text-coolBlack">
            All stores are strictly managed by Lovie Aurora in terms of creating
            a fair and transparent community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
