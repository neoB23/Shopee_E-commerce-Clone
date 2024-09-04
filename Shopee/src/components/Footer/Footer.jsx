import React from 'react';
import { Link } from 'react-router-dom';
function Footer() {
    const isActive = (path) => location.pathname === path;
    return ( 
        <div className=""> 
            <div className="">
                <div className="flex flex-col md:flex-row p-4 space-y-6 md:space-y-0 md:space-x-10 justify-center">
                    {/* Customer Service Section */}
                    <div className="flex flex-col space-y-2">
                    <h1 className="font-bold text-gray-900 text-[12px] p-2">CUSTOMER SERVICE</h1>
                    <CustomLink href="/" className="text-gray-500 text-[14px]">Help Centre</CustomLink>
                    <CustomLink href="/"className="text-gray-500 text-[14px]">How to Buy</CustomLink>
                    <CustomLink href="/"className="text-gray-500 text-[14px]">Shipping & Delivery</CustomLink>
                    <CustomLink href="/"className="text-gray-500 text-[14px]">Returns & Refunds</CustomLink>
                    <CustomLink href="/"className="text-gray-500 text-[14px]">Order Status</CustomLink>
                    <CustomLink href="/"className="text-gray-500 text-[14px]">Payment Options</CustomLink>
                    <CustomLink href="/"className="text-gray-500 text-[14px]">Contact Us</CustomLink>
                    </div>
                    {/* About Shopee Section */}
                    <div className="flex flex-col space-y-2">
                    <h1 className="font-bold text-gray-900 text-[12px] p-2">ABOUT SHOPEE</h1>
                    <CustomLink href="/"className="text-gray-500 text-[14px]">About Us</CustomLink>
                    <CustomLink href="/"className="text-gray-500 text-[14px]">Careers</CustomLink>
                    <CustomLink href="/"className="text-gray-500 text-[14px]">Shopee Blog</CustomLink>
                    <CustomLink href="/"className="text-gray-500 text-[14px]">Privacy Policy</CustomLink>
                    <CustomLink href="/"className="text-gray-500 text-[14px]">Terms & Conditions</CustomLink>
                    <CustomLink href="/"className="text-gray-500 text-[14px]">Shopee Coins</CustomLink>
                    <CustomLink href="/"className="text-gray-500 text-[14px]">Shopee Mall</CustomLink>
                    <CustomLink href="/"className="text-gray-500 text-[14px]">Shopee Affiliate Program</CustomLink>
                    </div>
                    <div>
                        <h1 className="font-bold text-gray-900 text-[12px] p-2">PAYMENT</h1>
                            <ul className="grid grid-cols-3 gap-4">
                            <li className="bg-white p-1 rounded shadow-md"><img src="images/payment1.png"/></li>
                            <li className="bg-white p-1 rounded shadow-md"><img src="images/payment2.png"/></li>
                            <li className="bg-white p-1 rounded shadow-md"><img src="images/payment3.png"/></li>
                            <li className="bg-white p-1 rounded shadow-md"><img src="images/payment4.png"/></li>
                            <li className="bg-white p-1 rounded shadow-md"><img src="images/payment5.png"/></li>
                            <li className="bg-white p-1 rounded shadow-md"><img src="images/payment6.png"/></li>
                            <li className="bg-white p-1 rounded shadow-md"><img src="images/payment7.png"/></li>
                            <li className="bg-white p-1 rounded shadow-md"><img src="images/payment8.png"/></li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="font-bold text-gray-900 text-[12px] p-2">LOGISTICS</h1>
                        <ul class="grid grid-cols-3 gap-4">
                            <li className="bg-white p-1 rounded shadow-md"><img src="images/logistics1.png" /></li>
                            <li className="bg-white p-1 rounded shadow-md"><img src="images/logistics2.png" /></li>
                            <li className="bg-white p-1 rounded shadow-md"><img src="images/logistics3.png" /></li>
                            <li className="bg-white p-1 rounded shadow-md"><img src="images/logistics4.png" /></li>
                            <li className="bg-white p-1 rounded shadow-md"><img src="images/logistics5.png" /></li>
                            <li className="bg-white p-1 rounded shadow-md"><img src="images/logistics6.png" /></li>
                        </ul>
                        </div>
                        <div className="">
                            <h1 className="font-bold text-gray-900 text-[12px] p-2">FOLLOW US</h1>
                            <div className="flex items-center space-x-2">
                                <img src="images/social1.png" alt="Facebook" />
                                <CustomLink href="/" className="text-gray-600 text-[14px]" >Facebook</CustomLink>
                            </div>
                            <div className="flex items-center space-x-2">
                                <img src="images/social2.png" alt="Instagram" />
                                <CustomLink href="/" className="text-gray-600 text-[14px]" >Instagram</CustomLink>
                            </div>
                            <div className="flex items-center space-x-2">
                                <img src="images/social3.png" alt="Twitter" />
                                <CustomLink href="/" className="text-gray-600 text-[14px]" >Twitter</CustomLink>
                            </div>
                            <div className="flex items-center space-x-2">
                                <img src="images/social4.png" alt="LinkedIn" />
                                <CustomLink href="/" className="text-gray-600 text-[14px]" >LinkedIn</CustomLink>
                            </div>
                        </div>
                        <div>
                            <h1 className="font-bold text-gray-900 text-[12px] p-2">SHOPEE APP DOWNLOAD</h1>
                            <ul className="flex items-start">
                                <li>
                                <CustomLink href="/">
                                    <img src="images/qr.png" alt="QR Code" className="bg-white p-1 rounded shadow-md" />
                                </CustomLink>
                                </li>
                                <div className="flex flex-col space-y-2 ml-4">
                                <li>
                                    <CustomLink href="/">
                                    <img src="images/download1.png" alt="Download 1" className="bg-white p-1 rounded shadow-md" />
                                    </CustomLink>
                                </li>
                                <li>
                                    <CustomLink href="/">
                                    <img src="images/download2.png" alt="Download 2" className="bg-white p-1 rounded shadow-md" />
                                    </CustomLink>
                                </li>
                                <li>
                                    <CustomLink href="/">
                                    <img src="images/download3.png" alt="Download 3" className="bg-white p-1 rounded shadow-md" />
                                    </CustomLink>
                                </li>
                                </div>
                            </ul>
                            </div>
                </div>
                <hr/>
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4 p-4 sm:flex-nowrap sm:flex-row">
                        <div className="text-center sm:text-left">
                            <h1 className="font-bold text-gray-900 text-[12px] p-2">
                            ©2024 Shopee. All Rights Reserved.
                            </h1>
                        </div>
                        <div className="flex flex-wrap justify-center gap-x-2 gap-y-2 sm:flex-nowrap">
                            <h1 className="font-bold text-gray-900 text-[12px]">Country & Region:</h1>
                            <ul className="flex flex-wrap gap-x-3 gap-y-2 sm:flex-nowrap">
                            <li className="text-gray-900 text-[12px]">Singapore</li>
                            <li className="text-gray-900 text-[12px]">Indonesia</li>
                            <li className="text-gray-900 text-[12px]">Thailand</li>
                            <li className="text-gray-900 text-[12px]">Malaysia</li>
                            <li className="text-gray-900 text-[12px]">Vietnam</li>
                            <li className="text-gray-900 text-[12px]">Philippines</li>
                            <li className="text-gray-900 text-[12px]">Brazil</li>
                            <li className="text-gray-900 text-[12px]">Mexico</li>
                            <li className="text-gray-900 text-[12px]">Colombia</li>
                            <li className="text-gray-900 text-[12px]">Chile</li>
                            <li className="text-gray-900 text-[12px]">Taiwan</li>
                            </ul>
                        </div>
                    </div>
            </div>
        </div>
    );
}
function CustomLink({ href, children, ...props }) {
    return (
        <Link to={href} {...props}> {children} </Link>
    );
}
export default Footer;
