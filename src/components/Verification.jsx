import React from 'react';
import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { BiSolidBriefcase } from "react-icons/bi";
import { IoCloseCircle } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import user from './../Assets/Images/user.jpg';
import { CiBasketball } from "react-icons/ci";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

function Verification({ onReturn }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <div className='w-full mb-0 overflow-x-hidden'>
      <div className={`w-full flex md:flex-row flex-col md:gap-10 space-y-5 md:space-y-0 md:mt-6 items-center border-b z-10 relative pb-4 ${isMenuOpen ? ' transform translate-y-[0%] duration-500 bg-gray-200' : 'transform translate-y-[-100%] md:translate-y-0 duration-500'}`}>
        <span className="text-3xl tracking-[2px] text-pink-600 font-custom md:ml-6 md:mt-0 mt-5" id="logo">dribbble</span>
        <span className="text-sm text-gray-500 ">Inspiration</span>
        <span className="text-sm text-gray-500 ">Find Work</span>
        <span className="text-sm text-gray-500 ">Learn Design</span>
        <span className="text-sm text-gray-500 ">Go Pro</span>
        <span className="text-sm text-gray-500 ">Hire Designers</span>
        <div className="relative md:ml-auto ">
          <input type="search" className='bg-gray-100 rounded-lg w-32 p-[8px] pl-8 outline-0' placeholder="Search" />
          <IoSearchSharp className="absolute top-2 left-2 text-gray-400 text-xl flex items-center" />
        </div>
        <span className='text-2xl text-gray-400 md:-ml-[20px] relative'><BiSolidBriefcase /><IoCloseCircle className='absolute -bottom-[2px] -right-[2px] bg-white rounded-full text-gray-500 text-xs' /></span>
        <span className='w-[35px] h-[35px] rounded-full md:-ml-[20px] md:-mr-[20px]'><img src={user} alt="profile" className='w-full h-full rounded-full' /></span>
        <button className='bg-pink-500 text-white p-[8px] text-center rounded-lg w-20 md:mr-6'>Upload</button>
      </div>
      <div className="md:hidden block text-black justify-end " >
          {isMenuOpen ? <span className='absolute left-6 top-6 text-2xl z-20 '><IoClose onClick={toggleMenu} /></span> : <div className='absolute z-20 top-0 left-0 bg-black bg-opacity-40 w-full p-5 flex '><span className=' text-2xl  '><RxHamburgerMenu onClick={toggleMenu} /> </span></div>}
        </div>
      <div className='md:mt-16 -mt-[100%] md:w-[50%] z-0 flex flex-col w-[95%] items-center  mx-auto'>
        <span className='text-[38px] font-bold text-center'>Please verify your email...</span>
        <div className='text-gray-400 md:text-[100px] text-[80px] mt-4  relative '><IoMdMail /><FaCheckCircle className='absolute top-0 p-1 -right-[15px] bg-white text-pink-500 md:text-[40px] text-[30px] rounded-full' /></div>
        <span className='mt-4 text-md text-gray-500 text-center'>Please verify your email address. We've sent a confirmation email to:</span>
        <span className='mt-4 text-md font-bold'>account@refero.design</span>
        <span className='mt-4 text-md text-gray-500 text-center'>Click the confirmation link in that email to begin using dribbble.</span>
        <span className='mt-4 text-md text-gray-500 text-center'>Didn't receive the email? Check your Spam folder, it may have been caught by a filter. If you still don't see it, you can <span className='text-pink-500'>rescend the condirmation email.</span></span>
        <span className='mt-4 text-md text-gray-500'>Wrong email address? <span className='text-pink-500 cursor-pointer' onClick={onReturn}>Change it.</span></span>
      </div>
      <div className='bg-gray-100 flex md:flex-row flex-col w-[full] pt-20 mt-16'>
        <div className='md:ml-12 ml-6 md:w-[20%] w-full text-left'>
          <span className="text-4xl tracking-[2px] text-pink-600 font-custom" id="logo">dribbble</span>
          <p className='text-sm mt-4 tracking-[1px] text-gray-800'>Dribbble is world's leading
            community for creatives to share, grow,
            and get hired.
          </p>
          <div className='md:mt-4 mt-6 flex justify-between text-2xl text-gray-800 w-[70%]'>
            <span><CiBasketball /></span>
            <span><FaTwitter /></span>
            <span><BiLogoFacebookSquare /></span>
            <span><FaInstagram /></span>
            <span><FaPinterest /></span>
          </div>
        </div>
        <div className='text-sm text-gray-700 flex md:flex-row flex-col md:ml-20 md:mt-0 mt-6 ml-6 gap-12'>
          <div className='flex flex-col space-y-4'>
            <span id="bold">For designers</span>
            <span>Go Pro!</span>
            <span>Explore design work</span>
            <span>Design blog</span>
            <span>Overtime podcast</span>
            <span>Playoffs</span>
            <span>Weekly Warm-Up</span>
            <span>Refer a Friend</span>
            <span>Code of conduct</span>
          </div>

          <div className='flex flex-col space-y-4'>
            <span id="bold">Hire designers</span>
            <span>Post a job opening</span>
            <span>Post a freelance project</span>
            <span>Search for designers</span>
            <span id='bold'>Brands</span>
            <span>Advertise with us</span>
          </div>

          <div className='flex flex-col space-y-4'>
            <span id="bold">Company</span>
            <span>About</span>
            <span>careers</span>
            <span>Support</span>
            <span>Media kit</span>
            <span>Testimonials</span>
            <span>API</span>
            <span>Terms of services</span>
            <span>Privacy policy</span>
            <span>Cookie policy</span>
          </div>

          <div className='flex flex-col space-y-4'>
            <span id="bold">Directories</span>
            <span>Design jobs</span>
            <span>Designers for hire</span>
            <span>Freelance designers for hire</span>
            <span>Tags</span>
            <span>Places</span>
            <span id='bold'>Design assets</span>
            <span>Dribbble Marketplace</span>
            <span>Creative Market</span>
            <span>Fontspring</span>
            <span>Font Squirrel</span>
          </div>

          <div className='flex flex-col space-y-4'>
            <span id="bold">Design Resources</span>
            <span>Freelancing</span>
            <span>Design Hiring</span>
            <span>Design Portfolio</span>
            <span>Design Education</span>
            <span>Creative Process</span>
            <span>Design Industry Trends</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Verification;
