import { Badge } from "@/components/ui/badge"
import {dataSkills} from "@/data"


const Skills = () => {
    return (
        <div className="flex flex-wrap gap-3 px-2 py-2">
            
            {dataSkills.map((skill) => (
                
               <div key={skill.id} > 
               <Badge className="font-bold"> {skill.title}</Badge>
               
               </div>

                ))}
           

        </div>
    )
}

export default Skills