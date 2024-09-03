import React from 'react';
import { Link } from 'react-router-dom';
function Footer() {
    const isActive = (path) => location.pathname === path;
    return ( 
        <div className=""> 
            <hr className="w-auto h-1  my-4 border-0 rounded md:my-10 dark:bg-shopee "/>
            <div className="bg-white shadow-md">
                <div className="justify-center items-center flex flex-col  min-h-screen pace-y-7 ">
                    <div className=""> 
                        <h1 className="text-zinc-500 font-bold ">Buy and Sell Online on Shopee Philippines</h1>
                        <p className="text-gray-800 font-thin text-[17px] ">Shopee is a fun, free, and trusted way to buy and sell instantly online. 
                            We are a leading mobile-first marketplace platform in Southeast Asia Singapore, Malaysia, Thailand, Indonesia, Vietnam, the Philippines, Taiwan, Brazil, Mexico, Colombia, and Chile.
                            Join millions of others on Shopee to list products and shop for deals online. Doing your Shopee online shopping is safe and we make sure of it. Get the item you ordered or get your money back with Shopee Guarantee. 
                            Create and browse listings for free, at no extra charge. Join our Shopee community and start shopping today!</p>
                    </div>
                    <div className="space-y-4"> 
                        <h1 className="text-zinc-500 font-bold ">Experience a Shopping Spree of a Lifetime on Shopee</h1>
                        <p className="text-gray-800 font-thin text-[17px]  ">Join Shopee to find everything you need at the best prices. 
                            Doing your Shopee online shopping at the Philippines’ best marketplace cannot get any easier. 
                            Shopee is a social marketplace where you can enjoy instant and personalized updates from your friends and favorite community members. 
                            If you spot great products or deals while you’re doing your Shopee online shopping, Shopee enables you to share these deals with your friends via a simple tap.
                        </p>
                        <p className="text-gray-800 font-thin text-[17px] ">Buy the products you want in a worry-free manner. Refer to shop ratings and reviews to find trusted sellers easily. 
                            We value our safe online marketplace! With Shopee Guarantee, you can get your money back if you did not get what you ordered. 
                            Take note of your Shopee Guarantee period so that you can choose to extend it if the seller has not shipped your product or if you want to request a return or refund. 
                            Shopee Guarantee is here to ensure that you have a fun shopping experience. You can rest easy knowing that Shopee Guarantee has your back! 
                        </p>
                        <p className="text-gray-800 font-thin text-[17px] ">Not sure what to buy? Our new hashtags allow you to stay up-to-date with trending products. 
                            Browse effortlessly through our product categories including jewelry from women's accessories like necklaces that are perfect gifts for moms. 
                            Mobiles for your dad that you can find in mobiles and gadgets. Get fan-favorite mobile phones like Poco F3, Poco X3 Pro, Redmi Note 11, and Realme C35. 
                            Then amp up the music in your phone with volume master! Look for the best stroller for your newborn, and surprise the kids with new toys, games & collectibles. 
                            Buy your sister the most volumizing or lengthening mascara or hair tie. You can never go wrong with buying a cap for your brother. 
                            Purchase flowers and plants that your aunt and uncle or grandparents will surely love! Start your fitness journey with exercise and fitness equipment and get health and personal care items too like Gloxi and more! 
                            Show love to your little pet by giving it the best pet essentials from Shopee’s wide array of pet care items and many more! Spruce up your home with products inspired by Ikea Philippines and other amazing home and living brands. 
                            Find trending Youtube products on Shopee Philippines too!  
                        </p>
                        <p className="text-gray-800 font-thin text-[17px] ">Eager to find out what's trending? Shopee has all the latest trending products, including Piso Wifi which is all the rage nowadays! Find out what the buzz is all about and discover the wonders of Piso Wifi. While shopping, use our smart search or look through a range of personalized recommendations to find the perfect buy. 
                            Plus, enjoy additional benefits such as free shipping for selected products. Start shopping on Shopee now! 
                        </p>
                        <p className="text-gray-800 font-thin text-[17px] ">So what are you waiting for? Open your Shopee app or visit the Shopee website and get on with your shopping!</p>
                    </div>
                    <div>
                        <h1 className="text-zinc-500 font-bold ">Enjoy Special Deals, Sales, Promos, and Discounts on Shopee Philippines </h1>
                        <p className="text-gray-800 font-thin text-[17px] ">Doing your Shopee online shopping is not only easy and safe, but it’s also tons of fun. Enjoy big sales like the 9.9 Super Shopping Day and the 11.11 Christmas Sale to score the biggest and best discounts and special prices on your favorite products. Treat yourself during payday with Shopee’s Payday Sale on the 15th and 30th of every month. 
                            With special promotions from shops such as Shopee’s free shipping vouchers, deals, and flash sales, to weekly offers - you’re sure to become a true Shopeeholic. 
                            Catch the Shopee fever with regular deals on your favorite categories only on Shopee Philippines! Download the app on your mobile phone now. 
                            If you’re new to the Shopee fam, you get the chance to enjoy Shopee New User vouchers too! Shopee New User vouchers are the perfect way to welcome you into your favorite shopping destination. 
                            This is your sign to create a Shopee account and start shopping on the Shopee website or Shopee app! Don’t miss out on the amazing sales with affordable prices that are waiting for you! </p>
                    </div>
                    <div>
                        <h1 className="text-zinc-500 font-bold ">Get Free Shipping on Shopee</h1>
                        <p className="text-gray-800 font-thin text-[17px] ">Aside from Shopee New User vouchers, you can also enjoy Shopee’s free shipping vouchers today! For buyers, shop to your heart’s content and enjoy lower prices for your purchases with the help of Shopee’s free shipping vouchers.
                        Make sure to keep an eye out for Shopee’s free shipping vouchers so you can say goodbye to added delivery fees! You don’t have to worry about the price going up because of shipping. Selling can’t get any easier on Shopee. 
                        </p>
                    </div>
                </div>
            </div>
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
