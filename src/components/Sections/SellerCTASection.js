import React from "react";
import Image from "next/image";
import Button from "../inputs/Button";
import Logo from "../utils/Logo";
import { useRouter } from "next/router";

const SellerCTASection = () => {
  const router = useRouter();
  return (
    <div className="mt-20 md:mt-32 mb-16 md:mb-32 text-center flex flex-col items-center  mx-auto">
      <Logo />
      <h2 className="font-cool mb-8 text-xl md:text-3xl mt-10 uppercase text-coolBlack font-bold">
        Ready to Start <br /> Selling on Lovie Aurora?
      </h2>

      <Button
        onClick={() => router.push("/join-as-seller/application")}
        text="Apply today"
        color="bg-coolDarkerGreen "
      />
    </div>
  );
};

export default SellerCTASection;
