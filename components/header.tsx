import MotionTransition from "./transition-components"

import {socialNetworks} from "@/data"

import Link from "next/link"


const Header = () =>{
    return (
        <MotionTransition position= "bottom"
        className="abosolute z-40 inline-block w-full top-5 md:top-10">
            <header>
                <div className="container justify-between max-w-6xl mx-auto md:flex">
                    <Link href="/">
                        <h1 className="text-primary-foreground my-3 text-4xl font-bold text-center md:text-left">
                            Eme
                            <span className="text-secondary ">
                                Dev
                             </span>
                        </h1>  
                    
                    </Link> 
                    <div className="flex items-center justify-center gap-6">
                        {socialNetworks.map(({logo, src, id}) =>
                        <Link key={id}
                        href={src}
                        target="_blank"
                        className="transition-all duration-300 hover:text-secondary">
                        
                         {logo}
                        </Link>
                        )}

                    </div>

                </div>
            
            </header>

        </MotionTransition>

    )
}

export default Header