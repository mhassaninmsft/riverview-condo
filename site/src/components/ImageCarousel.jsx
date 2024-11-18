
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// Updated: Using only `query: '?url'` for compatibility

export default function ImageCarousel({ imageUrls }) {

    return (

        <div className="flex justify-center items-center mx-auto mt-10">
            <div className="w-full max-w-6xl">
                <Carousel autoPlay={true} swipeable={true} dynamicHeight={true}>
                    {imageUrls.map((url, index) => (
                        <div key={index} >
                            {/* Image with rounded corners and smooth transitions */}
                            < img
                                src={url}
                                alt={`Carousel Image ${index + 1}`}
                            />
                        </div>))
                    }
                </Carousel >
            </div>
        </div>
    )
};