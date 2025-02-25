"use client"
import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const LottieAnimation = ({ animationData, loop = true, autoplay = true }) => {
    const containerRef = useRef(null);

    

    useEffect(() => {
        const animation = lottie.loadAnimation({
            container: containerRef.current, // the container where animation will be rendered
            renderer: 'svg', // use SVG renderer
            loop: loop,
            autoplay: autoplay,
            animationData: animationData, // Lottie animation data (JSON)
        });

        return () => animation.destroy(); // Cleanup the animation when the component is unmounted
    }, [animationData, loop, autoplay]);

    return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
};

export default LottieAnimation;
