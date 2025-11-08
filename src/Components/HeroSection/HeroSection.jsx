import React from 'react';
import img1 from '../../assets/vector1.png'

const HeroSection = () => {
    return (
        <div className='max-w-11/12 flex justify-between items-center mx-auto my-20'>
            <div className='w-[850px] h-[300px] flex bg-linear-[78deg] from-[#632EE3] to-[#9F62F2] text-white rounded-xl text-center relative'>
                <div className='mx-auto my-auto'>
                    <p className='text-2xl'>In-Progress</p>
                    <h1 className='text-6xl font-semibold mt-4'>0</h1>
                </div>
                <div className='absolute inset-0 flex items-center justify-between'>
                    <img src={img1} alt="" className='w-full object-center'/>
                    <img src={img1} alt="" className='w-full object-center scale-x-[-1]'/>
                </div>
            </div>

            <div className='w-[850px] h-[300px] flex bg-gradient-to-r from-[#54CF68] to-[#00827A] text-white rounded-xl text-center relative'>
                <div className='mx-auto my-auto'>
                    <p className='text-2xl'>Resolved</p>
                    <h1 className='text-6xl font-semibold mt-4'>0</h1>
                </div>
                <div className='absolute inset-0 flex items-center justify-between'>
                    <img src={img1} alt="" className='w-full object-center'/>
                    <img src={img1} alt="" className='w-full object-center scale-x-[-1]'/>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;