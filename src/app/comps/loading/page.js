"use client"
import LottieAnimation from "@/app/lib/lottieAnimation"
import animationData from "../../assets/images/KGi7Y2yrRW.json"
import { useEffect, useState } from "react";


const Loading = ({ loading }) => {



    useEffect(() => {
        if (loading) {
            // Disable scrolling when loading
            document.body.style.overflow = "hidden";
        } else {
            // Enable scrolling after loading is done
            document.body.style.overflow = "auto";
        }

        // Cleanup function to restore scrolling when the component unmounts
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [loading]);

    return (
        <div className="loading">

            <div style={{ height: '50dvh', width: '50dvh' }}>
                <LottieAnimation animationData={animationData} />
            </div>
        </div>
    )
}

export default Loading