import React, { useState } from "react";
import { Close, MenuOutline } from "react-ionicons";
import Logo from "../../utils/Logo";
import { ChevronForward } from "react-ionicons";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const VendorMobile = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  return (
    <div>
      <div className="bg-gray-50 px-4 py-2 flex items-center justify-between">
        <Logo size="40" />
        <div className="flex items-center space-x-3">
          <div className="mr-1 md:mr-3 lg:hidden block">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center justify-center hover:bg-coolBlack transition duration-200 group"
            >
              <MenuOutline height="28px" width="28px" />
            </button>

            <div
              className={`${open
                  ? "opacity-100 pointer-events-auto transform translate-x-0"
                  : "opacity-0 pointer-events-none transform -translate-x-4"
                } transition fixed top-0 left-0 duration-200 bg-white z-50 h-full w-[25rem] overflow-y-scroll`}
            >
              <div className="h-full left-0 p-4">
                <div className="flex justify-between items-center">
                  <Logo size="40" />
                  <button
                    className="hover:bg-gray-50 transition duration-150 rounded-full px-5"
                    onClick={() => setOpen(false)}
                  >
                    <Close height="25px" width="25px" />
                  </button>
                </div>
                <div className="flex flex-col items-start h-full mt-8">
                  <Link href="/vendor-panel/[username]" as="/vendor-panel/nick">
                    <a
                      className={`${router.pathname === "/vendor-panel/[username]" &&
                        "border-b-[3px] border-coolBlack font-semibold pb-1"
                        } mb-5 hover:text-coolBlack text-coolBlack`}
                    >
                      Dashboard
                    </a>
                  </Link>
                  <Link href="/vendor-panel/[username]" as="/vendor-panel/nick">
                    <a
                      className={`${router.pathname === "/vendor-panel/messages" &&
                        "border-b-[3px] border-coolBlack font-semibold pb-1"
                        } mb-5 hover:text-coolBlack text-coolBlack`}
                    >
                      Messages
                    </a>
                  </Link>
                  <Link href="/vendor-panel/orders">
                    <a
                      className={`${router.pathname === "/vendor-panel/orders" &&
                        "border-b-[3px] border-coolBlack font-semibold pb-1"
                        } mb-5 hover:text-coolBlack text-coolBlack`}
                    >
                      Orders
                    </a>
                  </Link>
                  <Link href="/vendor-panel/orders">
                    <a
                      className={`${router.pathname === "/vendor-panel/products" &&
                        "border-b-[3px] border-coolBlack font-semibold pb-1"
                        } mb-5 hover:text-coolBlack text-coolBlack`}
                    >
                      Products
                    </a>
                  </Link>
                  <Link href="/vendor-panel/inventory">
                    <a
                      className={`${router.pathname === "/vendor-panel/inventory" &&
                        "border-b-[3px] border-coolBlack font-semibold pb-1"
                        } mb-5 hover:text-coolBlack text-coolBlack`}
                    >
                      Inventory
                    </a>
                  </Link>
                  <Link href="/vendor-panel/reviews">
                    <a
                      className={`${router.pathname === "/vendor-panel/reviews" &&
                        "border-b-[3px] border-coolBlack font-semibold pb-1"
                        } mb-5 hover:text-coolBlack text-coolBlack`}
                    >
                      Reviews
                    </a>
                  </Link>
                  <Link href="/vendor-panel/finance">
                    <a
                      className={`${router.pathname === "/vendor-panel/finance" &&
                        "border-b-[3px] border-coolBlack font-semibold pb-1"
                        } mb-5 hover:text-coolBlack text-coolBlack`}
                    >
                      Finance
                    </a>
                  </Link>
                  <Link href="/contact">
                    <a
                      className={`${router.pathname === "/contact" &&
                        "border-b-[3px] border-coolBlack font-semibold pb-1"
                        } mb-5 hover:text-coolBlack text-coolBlack`}
                    >
                      Open a case
                    </a>
                  </Link>
                  <Link href="/vendor-panel/settings">
                    <a
                      className={`${router.pathname === "/contact" &&
                        "border-b-[3px] border-coolBlack font-semibold pb-1"
                        } mb-5 hover:text-coolBlack text-coolBlack`}
                    >
                      Store Settings
                    </a>
                  </Link>
                  <Link href="/">
                    <a
                      className={`${router.pathname === "/" &&
                        "border-b-[3px] border-coolBlack font-semibold pb-1"
                        } hover:text-coolBlack text-coolBlack`}
                    >
                      Sign out
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            {open && (
              <div className="bg-coolBlack bg-opacity-50 w-full h-full fixed top-0 left-0"></div>
            )}
          </div>
          <div className="relative">
            <div className="relative rounded-full h-8 w-8  overflow-hidden">
              <Image
                src="/man-tennis-court.jpg"
                objectFit="cover"
                layout="fill"
              />
            </div>
            <div className="h-2 w-2 absolute bottom-0 right-1 bg-coolDarkGreen rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorMobile;
