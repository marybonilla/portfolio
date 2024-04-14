"use client"

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
//import Link from 'next/link';

import Buttom from "@/components/buttom"



const Introduction = () => {
    return (

        <div className="z-20 w-full bg-darkBg/80"> 
            <div className="z-20 gird items-center flex flex-col gap-3 h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image className="rounded-full " src="/profilepic.jpg" priority width="100" height="100" alt="profile pic"/>
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight 
                    text-center text-primary-foreground md:text-left md:text-4xl md:mb-10">
                        Hola, Soy 
                        <TypeAnimation
                        sequence={[
                            " Mary Bonilla",
                            1000,
                            " Desarrolladora Full Stack",
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className="block font-bold text-secondary"
                        
                        />
                    </h1>

                    <p className="text-primary-foreground mx-auto mb-2 text-xl md:mx-0 md:mb-8">
                    Una profesional con experiencia en marketing digital, 
                    diseño gráfico y <span className="text-secondary"> programación. </span> 
                    Combino creatividad y habilidades técnicas para 
                    desarrollar soluciones innovadoras y efectivas. 
                    Mi pasión por integrar diseño y tecnología me impulsa a abordar 
                    desafíos desde múltiples perspectivas. Estoy emocionada de 
                    compartir cómo mi enfoque multidisciplinario puede beneficiar tu proyecto.

                     </p>
                     <div>
                        <Buttom />
                     </div>

                </div>
            </div>
            
        </div>
    );
}

export default Introduction;