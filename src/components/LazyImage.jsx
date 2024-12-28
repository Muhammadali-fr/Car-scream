import React, { useState } from 'react';

function LazyImage({ src, alt, className }) {
    const [isLoaded, setIsLoaded] = useState(false);

    const handleImageLoad = () => {
        setIsLoaded(true);  // Set the image as loaded
    };

    return (
        <img
            src={src}
            alt={alt}
            className={`${className} ${!isLoaded ? 'blur-lg' : ''} transition-all duration-500`}
            onLoad={handleImageLoad}
        />
    );
}

export default LazyImage;
