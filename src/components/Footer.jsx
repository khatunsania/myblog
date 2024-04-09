import React from 'react'
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Linkedin } from 'lucide-react';
const Footer = () => {
  return (
   <>
 <div className='bg-[#250c83] w-[100%] py-10'>
    <div className='w-[68%] m-auto grid lg:grid-cols-4 md:grid-cols-2 ' >
        <div className='text-center lg:text-left md:text-left '>
            <p className='text-[#fff] text-lg font-semibold mb-8'>Subscribe</p>
            <div className='my-3'>
                  <input className='px-2 w-[100%] py-4 bg-[transparent] border-[#9ca3af] rounded-lg border-2'  type="text" placeholder='your name' />
                  </div>
            <div> 
                <input className='px-2 w-[100%] py-4 bg-[transparent]   border-[#9ca3af] rounded-lg border-2' type="text" placeholder='your email address' />
                </div>
                <p className='text-base text-[#fff] my-7 '> subscribe now</p>
                <ul className='flex mt-10 md:mb-10 w-[57%] m-auto sm:w-[34%] lg:w-[100%] md:w-[100%] '>
                    <li className='mr-3 px-2 py-1 bg-[#fff] rounded-lg text-[#250e83]  '>   <Facebook className='w-[19px]  ' /></li>
                    <li className='mr-3 px-2 py-1 bg-[#fff] rounded-lg text-[#250e83]'>   <Twitter  className='w-[19px]'/></li>
                    <li className='mr-3 px-2 py-1 bg-[#fff] rounded-lg text-[#250e83]'> <Instagram  className='w-[19px]'/></li>
                    <li className='mr-3 px-2 py-1 bg-[#fff] rounded-lg text-[#250e83] '>  <Linkedin className='w-[19px]' /></li>
                </ul>
             
        </div>
        <div className='lg:ml-10 md:ml-10 mt-10 lg:mt-0 md:mt-0 text-center lg:text-left md:text-left '>
            <p className='text-[#fff] text-lg font-semibold'>company</p>
            <ul>
                <li className='text-[#fff] my-3'>FAQ's</li>
                <li  className='text-[#fff] my-3'>Careers</li>
                <li  className='text-[#fff] my-3'>About Us</li>
                <li  className='text-[#fff] my-3'>Contact Us</li>
                <li  className='text-[#fff] my-3'>Blog</li>
                <li  className='text-[#fff] my-3'>Categories</li>
                <li  className='text-[#fff] my-3'>Support</li>
                <li  className='text-[#fff] my-3'>Local Print Ads</li>
             
            </ul>
        </div>
        <div className='text-center lg:text-left md:text-left '>
            <p className='text-[#fff] text-lg font-semibold mt-10 lg:mt-0 md:mt-0 ' >Quick Links</p>
            <ul>
                <li className='text-[#fff] my-3 '>Discussion</li>
                <li className='text-[#fff] my-3 '>Careers</li>
                <li className='text-[#fff] my-3 '>Categories</li>
                <li className='text-[#fff] my-3 '>Support</li>
                <li className='text-[#fff] my-3 '>Course FAQ’s</li>
                <li className='text-[#fff] my-3 '>Privacy Policy</li>
                <li className='text-[#fff] my-3 '>Customer Support</li>
                <li className='text-[#fff] my-3 '>Customer Support</li>
             
            </ul>
        </div>
        <div className='text-center lg:text-left md:text-left '>
            <p  className='text-[#fff] text-lg font-semibold mt-10 lg:mt-0 md:mt-0'>catagory</p>
            <ul>
                <li className='text-[#fff] my-3'>Design</li>
                <li className='text-[#fff] my-3'>Drupal</li>
                <li className='text-[#fff] my-3'>Javasript</li>
                <li className='text-[#fff] my-3'>Joomla</li>
                <li className='text-[#fff] my-3'>Magento</li>
                <li className='text-[#fff] my-3'>Wordpress</li>
            </ul>
        </div>

    </div>
 </div>
   </>
  )
}

export default Footer