import React from 'react';

function Footer() {
    return (
        <div className="bg-zinc-950 p-8">
            <div className="flex flex-col space-y-8 sm:space-y-0 sm:flex-row sm:justify-between">
                <div className="text-white text-center sm:text-left">
                    <h1 className="font-bold text-3xl">KickCraze</h1>
                    <p>The latest footwear fashion</p>
                </div>
                <div className="text-white text-center sm:text-left space-y-4 sm:flex-col sm:flex flex flex-col">
                    <a href="/">FAQs</a>
                    <a href="/">Size Chart</a>
                    <a href="/">Contact Us</a>
                </div>
                <div className="text-white text-center sm:text-left space-y-4 sm:flex-col sm:flex flex flex-col">
                    <a href="/">Terms of Services</a>
                    <a href="/">Refund Policy</a>
                    <a href="/">About Us</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
