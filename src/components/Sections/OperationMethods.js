import React from "react";
import { Eye, Fees } from "../icons/SocialIcons";

const OperationMethods = () => {
  return (
    <div className="mt-20 md:mt-32 text-center max-w-[65rem] text-coolBlack mx-auto">
      <h2 className="font-cool text-2xl md:text-5xl uppercase text-coolBlack font-semibold">
        HASSLE-FREE OPERATION METHODS
      </h2>
      <p className="mx-auto mt-4 md:mt-7 text-coolBlack text-sm md:text-base">
        Lovie Aurora has three operation choices for creators. Each operation
        mode has its own advantages that help creators scale their business at
        the most.
      </p>
      <div className="flex items-start flex-col sm:flex-row justify-between gap-10">
        <div className="flex flex-col items-center flex-1">
          <h3 className="text-[150px] md:text-[230px] font-cool font-medium text-coolBlack">
            1
          </h3>
          <div className="border-t-4 border-gray-300 mb-10 h-1 w-[10rem]"></div>
          <div>
            <h4 className="font-medium text-lg mt-2">
              Operation by Creators (OBC)
            </h4>
            <p className=" text-sm mt-2">
              Sellers need to manage their stores all by themselves, and sellers
              have the sole right to own and operate the store.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center flex-1">
          <h3 className="text-[150px] md:text-[230px] font-cool font-medium text-coolBlack">
            2
          </h3>
          <div className="border-t-4 border-gray-300 mb-10 h-1 w-[10rem]"></div>
          <div>
            <h4 className="font-medium text-lg mt-2">
              Operation by Lovie Aurora (OBLA)
            </h4>
            <p className="mx-auto text-sm mt-2 text-coolBlack">
              Sellers work with Lovie Aurora to manage their stores, and sellers
              only own the store, but Lovie Aurora has the right to operate the
              store for sellers.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center flex-1">
          <h3 className="text-[150px] md:text-[230px] font-cool font-medium text-coolBlack">
            3
          </h3>
          <div className="border-t-4 border-gray-300 mb-10 h-1 w-[10rem]"></div>
          <div>
            <h4 className="font-medium text-lg mt-2">
              Wholesale by Lovie Aurora (WBLA)
            </h4>
            <p className=" text-sm mt-2">
              Sellers sign wholesale contract with Lovie Aurora for product
              sale. Lovie Aurora has the sole right to the store and its
              operation.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full mt-32 flex items-start flex-col sm:flex-row justify-between gap-20">
        <div className="flex flex-col items-center">
          <Eye />
          <h4 className="font-cool uppercase font-semibold text-4xl mb-2 mt-6">
            Brand Awareness
          </h4>
          <p className="text-sm text-coolBlack flex flex-col">
            <span className="font-semibold mt-3 mb-4">
              Lovie Aurora encourages creators to set up <br /> own brands to
              sell on our platform.
            </span>
            <span className="text-coolBlack">
              We assist creators to develop their brand awareness both in and
              off our website, and if your brands work excellently, Lovie Aurora
              can help you develop it into a well-known name.
            </span>
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Fees />
          <h4 className="font-cool uppercase font-semibold text-4xl mb-2 mt-6">
            NO UPFRONT FEES
          </h4>
          <p className="text-sm flex flex-col">
            <span className="font-semibold mt-3 mb-4">
              Lovie Aurora is committed to offering our service for zero
              financial investment for creators to start selling with us.
            </span>
            <span className="text-coolBlack">
              Compared to many fees and various money matters you have to deal
              with, Lovie Aurora offers an All-in commission fee.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OperationMethods;
