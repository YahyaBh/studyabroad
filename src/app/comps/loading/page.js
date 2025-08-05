"use client"
import LottieAnimation from "@/app/lib/lottieAnimation"
import animationData from "../../assets/images/KGi7Y2yrRW.json"
import { useEffect } from "react";


const Loading = ({ loading }) => {



    useEffect(() => {
        if (loading) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [loading]);

    return (
        <div className="loading">

            <div style={{ height: '100dvh' }}>
                <LottieAnimation animationData={animationData} />
            </div>
        </div>
    )
}

export default Loading