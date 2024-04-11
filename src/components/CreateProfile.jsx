import React, { useState } from 'react';
import { BiSolidCameraPlus } from "react-icons/bi";

function CreateProfile({ onClick, onReturn}) {
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        //setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='w-full '>
      <span className="text-3xl tracking-[2px] absolute top-6 left-6 text-pink-600 font-custom" id="logo">dribbble</span>
      <div className='mt-16 flex flex-col md:w-[50%] w-[80%] mx-auto '>
        <span className='md:text-[38px] text-3xl font-bold md:mt-0 mt-12'>Welcome! Let's create your profile</span>
        <span className='text-md text-gray-400 md:mt-2 mt-6'>Let other get to know you better! You can do these later</span>
        <span className='text-xl font-bold mt-10'>Add an avatar</span>
        <div className='w-full mt-5 flex'>
          {imagePreview ? (
            <img src={imagePreview} alt="Avatar Preview" className="w-[140px] h-[146px] rounded-[100px]" />
          ) : (
            <span className='w-[140px] h-[146px]  rounded-[100px] border-2 border-dashed border-gray-400 z-10 relative'><BiSolidCameraPlus className='absolute top-[41%] left-[41%] text-gray-400 text-[23px]'/></span>
          )}
          <div className='flex flex-col ml-6 mt-6'>
            <label htmlFor="fileInput" className="cursor-pointer border-2 p-[6px] font-bold text-sm rounded-lg w-[55%] text-center">Choose image</label>
            <input id="fileInput" type="file" accept="image/*" onChange={handleFileInputChange} className="hidden" />
            <span className='text-gray-400 text-sm mt-2 font-bold'>&gt; Or choose one of our defaults</span>
          </div>
        </div>
        <span className='text-xl font-bold mt-10'>Add your location</span>
        <input type="text"  placeholder="Enter a location" className='outline-0 border-b font-bold p-1 placeholder-gray-400 mt-4'/>
        {imagePreview? (
          <>
            <button className='bg-pink-500 text-white pt-2 pb-2 mt-10 w-[30%] rounded-lg' onClick={onClick}>Next</button>
            <span className='font-bold text-sm md:ml-12 ml-0 text-gray-400 mt-2 cursor-pointer' onClick={onReturn}>or Press <span className='text-md'>RETURN</span></span>
          </>
        
        ): (
          <button className='bg-pink-300 text-white pt-2 pb-2 mt-10 w-[30%] rounded-lg' onClick={onClick} >Next</button>
        ) }
      </div>
    </div>
  );
}

export default CreateProfile;
