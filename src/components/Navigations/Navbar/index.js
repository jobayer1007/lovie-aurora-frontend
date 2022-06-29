import React, { useEffect, useState } from 'react';
import NavbarItems from './NavbarItems';
import Categories from './Categories/Categories';
import Link from 'next/link';
import Drawer from '../Drawer';
import SearchDropdown from '../SearchDropdown';
import BigLogo from '@/icons/BigLogo';
import Logo from '@/icons/Logo';
import SearchInput from '@/inputs/SearchInput/SearchInput';

const Navbar = ({ categories }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [search, setSearch] = useState('what are you looking for?');

  return (
    <div className='bg-white  text-coolBlack sticky top-0 z-50 max-w-[1320px] px-4 md:px-8 w-full mx-auto'>
      <div className='flex items-center h-[10vh] justify-start'>
        <Link href='/'>
          <a className='hidden sm:block'>
            <BigLogo />
          </a>
        </Link>

        <Link href='/'>
          <a className='block sm:hidden'>
            <Logo size='50' />
          </a>
        </Link>
        <div className='mr-8 ml-auto lg:block hidden'>
          <SearchInput
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            search={search}
            setSearch={setSearch}
          />
        </div>
        <NavbarItems categories={categories} />
      </div>
      <div className='hidden lg:block'>
        <Categories categories={categories} />
      </div>
      <div className='lg:mr-8 ml-auto lg:hidden flex items-center mt-2 md:mt-0'>
        <Drawer categories={categories} />
        <SearchInput
          search={search}
          setSearch={setSearch}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
        />
      </div>
      {/* {openMenu && (
        <SearchDropdown
          search={search}
          setSearch={setSearch}
          setOpen={setOpenMenu}
          open={openMenu}
          categories={categories}
          setOpenMenu={setOpenMenu}
        />
      )} */}
    </div>
  );
};

export default Navbar;
