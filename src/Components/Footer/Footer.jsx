import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black mb-0 mt-[80px]'>
            <div className='max-w-11/12 mx-auto'>
                <footer className="p-10 mx-auto flex justify-between items-start">
                    <nav className='flex flex-col gap-3 max-w-[350px] m-0 p-0'>
                        <h6 className="text-white">CS — Ticket System</h6>
                        <p className='text-[#A1A1AA]'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </nav>
                    <nav className='flex flex-col gap-3 m-0 p-0'>
                        <h6 className="text-white">Company</h6>
                        <a className="link link-hover text-[#A1A1AA]">About Us</a>
                        <a className="link link-hover text-[#A1A1AA]">Our Mission</a>
                        <a className="link link-hover text-[#A1A1AA]">Contact Saled</a>
                    </nav>
                    <nav className='flex flex-col gap-3 m-0 p-0'>
                        <h6 className="text-white">Services</h6>
                        <a className="link link-hover text-[#A1A1AA]">Products & Services</a>
                        <a className="link link-hover text-[#A1A1AA]">Customer Stories</a>
                        <a className="link link-hover text-[#A1A1AA]">Download Apps</a>
                    </nav>
                    <nav className='flex flex-col gap-3 m-0 p-0'>
                        <h6 className="text-white">Information</h6>
                        <a className="link link-hover text-[#A1A1AA]">Privacy Policy</a>
                        <a className="link link-hover text-[#A1A1AA]">Terms & Conditions</a>
                        <a className="link link-hover text-[#A1A1AA]">Join Us</a>
                    </nav>
                    <nav className='flex flex-col gap-3 m-0 p-0'>
                        <h6 className="text-white">Social Links</h6>
                        <a className="link link-hover text-[#A1A1AA]"><i class="fa-brands fa-x-twitter"></i> @CS — Ticket System</a>
                        <a className="link link-hover text-[#A1A1AA]"><i class="fa-brands fa-linkedin"></i> @CS — Ticket System</a>
                        <a className="link link-hover text-[#A1A1AA]"><i class="fa-brands fa-facebook"></i> @CS — Ticket System</a>
                        <a className="link link-hover text-[#A1A1AA]"><i class="fa-regular fa-envelope"></i> support@cst.com</a>
                    </nav>
                </footer>
                <hr />
                <footer className="footer sm:footer-horizontal footer-center text-[#FAFAFA] p-4 text-base border-t-0.5 border-[#E5E7EB] max-w-11/12">
                    <aside>
                        <p>© {new Date().getFullYear()} CS — Ticket System. All rights reserved.</p>
                    </aside>
                </footer>
            </div>
        </div>
    );
};

export default Footer;