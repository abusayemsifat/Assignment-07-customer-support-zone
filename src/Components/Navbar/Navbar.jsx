import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm flex">
                <div className='flex items-center justify-between mx-auto max-w-11/12 w-full py-2 max-sm:flex-col max-sm:gap-2'>
                    <h1 className='text-2xl font-bold'>CS — Ticket System</h1>
                    <div className='flex justify-between items-center gap-8 max-sm:flex-wrap max-sm:gap-3'>
                        <a href="">Home</a>
                        <a href="">FAQ</a>
                        <a href="">Changelog</a>
                        <a href="">Blog</a>
                        <a href="">Download</a>
                        <a href="">Contact</a>
                        <a href="" className='bg-linear-[78deg] from-[#632EE3] to-[#9F62F2] text-white px-4 py-3 rounded-lg font-semibold'>+ New Ticket</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;