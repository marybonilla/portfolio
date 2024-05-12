import MotionTransition from "@/components/transition-components"
import Image from "next/image";

const ImageExperience = () => {
    return (
        <MotionTransition position="bottom" className="right-4 hidden md:inline-block md:absolute">
            <Image src="/experience.png" width={400} height={400}
            className="w-full h-full" alt="image-experience"/>
            <h1> Mi
                <span> </span>
            </h1>
            
        </MotionTransition>

    )
}

export default ImageExperience;