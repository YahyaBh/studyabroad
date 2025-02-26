"use client"
import { useEffect, useRef } from 'react';

const LottieAnimation = ({ animationData, loop = true, autoplay = true }) => {

    const containerRef = useRef(null);

    async function getLottie() {
        const lot = await import("lottie-web");

        lot.default.loadAnimation({
            container: containerRef.current,
            renderer: 'svg',
            loop: loop,
            autoplay: autoplay,
            animationData: animationData, 
        })

    }
    useEffect(() => {

        getLottie();

    }, []);


    return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
};

export default LottieAnimation;

