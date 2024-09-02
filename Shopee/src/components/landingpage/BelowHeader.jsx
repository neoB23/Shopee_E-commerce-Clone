import React from 'react';

function BelowHeader(){
    return(
        <div className="flex flex-col justify-center items-center bg-white">
            <div className="grid grid-cols-2 grid-rows-2 gap-1 p-6">
                <div className="row-span-2 flex justify-center items-center">
                    <img src="images/banner3.png" alt="Banner 3" className="w-full h-48 object-cover" />
                </div>
                <div className="flex justify-center items-center">
                    <img src="images/banner1.png" alt="Banner 1" className="w-full h-24 object-cover" />
                </div>
                <div className="col-start-2 flex justify-center items-center">
                    <img src="images/banner2.jfif" alt="Banner 2" className="w-full h-24 object-cover" />
                </div>
            </div>
            <div className="flex flex-wrap gap-x-5 justify-center items-center">
                <div className="text-center">
                    <img src="images/banner_below1.png" alt="50% off" className="w-10 h-10 sm:w-12 sm:h-12 mx-auto" />
                    <p className="text-[10px] sm:text-[12px]">50% Off Fashion</p>
                </div>
                <div className="text-center">
                    <img src="images/banner_below2.png" alt="50% off" className="w-10 h-10 sm:w-12 sm:h-12 mx-auto" />
                    <p className="text-[10px] sm:text-[12px]">Shopee Mall</p>
                </div>
                <div className="text-center">
                    <img src="images/banner_below3.png" alt="50% off" className="w-10 h-10 sm:w-12 sm:h-12 mx-auto" />
                    <p className="text-[10px] sm:text-[12px]">On-time Delivery</p>
                </div>
                <div className="text-center">
                    <img src="images/banner_below5.png" alt="50% off" className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mt-4" />
                    <p className="text-[10px] sm:text-[12px]">Shopee Choice <br /> Daily $29</p>
                </div>
                <div className="text-center">
                    <img src="images/banner_below6.png" alt="50% off" className="w-10 h-10 sm:w-12 sm:h-12 mx-auto" />
                    <p className="text-[10px] sm:text-[12px]">Shopee Beauty</p>
                </div>
                <div className="text-center">
                    <img src="images/banner_below7.png" alt="50% off" className="w-10 h-10 sm:w-12 sm:h-12 mx-auto" />
                    <p className="text-[10px] sm:text-[12px]">Free Shipping</p>
                </div>
                <div className="text-center">
                    <img src="images/banner_below8.png" alt="50% off" className="w-10 h-10 sm:w-12 sm:h-12 mx-auto" />
                    <p className="text-[10px] sm:text-[12px]">Coins Rewards</p>
                </div>
                <div className="text-center">
                    <img src="images/banner_below9.png" alt="50% off" className="w-10 h-10 sm:w-12 sm:h-12 mx-auto" />
                    <p className="text-[10px] sm:text-[12px]">Gadget Zone</p>
                </div>
                <div className="text-center">
                    <img src="images/banner_below4.png" alt="50% off" className="w-10 h-10 sm:w-12 sm:h-12 mx-auto" />
                    <p className="text-[10px] sm:text-[12px]">Shopee Supermarket</p>
                </div>
                <div className="text-center">
                    <img src="images/banner_below10.png" alt="50% off" className="w-10 h-10 sm:w-12 sm:h-12 mx-auto" />
                    <p className="text-[10px] sm:text-[12px]">Partner Promos</p>
                </div>
            </div>
        </div>
    );
}

export default BelowHeader;