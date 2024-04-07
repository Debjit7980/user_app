import React, { useState } from 'react';
import image1 from './../Assets/Images/signup.jpg';
import { IoWarning } from "react-icons/io5";

function Signup({ onClick }) {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const[email,setEmail]=useState('');
    const [pass,setPass]=useState('');
    const [agreed, setAgreed] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [showPassMessage, setShowPassMessage] = useState(false);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
        if (event.target.value === name) {
            setShowMessage(true);
        } else {
            setShowMessage(false);
        }
    };

    const handleEmailChange=(event)=>{
        setEmail(event.target.value)
    }

    const handlePassChange = (event) => {
        setPass(event.target.value);
    };
    
    const handlePassBlur = () => {
        if (pass.length < 6) {
            setShowPassMessage(true);
        }
        else{
            setShowPassMessage(false);
        }
    };
    
    const handleCheckboxChange = () => {
        setAgreed(!agreed);
    };

    return (
        <div className='flex w-full h-screen md:fixed relative md:m-0'>
            <div className='md:w-[33%] w-[100%] object-fill  h-screen'>
                <img src={image1} alt="image1" className='w-full h-full' />
            </div>
            <div className='md:w-[45%] w-[80%] absolute md:relative left-[10%] md:left-0 text-white md:text-black md:bg-white bg-black md:opacity-100 opacity-[80%] md:p-0 p-6 top-[15%] md:top-6 md:mx-auto'>
                <span className='md:absolute md:top-0 md:-right-[20%] text-md'>Already a member? <span className='text-blue-600'>Sign In</span></span>
                <div className='flex flex-col  ml-0  md:mx-auto w-full md:w-[70%]'>
                    <span className='text-2xl pt-12 font-bold mr-auto '>Sign up to Dribbble</span>
                    {showMessage && <span className='text-red-500 text-md font-bold mt-4'><li>Username has already been taken</li></span>}
                    <div className='flex mt-10 text-md md:flex-row flex-col md:gap-0 gap-7 w-full justify-between '>
                        <span className='flex flex-col md:w-[45%] w-full'>
                            <span className='mr-auto font-bold'>Name</span>
                            <input
                                type='text'
                                className='outline-0  rounded-lg p-2 bg-gray-200 text-black'
                                value={name}
                                onChange={handleNameChange}
                            />
                        </span>
                        <span className='flex flex-col md:w-[45%] w-full'>
                            <span className='mr-auto font-bold flex gap-2'>{showMessage && <IoWarning className='text-xl text-red-500' />}Username</span>
                            <input
                                type='text'
                                className={`outline-0 rounded-lg p-2 ${showMessage? 'bg-pink-100 text-red-500':'bg-gray-200'}`}
                                value={username}
                                onChange={handleUsernameChange}
                               
                            />
                        </span>
                    </div>
                    <span className='text-md font-bold mr-auto mt-8'>Email</span>
                    <input type="email" className='outline-0 p-2 bg-gray-200 rounded-lg' 
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <span className='text-md font-bold mr-auto mt-8'>Password</span>
                    <input type="password" placeholder="6+ characters" className='outline-0  placeholder-gray-500 p-2 bg-gray-200 rounded-lg'
                        value={pass}
                        onChange={handlePassChange}
                        onBlur={handlePassBlur}
                    />
                    {showPassMessage && <span className='text-red-500 text-md font-bold mt-4'><li>Password minimum length must be 6 characters long</li></span>}
                    <div className='mt-6 flex'>
                        <input type="checkbox" className='mb-auto h-6 w-6'
                            checked={agreed}
                            onChange={handleCheckboxChange}
                        />
                        <span className='text-sm ml-2 text-gray-500'>Creating an account means you're okay with our <span className='text-blue-600'>Terms of Service, Privacy Policy</span> and our default <span className='text-blue-600'>Notification Settings</span>.</span>
                    </div>
                   {!showMessage && name && username && email && pass && agreed ? (
                        <button className='bg-pink-500 text-white pt-2 pb-2 mt-7 md:w-[40%] w-full  rounded-lg font-bold' onClick={onClick}>Create Account</button>
                   ):(
                        <button className='bg-pink-300 text-white pt-2 pb-2 mt-7 md:w-[40%] w-full rounded-lg font-bold' disabled>Create Account</button>
                   )}
                    <span className='text-xs text-gray-500 w-[80%] mt-5'>This site is protected by reCAPTCHA and the Google <span className='text-blue-600'>Privacy Policy</span> and <span className='text-blue-600'>Terms of Service</span> apply.</span>
                </div>
            </div>
        </div>
    );
}

export default Signup;
