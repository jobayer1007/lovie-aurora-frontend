import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { GlobeOutline, ChevronDown } from 'react-ionicons';
import {
  Chat,
  FacebookIcon,
  InstagramIcon,
  Messenger,
  TikTok,
  TwitterIcon,
} from '@/icons/SocialIcons';
import TextLogo from '@/icons/TextLogo';

const Footer = () => {
  const [openAbout, setOpenAbout] = useState(false);
  const [openOp, setOpenOp] = useState(false);
  const [openServerice, setOpenServices] = useState(false);
  const [openPolicies, setOpenPolicies] = useState(false);
  const [currencyShortForm, setCurrencyShortForm] = useState('USD');
  const [footerSetting, setFooterSetting] = useState('USD');
  const currencies = [
    { fullForm: 'US Dollar', shortForm: 'USD' },
    { fullForm: 'Canadian Dollar', shortForm: 'CAD' },
    { fullForm: 'British Pound', shortForm: 'GBP' },
    { fullForm: 'Euro', shortForm: 'EUR' },
  ];

  useEffect(() => {
    setCurrencyShortForm(
      footerSetting.currency === 'Euro'
        ? 'EUR'
        : footerSetting.currency === 'Canadian Dollar'
        ? 'CAD'
        : footerSetting.currency === 'British Pound'
        ? 'GBP'
        : 'USD'
    );
  }, [footerSetting]);

  const [open, setOpen] = useState(false);
  const [currency, setCurrency] = useState('Us Dollar');
  const node = useRef();

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setOpen(false);
  };

  const handleChange = (selectedValue) => {
    setCurrency(selectedValue);
    setCurrencyShortForm(selectedValue);
    setOpen(false);
  };

  useEffect(() => {
    // add when mounted
    document.addEventListener('mousedown', handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  const [openForLang, setOpenForLang] = useState(false);
  const [lang, setLang] = useState('English');
  return (
    <div className='bg-[#F2F2F2] text-coolBlack  w-full pt-10 md:pt-16 pb-6'>
      <div className='max-w-[1320px] px-4 md:px-8 mx-auto'>
        <div className='flex items-start gap-10 lg:flex-nowrap flex-wrap justify-between'>
          <div className='w-full mr-0 md:mr-2'>
            <div className='-mt-1.5 flex flex-col items-center md:items-start'>
              <TextLogo size1='280' size2='50' />
              <div className='flex items-center gap-3'>
                <div className='border border-coolBlack bg-white px-1 py-0.5 flex items-center max-w-[11rem] rounded-md justify-end mt-3'>
                  <GlobeOutline height='16px' width='16px' />
                  <div className='flex py-[1px] w-full relative flex-col'>
                    <div
                      onMouseLeave={() => setOpenForLang(false)}
                      onClick={() => setOpenForLang(!openForLang)}
                      className='flex items-center cursor-pointer'
                    >
                      <span className=' w-full text-center text-sm ml-3 mr-3.5'>
                        {lang}
                      </span>
                      <div className='ml-auto pl-1.5 pr-1.5'>
                        {/* {!openForLang &&  <ChevronDown height="16px" color='#363638' width="16px" />} */}
                      </div>
                      {openForLang && (
                        <div
                          onMouseLeave={() => setOpenForLang(false)}
                          className='absolute bg-white top-5 z-20 right-1 mt-1 text-center w-full  flex flex-col mt-[3px] items-center px-1 py-1 overflow-hidden'
                        >
                          <button
                            onClick={() => setLang('English')}
                            className='hover:bg-coolDarkerGreen hover:text-white text-sm  py-1  w-full'
                            // className="hover:bg-coolDarkerGreen   hover:text-white  py-1 px-5 text-xs  w-full"
                          >
                            English
                          </button>
                          <button
                            onClick={() => setLang('Chinese')}
                            className='hover:bg-coolDarkerGreen  hover:text-white py-1   text-xs  w-full'
                          >
                            Chinese
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className='border border-coolBlack bg-white px-1 py-0.5 flex items-center w-full rounded-md justify-end mt-3'>
                  <div
                    onMouseLeave={() => setOpen(false)}
                    ref={node}
                    className='flex relative flex-col min-w-[8rem]'
                  >
                    <div
                      onClick={() => setOpen(!open)}
                      className=' rounded-md flex items-center cursor-pointer'
                    >
                      <span className='text-sm w-full text-center whitespace-nowrap'>
                        {currencyShortForm}
                      </span>
                      <div className='ml-auto border-coolBlack pl-1'>
                        {/* {!open &&        <ChevronDown height="16px" color='#363638' width="16px" />} */}
                      </div>
                      {open && (
                        <div
                          onMouseLeave={() => setOpen(false)}
                          className='text-sm absolute bg-white rounded-sm shadow-md top-6 z-10 left-0 w-full  flex flex-col items-start overflow-hidden'
                        >
                          {currencies.map((curr, index) => (
                            <button
                              key={index}
                              onClick={() => handleChange(curr.shortForm)}
                              className='hover:bg-coolDarkerGreen hover:text-white text-sm px-4 py-1  w-full'
                            >
                              {curr.shortForm}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='hidden md:flex flex-col mt-5'>
              <div className='flex flex-col'>
                <Link href='/about-us'>
                  <a className='text-sm mb-4 text-coolBlack underline hover:text-gray-800 decoration-dashed underline-offset-2 transition duration-150'>
                    About us
                  </a>
                </Link>
                <Link href='/career'>
                  <a className='text-sm mb-4 text-coolBlack underline hover:text-gray-800 decoration-dashed underline-offset-2 transition duration-150'>
                    Career
                  </a>
                </Link>
                <Link href='/blog'>
                  <a className='text-sm text-coolBlack underline hover:text-gray-800 decoration-dashed underline-offset-2 transition duration-150'>
                    The blog
                  </a>
                </Link>
                <Link href='/privacy-policy'>
                  <a className='text-sm mt-10 text-gray-300 hover:text-gray-800 decoration-dashed underline-offset-2 transition duration-150'>
                    Privacy Policy
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className='hidden md:block w-full mr-2'>
            <h1 className='font-cool uppercase font-bold text-xl'>
              Customer Service
            </h1>
            <div className='flex flex-col mt-[4.5rem]'>
              <Link href='/returns-refunds'>
                <a className='text-sm mb-4 text-coolBlack underline hover:text-gray-800 decoration-dashed underline-offset-2 transition duration-150'>
                  Return / Refund / Exchange
                </a>
              </Link>
              <Link href='/shipping-and-delivery'>
                <a className='text-sm text-coolBlack underline hover:text-gray-800 decoration-dashed underline-offset-2 transition duration-150 mb-10'>
                  Shipping & Delivery
                </a>
              </Link>
              <Link href='/terms-of-conditions'>
                <a className='text-sm mt-8 text-gray-300 hover:text-gray-800 decoration-dashed underline-offset-2 transition duration-150'>
                  Terms Of Conditions
                </a>
              </Link>
            </div>
          </div>

          <div className='hidden md:block w-full mr-2'>
            <h1 className='font-cool uppercase font-bold text-xl'>
              Opportunities
            </h1>
            <div className='flex flex-col mt-[4.5rem]'>
              <Link href='/join-as-seller'>
                <a className='text-sm mb-4 text-coolBlack underline hover:text-gray-800 decoration-dashed underline-offset-2 transition duration-150'>
                  Sell on Lovie Aurora
                </a>
              </Link>

              <Link href='/help-creators-grow'>
                <a className='text-sm text-coolBlack underline hover:text-gray-800 decoration-dashed underline-offset-2 transition duration-150 mb-4'>
                  Help Creators Grow
                </a>
              </Link>
              <Link href='/we-protect-sellers-ip'>
                <a className='text-sm text-coolBlack underline hover:text-gray-800 decoration-dashed underline-offset-2 transition duration-150 mb-1.5'>
                  We Protect Sellers IP
                </a>
              </Link>

              <Link href='/cookie-policy'>
                <a className='text-sm mt-8 text-gray-300 hover:text-gray-800 decoration-dashed underline-offset-2 transition duration-150'>
                  Cookie Policy
                </a>
              </Link>
            </div>
          </div>

          {/* MOBILE ABOUT */}
          <div className='md:hidden w-full'>
            <div
              onClick={() => setOpenAbout(!openAbout)}
              className='flex items-center justify-between'
            >
              <h1 className='font-cool uppercase font-bold text-sm'>About</h1>
              <ChevronDown />
            </div>
            {openAbout && (
              <div className='flex flex-col mt-2'>
                <Link href='/about-us'>
                  <a className='text-sm mb-4 text-coolBlack underline hover:text-gray-800 decoration-dashed underline-offset-2 transition duration-150'>
                    About us
                  </a>
                </Link>
                <Link href='/career'>
                  <a className='text-sm mb-4 text-coolBlack underline hover:text-gray-800 decoration-dashed underline-offset-2 transition duration-150'>
                    Career
                  </a>
                </Link>
                <Link href='/blog'>
                  <a className='text-sm text-coolBlack underline hover:text-gray-800 decoration-dashed underline-offset-2 transition duration-150'>
                    The blog
                  </a>
                </Link>
              </div>
            )}
          </div>

          {/* MOBILE OPPORTUNITIES */}
          <div className='md:hidden w-full'>
            <div
              onClick={() => setOpenOp(!openOp)}
              className='flex items-center justify-between'
            >
              <h1 className='font-cool uppercase font-bold text-sm'>
                Opportunities
              </h1>
              <ChevronDown />
            </div>
            {openOp && (
              <div className='flex flex-col mt-2 '>
                <Link href='/join-as-seller'>
                  <a className='text-sm mb-4 text-coolBlack underline hover:text-gray-800 decoration-dashed underline-offset-2 transition duration-150'>
                    Sell on Lovie Aurora
                  </a>
                </Link>

                <Link href='/help-creators-grow'>
                  <a className='text-sm text-coolBlack underline hover:text-gray-800 decoration-dashed underline-offset-2 transition duration-150 mb-4'>
                    Help Creators Grow
                  </a>
                </Link>
                <Link href='/help-creators-grow'>
                  <a className='text-sm text-coolBlack underline hover:text-gray-800 decoration-dashed underline-offset-2 transition duration-150 mb-1.5'>
                    We Protect Sellers IP
                  </a>
                </Link>
              </div>
            )}
          </div>

          {/* MOBILE CUSTOMER SERVICE */}
          <div className='md:hidden w-full'>
            <div
              onClick={() => setOpenServices(!openServerice)}
              className='flex items-center justify-between'
            >
              <h1 className='font-cool uppercase font-bold text-sm'>
                Customer Service
              </h1>
              <ChevronDown />
            </div>
            {openServerice && (
              <div className='flex flex-col mt-2'>
                <Link href='/returns-refunds'>
                  <a className='text-sm mb-4 text-coolBlack underline hover:text-gray-800 decoration-dashed underline-offset-2 transition duration-150'>
                    Return / Refund / Exchange
                  </a>
                </Link>
                <Link href='/shipping-and-delivery'>
                  <a className='text-sm text-coolBlack underline hover:text-gray-800 decoration-dashed underline-offset-2 transition duration-150 mb-10'>
                    Shipping & Delivery
                  </a>
                </Link>
              </div>
            )}
          </div>

          {/* MOBILE POLICIES */}
          <div className='md:hidden w-full'>
            <div
              onClick={() => setOpenPolicies(!openPolicies)}
              className='flex items-center justify-between'
            >
              <h1 className='font-cool uppercase font-bold text-sm'>
                Policies
              </h1>
              <ChevronDown />
            </div>
            {openPolicies && (
              <div className='flex flex-col mt-2'>
                <Link href='/'>
                  <a className='text-sm mb-4 text-coolBlack underline hover:text-gray-800 decoration-dashed underline-offset-2 transition duration-150'>
                    Cookie Policy
                  </a>
                </Link>
                <Link href='/'>
                  <a className='text-sm mb-4 text-coolBlack underline hover:text-gray-800 decoration-dashed underline-offset-2 transition duration-150'>
                    Privacy Policy
                  </a>
                </Link>
                <Link href='/'>
                  <a className='text-sm mb-4 text-coolBlack underline hover:text-gray-800 decoration-dashed underline-offset-2 transition duration-150'>
                    Terms and Conditions
                  </a>
                </Link>
              </div>
            )}
          </div>

          <div className='w-full mr-2 md:text-left text-center'>
            <h1 className='font-cool uppercase font-bold text-xl'>
              Contact Us
            </h1>
            <div className='mt-[1rem] md:mt-[4.5rem] mb-4 flex flex-col items-center md:items-start'>
              <div className='hidden md:flex items-center mb-4'>
                <Link href='/my-account/chat/nick'>
                  <a>
                    <Chat size='40' />
                  </a>
                </Link>
                <div className='flex items-center border border-[#B7B7B7] rounded-md px-2 py-1 ml-3 text-xs self-end'>
                  {/* need to take care  */}
                  {/* <Link href='/my-account/chat/nick'> */}
                  <Messenger size='30' />
                  {/* </Link> */}
                  {/*  need to take care ...... */}
                  <div className='flex flex-col ml-4 items-start'>
                    <span>Need help?</span>
                    <Link href='/contact'>
                      <a className='hover:underline self-end text-[0.6rem] text-coolBlack'>
                        Live chat or message us!
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <Link href='/my-account/chat/nick'>
                  <a className='block md:hidden'>
                    <Chat size='35' />
                  </a>
                </Link>
                <InstagramIcon size='35' />
                <FacebookIcon size='35' />
                <TikTok size='35' />
                <TwitterIcon size='35' />
              </div>
            </div>
          </div>
        </div>
        <div className='mt-10 md:mt-20 text-center md:text-left'>
          <p className='text-xs text-coolBlack'>Copyright Lovie Aurora, 2021</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
