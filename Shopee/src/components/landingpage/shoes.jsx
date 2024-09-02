import React, { useState, useEffect } from 'react';

function Shoes() {
    const images = [
        "images/s1.webp",
        "images/s2.webp",
        "images/s3.webp",
        "images/s1.webp",
        "images/s2.webp"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const scrollLeft = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const scrollRight = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 3 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="flex justify-center items-center">
            <div>
                {/* Other components (e.g., banners, text, iframe) */}

                <div className="mt-4">
                    <h1 className="font-extrabold text-3xl text-left ml-4">Latest Release</h1>
                    <div className="flex justify-end mr-5 gap-x-2">
                        <button onClick={scrollLeft} className="p-2 bg-zinc-900 text-white rounded-full w-12 h-12">‹</button>
                        <button onClick={scrollRight} className="p-2 bg-zinc-900 text-white rounded-full w-12 h-12">›</button>
                    </div>
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
                        >
                            {images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`shoes ${index + 1}`}
                                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-auto"
                                    style={{ flex: "0 0 33.33%" }} // Ensures that 3 images take up 100% width
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shoes;
