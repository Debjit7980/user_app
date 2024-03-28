import React from 'react'
import one from './../Assets/Images/1.jpg';
import two from './../Assets/Images/2.jpg';
import three from './../Assets/Images/3.jpg';
import four from './../Assets/Images/4.jpg';
import add from './../Assets/Images/add.jpg';
import b1 from './../Assets/Images/b2.jpg';
import b2 from './../Assets/Images/b3.jpg';
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
//import { useState } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import './sports.css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

function Sports() {
    const swiperRef = useRef();
    const [isDarkMode, setIsDarkMode] = useState(true); // State for toggling dark mode

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    // const bgColor = isDarkMode ? 'bg-gray-800' : 'bg-white';
    const textColor = isDarkMode ? 'text-white' : 'text-black';
    //const bgColorsToWhite = ['bg-gray-900','bg-gray-700', 'bg-gray-600', /* Add more colors as needed */];
    //const updatedBgColor = bgColorsToWhite.includes(bgColor) ? 'bg-white' : bgColor;
    const reviews = [
        {
            id: 1,
            image: b1,
            name: "Las Vegas Aviators",
            date: "OCT 15",
            day: "SUN",
            time: "4:30 PM",
            desc: "Las Vegas Balpark, Las Vegas, Nevada",
            ticket: "Take Flight Collection"
        },
        {
            id: 2,
            image: b2,
            name: "Sacramento River Cats",
            date: "OCT 15",
            day: "SUN",
            time: "4:30 PM",
            desc: "Sutter Health Park, Sacramento, California",
            ticket: "Orange Collection"

        },
        {
            id: 3,
            image: b1,
            name: "Las Vegas Aviators",
            date: "OCT 15",
            day: "SUN",
            time: "4:30 PM",
            desc: "Las Vegas Balpark, Las Vegas, Nevada",
            ticket: "Take Flight Collection"

        },
        {
            id: 4,
            image: b2,
            name: "Sacramento River Cats",
            date: "OCT 15",
            day: "SUN",
            time: "4:30 PM",
            desc: "Sutter Health Park, Sacramento, California",
            ticket: "Orange Collection"
        },
        {
            id: 4,
            image: b1,
            name: "Las Vegas Aviators",
            date: "OCT 15",
            day: "SUN",
            time: "4:30 PM",
            desc: "Las Vegas Balpark, Las Vegas, Nevada",
            ticket: "Take Flight Collection"
        },
        {
            id: 4,
            image: b2,
            name: "Sacramento River Cats",
            date: "OCT 15",
            day: "SUN",
            time: "4:30 PM",
            desc: "Sutter Health Park, Sacramento, California",
            ticket: "Orange Collection"
        }]

    return (
        <div className="h-full w-[100%] p-2" style={{ backgroundColor: isDarkMode ? '#292B32' : 'rgba(247, 247, 248, 1)' }}>
            <div className='absolute right-[3%] top-[3%]'>
                <button onClick={toggleDarkMode} className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} ${textColor} px-4 py-2 rounded-md border border-gray-400 transition-colors duration-300`}>
                    {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
            </div>
            <style>
                {`
                ::-webkit-scrollbar {
                    width: 7px;
                }
                ::-webkit-scrollbar-track {
                    background-color: #1F2937;
                    
                }
                ::-webkit-scrollbar-thumb {
                    background-color: #374151;
                    border-radius: 10px;
                }
                ::-webkit-scrollbar-thumb:hover {
                    background: #1F2970;
                }
                `}
            </style>
            <div className='md:w-[1249px] w-[90%] mx-auto mt-12 font-inter'>
                <span className={`${textColor} text-2xl border-[#738FFF] border-b-2`}>Sports</span>
                <div className='flex md:flex-row flex-col md:gap-5 gap-12 w-100  mt-10'>

                    <div className={`md:w-[237px] w-[70%] ${isDarkMode ? 'bg-gray-700' : 'bg-white'} p-2 md:m-0 mx-auto`} style={{ boxShadow: isDarkMode ? '0px 0px 20px black' : '0px 0px 20px gray' }}>
                        <div>
                            <img src={one} alt="one" className='md:h-[360px] h-[400px]' />
                        </div>
                        <div className='pt-2'>
                            <span className={`${textColor} md:text-[16px] text-[20px]`}>Sacramento River Cats</span>
                            <div className={`p-2 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}  mt-2 flex  ${textColor}`}>
                                <div className='flex flex-col'><span className={`md:text-[12px] text-[15px] text-[#525965]`}>Total Events</span><span className='md:text-[14px] text-[17px]'>48 Events</span></div>
                                <div className='flex flex-col ml-auto'><span className='md:text-[12px] text-[15px] text-[#525965]'>Sport</span><span className='md:text-[14px] text-[17px]'>Baseball</span></div>
                            </div>
                        </div>
                    </div>
                    <div className={`md:w-[237px] w-[70%] ${isDarkMode ? 'bg-gray-700' : 'bg-white'} p-2 md:m-0 mx-auto`} style={{ boxShadow: isDarkMode ? '0px 0px 20px black' : '0px 0px 20px gray' }}>
                        <div>
                            <img src={two} alt="one" className='md:h-[360px] h-[400px] w-full' />
                        </div>
                        <div className='pt-2'>
                            <span className={`${textColor} md:text-[16px] text-[20px] text`}>Las Vegas Aviators</span>
                            <div className={`p-2 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}  mt-2 flex gap-4  ${textColor}`}>
                                <div className='flex flex-col'><span className='md:text-[12px] text-[15px] text-[#525965]'>Total Events</span><span className='md:text-[14px] text-[17px]'>28 Events</span></div>
                                <div className='flex flex-col ml-auto'><span className='md:text-[12px] text-[15px] text-[#525965]'>Sport</span><span className='md:text-[14px] text-[17px]'>Baseball</span></div>
                            </div>
                        </div>

                    </div>

                    <div className={`md:w-[237px] w-[70%] ${isDarkMode ? 'bg-gray-700' : 'bg-white'} p-2 md:m-0 mx-auto`} style={{ boxShadow: isDarkMode ? '0px 0px 20px black' : '0px 0px 20px gray' }}>
                        <div>
                            <img src={three} alt="one" className='md:h-[360px] h-[400px]' />
                        </div>
                        <div className='pt-2'>
                            <span className={`${textColor} md:text-[16px] text-[20px]`}>New Jersey Devils</span>
                            <div className={`p-2 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} gap-4  mt-2 flex  ${textColor}`}>
                                <div className='flex flex-col'><span className='md:text-[12px] text-[15px] text-[#525965]'>Total Events</span><span className='md:text-[14px] text-[17px]'>15 Events</span></div>
                                <div className='flex flex-col ml-auto'><span className='md:text-[12px] text-[15px] text-[#525965]'>Sport</span><span className='md:text-[14px] text-[17px]'>Ice Hockey</span></div>
                            </div>
                        </div>

                    </div>
                    <div className={`md:w-[237px] w-[70%] ${isDarkMode ? 'bg-gray-700' : 'bg-white'} p-2 md:m-0 mx-auto`} style={{ boxShadow: isDarkMode ? '0px 0px 20px black' : '0px 0px 20px gray' }}>
                        <div>
                            <img src={four} alt="one" className='md:h-[360px] h-[400px]' />
                        </div>
                        <div className='pt-2'>
                            <span className={`${textColor} md:text-[16px] text-[20px]`}>Las Vegas Aviators</span>
                            <div className={`p-2 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}  gap-4 mt-2 flex  ${textColor}`}>
                                <div className='flex flex-col'><span className='md:text-[12px] text-[15px] text-[#525965]'>Total Events</span><span className='md:text-[14px] text-[17px]'>28 Events</span></div>
                                <div className='flex flex-col ml-auto'><span className='md:text-[12px] text-[15px] text-[#525965]'>Sport</span><span className='md:text-[14px] text-[17px]'>Baseball</span></div>
                            </div>
                        </div>

                    </div>
                    <div className={`md:w-[237px] w-[70%] ${isDarkMode ? 'bg-gray-700' : 'bg-white'} p-2 md:m-0 mx-auto`} style={{ boxShadow: isDarkMode ? '0px 0px 20px black' : '0px 0px 20px gray' }}>
                        <div className='relative'>
                            <img src={add} alt="one" className='md:h-[180px] h-[240px] w-full' />
                            <span className='absolute top-0 right-0 p-2 text-sm bg-black text-white'>Ad</span>
                        </div>
                        <div className='p-2  text-white'>
                            <span className={`${textColor} text-lg font-bold`}>Advertisement title</span>
                            <p className={`${textColor} mt-4 md:text-[14px] text-[18px]`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nobis ipsum perspiciatis consequatur sed? Optio nam quo maxime illum quasi et esse asperiores porro cupiditate consequuntur quis tempore, nostrum molestias.</p>
                        </div>
                    </div>
                </div>
                <div className='mt-16 w-[124.8px] mx-auto'>
                    <button className='pt-[10px] pb-[10px] pl-[30px] pr-[30px] text-[14px] text-[14px] bg-[#2C9CF0] text-white rounded-md w-full'>See More</button>
                </div>
            </div>
            <div className="md:w-[1240px] w-[92%] mx-auto mt-14 pb-8 mb-12 relative" style={{ background: isDarkMode ? 'linear-gradient(to top, #221A2C, #18282A)' : 'rgba(247, 247, 248, 1)' }}>

                <div className={`${textColor} pt-12 text-center pb-20 w-[80%] mx-auto`}>
                    <span className='text-5xl font-bold'>Collection Spotlight</span>
                    <p className='text-[18px] mt-10'>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
                </div>
                <div className='md:w-[850px] w-[86%]  mx-auto relative'>
                    <Swiper
                        
                        loop={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 1,
                            },
                        }}
                        modules={[Navigation, Pagination, Autoplay]}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}

                    >
                        {
                            reviews.map((value) => {
                                const { id, image, name, date, day, time, desc, ticket } = value;
                                // console.log(name.split(' '))
                                return <SwiperSlide key={id}>
                                    <div className={` w-[257px] h-[625px]  mx-auto ${textColor} relative mb-12 z-10 `}>
                                        <div className={`box-2 pt-3 pb-8 pl-1 pr-1 ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
                                            <img src={image} alt="userImage" className="md:h-[401px] md:w-[226.1px] h-[340px] w-[94%] mx-auto " />
                                        </div>
                                        <div className={`box w-[100%] flex flex-col gap-4 p-4  text-center relative ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`} >
                                            <div className=' h-0 border-t-2 border-gray-500 border-dashed w-[84%]  absolute top-0 left-5 '></div>
                                            <span className='text-[18px] tracking-wide'>{name}</span>
                                            <span className='text-[14px]'>{date} | {day} | {time}</span>
                                            <span className='text-[14px] text-[#DFDFDF]'>{desc}</span>
                                            <span className='bg-black p-2 text-center text-white w-[90%] mx-auto'>{ticket}</span>
                                        </div>
                                    </div>
                                    <div className='absolute w-[86%] left-5  h-[420px]  top-[0%]' style={{ boxShadow: isDarkMode ? '0px 0px 20px black' : '0px 20px 22px darkgray'}}></div>
                                    <div className='absolute w-[86%] left-5  h-[180px]  top-[68%]' style={{ boxShadow: isDarkMode ? '0px 0px 20px black' : '0px 20px 22px darkgray'}}></div>
                                </SwiperSlide>
                            })
                        }

                    </Swiper>
                    <div className='absolute h-[49px] w-[1052px] -left-[12%]  top-[50%]  flex   justify-between '>
                        <button onClick={() => swiperRef.current?.slidePrev()} className="text-3xl pt-2 pb-2 text-blue-600 border border-blue-600"><MdKeyboardArrowLeft /></button>
                        <button onClick={() => swiperRef.current?.slideNext()} className="text-3xl pt-2 pb-2 text-blue-600 border border-blue-600"><MdKeyboardArrowRight /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sports
