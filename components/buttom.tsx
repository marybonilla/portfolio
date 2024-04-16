import Link from "next/link"

const Buttom = () => {
    return (
        <div className="flex items-center justify-center mt-3 gap-3 md:justify-start md:gap-10"> 
            <Link href="/projects" className="px-3 py-2 transition-all border-2 cursor-pointer text-md text-primary-foreground w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                        Proyectos
                     </Link>
                     <Link href="/projects" className="px-3 py-2 transition-all border-2 cursor-pointer text-secondary border-secondary text-md w-fit rounded-xl hover:shadow-xl hover:shadow-secondary">
                        Resume
                     </Link>

        </div>
    )
}

export default Buttom;