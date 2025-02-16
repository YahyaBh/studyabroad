import LottieAnimation from "@/app/lib/lottieAnimation"
import animationData from "../../assets/images/KGi7Y2yrRW.json"


const Loading = () => {
    return (
        <div className="loading">

            <div style={{ height: '50dvh', width: '50dvh' }}>
                <LottieAnimation animationData={animationData} />
            </div>
        </div>
    )
}

export default Loading