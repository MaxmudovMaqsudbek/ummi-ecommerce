'use client';

import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation';
import { LiaShopware } from "react-icons/lia";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Close the menu when the pathname changes
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className='flex items-center px-4 md:px-8 py-2 justify-between fixed top-0 w-full z-50 shadow bg-white'>
      <Link href={'/'} className='flex items-center'>
        <LiaShopware className="w-10 h-10 sm:w-12 sm:h-12 md:w-[150px] md:h-[40px]" />
        <h1 className='ml-2 font-sans text-lg sm:text-xl md:text-2xl lg:text-3xl'>
          Ummi Shop
        </h1>
      </Link>
      <div className='hidden md:flex items-center space-x-1.5 text-sm'>
        <nav className='flex flex-wrap items-center text-base justify-center'>
          <Link href={'/'} className='mr-5 hover:text-gray-900 hover:underline underline-offset-4'>
            Home
          </Link>
          <Link href={'/products'} className='mr-5 hover:text-gray-900 hover:underline underline-offset-4'>
            Products
          </Link>
          <Link href={'/contacts'} className='mr-5 hover:text-gray-900 hover:underline underline-offset-4'>
            Contacts
          </Link>
        </nav>
        <Link href={'/shopping-cart'}>
          <button className='button bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black'>
            My bag
          </button>
        </Link>
      </div>
      <div className='md:hidden'>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
        >
          {isMenuOpen ? <HiX className='w-6 h-6' /> : <HiMenu className='w-6 h-6' />}
        </button>
      </div>
      {isMenuOpen && (
        <div className='md:hidden absolute top-full left-0 right-0 bg-white shadow-md'>
          <nav className='flex flex-col items-center text-base'>
            <Link href={'/'} className='w-full text-center py-2 hover:bg-gray-100'>
              Home
            </Link>
            <Link href={'/products'} className='w-full text-center py-2 hover:bg-gray-100'>
              Products
            </Link>
            <Link href={'/contacts'} className='w-full text-center py-2 hover:bg-gray-100'>
              Contacts
            </Link>
            <Link href={'/shopping-cart'} className='w-full text-center py-2 hover:bg-gray-100'>
              <button className='button bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black'>
                My bag
              </button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar

