import React, { useState } from 'react';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdCheck } from "react-icons/md";
import hello1 from './../Assets/Images/hello1.jpg';
import hello2 from './../Assets/Images/hello2.jpg';
import hello3 from './../Assets/Images/hello3.jpg';

function CustomRadio({ checked, onChange}) {
  return (
    <div className={`flex items-center justify-center w-6 h-6 rounded-full border border-gray-300 cursor-pointer ${checked ? 'bg-pink-500' : ''}`} onClick={onChange}>
      {checked && <MdCheck className="text-white w-4 h-4" />}
    </div>
  );
}

function Hello({ onClick, onReturn}) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(item => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div className='w-full'>
      <div className='w-full flex gap-12 mt-6 items-center'>
        <span className="text-3xl tracking-[2px] text-pink-600 font-custom ml-6" id="logo">dribbble</span>
        <span className="text-lg bg-gray-100 p-2 rounded-lg text-gray-500 "><MdKeyboardArrowLeft /></span>
      </div>
      <div className='w-[65%] mx-auto flex flex-col md:mt-0 mt-12 items-center'>
        <span className='text-[38px] font-bold text-center'>What brings you to Dribbble?</span>
        <span className='text-md text-gray-400 mt-1 text-center'>Select the options that best describe you. Don't worry you can explore other options later.</span>
        <div className='flex md:flex-row flex-col md:mt-[8%] mt-12 w-full justify-between md:space-y-0 space-y-20'>

          <div className={`flex flex-col border items-center md:w-[30%] md:h-[240px] p-5 rounded-lg ${selectedOptions.includes(1) ? 'border-2 border-pink-500' : ''}`}>
            <div className={`w-[160px] h-[110px] ${selectedOptions.includes(1) ? '-mt-[30%]' : 'mt-2'}`}>
              <img src={hello1} alt="sample_img" className="w-full h-full" />
            </div>
            <div className='flex flex-col items-center mt-2'>
              <span className='text-center font-bold mb-3'>I'm a designer looking to share my work.</span>
              {selectedOptions.includes(1) &&
                <p className='text-gray-500 text-center text-xs mt-2 mb-3'>With over 7 million shots from a vast community of designers, Dribbble is the leading source of design inspiration</p>
              }
              <CustomRadio checked={selectedOptions.includes(1)} onChange={() => handleOptionChange(1)} />
            </div>
          </div>

          <div className={`flex flex-col border items-center md:w-[30%] md:h-[240px] p-5 rounded-lg ${selectedOptions.includes(2) ? 'border-2 border-pink-500' : ''}`} onClick={() => handleOptionChange(2)}>
            <div className={`w-[160px] h-[110px] ${selectedOptions.includes(2) ? '-mt-[30%]' : 'mt-2'}`}>
              <img src={hello2} alt="sample_img" className="w-full h-full" />
            </div>
            <div className='flex flex-col items-center mt-2'>
              <span className='text-center font-bold mb-3'>I'm looking to hire a designer designer</span>
              {selectedOptions.includes(2) &&
                <p className='text-gray-500 text-center text-xs mt-2 mb-3'>With over 7 million shots from a vast community of designers, Dribbble is the leading source of design inspiration</p>
              }
              <CustomRadio checked={selectedOptions.includes(2)} onChange={() => handleOptionChange(2)} />
            </div>
          </div>

          <div className={`flex flex-col border items-center md:w-[30%] md:h-[240px] p-5 rounded-lg ${selectedOptions.includes(3) ? 'border-2 border-pink-500' : ''}`} onClick={() => handleOptionChange(3)}>
            <div className={`w-[160px] h-[110px] ${selectedOptions.includes(3) ? '-mt-[30%]' : 'mt-2'}`}>
              <img src={hello3} alt="sample_img" className="w-full h-full" />
            </div>
            <div className='flex flex-col items-center mt-2'>
              <span className='text-center font-bold mb-3'>I'm looking for design inspiration</span>
              {selectedOptions.includes(3) &&
                <p className='text-gray-500 text-center text-xs mt-2 mb-3'>With over 7 million shots from a vast community of designers, Dribbble is the leading source of design inspiration</p>
              }
              <CustomRadio checked={selectedOptions.includes(3)} onChange={() => handleOptionChange(3)} />
            </div>
          </div>
        </div>
        {selectedOptions.length > 0 ? (
          <>
            <span className='font-bold mt-10 text-center'>Anything else? You can select multiple</span>
            <button className='mt-5 bg-pink-500 text-white pt-2 pb-2 w-[30%] rounded-lg' onClick={onClick}>Finish</button>
            <span className='font-bold text-sm text-center text-gray-400 mt-2 cursor-pointer' onClick={onReturn}>or Press <span className='text-md'>RETURN</span></span>
          </>
        ) : (
          <button className='bg-pink-300 text-white pt-2 pb-2 mt-10 w-[30%] rounded-lg cursor-not-allowed' onClick={onClick} disabled>Finish</button>
        )}
      </div>
    </div>
  );
}

export default Hello;
