import ContainerPage from "@/components/container";
import TransitionPages from "@/components/transition-pages"
import ImageExperience from "@/components/image-experience"

const experiencePage = () => {
    return(
        <>
        <TransitionPages/>
        <ContainerPage>
            <ImageExperience />
            
         </ContainerPage>

        </>
    );
}

export default experiencePage;