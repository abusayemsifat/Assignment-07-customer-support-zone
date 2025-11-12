import React from 'react';
import img1 from '../../assets/vector1.png'

const HeroSection = ({taskStatus, resolvedTasks}) => {
    console.log(resolvedTasks)
    return (
        <div className='max-w-11/12 lg:flex justify-between items-center mx-auto my-20 max-sm:flex-col max-sm:gap-4'>
            <div className='w-[850px] h-[300px] flex bg-linear-[78deg] from-[#632EE3] to-[#9F62F2] text-white rounded-xl text-center relative max-sm:w-[350px] max-sm:h-[200px]'>
                <div className='mx-auto my-auto'>
                    <p className='text-2xl'>In-Progress</p>
                    <h1 className='text-6xl font-semibold mt-4'>{taskStatus.length}</h1>
                </div>
                <div className='absolute inset-0 flex items-center justify-between w-full'>
                    <img src={img1} alt="" className='w-full object-center'/>
                    <img src={img1} alt="" className='w-full object-center scale-x-[-1] hidden md:block'/>
                </div>
            </div>

            <div className='w-[850px] h-[300px] flex bg-gradient-to-r from-[#54CF68] to-[#00827A] text-white rounded-xl text-center relative max-sm:w-[350px] max-sm:h-[200px]'>
                <div className='mx-auto my-auto'>
                    <p className='text-2xl'>Resolved</p>
                    <h1 className='text-6xl font-semibold mt-4'>{resolvedTasks.length}</h1>
                </div>
                <div className='absolute inset-0 flex items-center justify-between w-full'>
                    <img src={img1} alt="" className='w-full object-center'/>
                    <img src={img1} alt="" className='w-full object-center scale-x-[-1] hidden md:block'/>
                </div>
            </div>
        </div>
        
    );
};

export default HeroSection;