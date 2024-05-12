import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { BookLock, Database, CodeXml, Bolt, GraduationCap, Anvil } from "lucide-react";
import MotionTransition from "./transition-components";

const Timeline = () => {
    return (
        <>
        
        <VerticalTimeline>
        
        <MotionTransition position="bottom">
            <VerticalTimelineElement
                className=" vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(28, 22, 120)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(28, 22, 120)' }}
                date="Abril 2024 - Actualidad"
                style={{ color: 'white' }}
                iconStyle={{ background: 'rgb(28, 22, 120)', color: '#fff' }}
                visible={true}
                icon={<BookLock />}
                

            >
                <h3 className=" vertical-timeline-element-title"> <strong> Back-end Java </strong> </h3>
                <h3 className=" vertical-timeline-element-title">Fundación Accenture</h3>
               
                
                <p>
                Trabajar desarrollando y mejorando tanto la arquitectura 
                interna de una web como el control para que todas las conexiones
                 funcionen y la navegación sea ligera y segura. De esta forma, 
                se consigue que el usuario disfrute más de la experiencia.
                </p>
            </VerticalTimelineElement>
            </MotionTransition>

            <MotionTransition position="right"> 
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(133, 118, 255)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(133, 118, 255)' }}
                date="Enero 2024 - Marzo 2024"
                style={{ color: 'white' }}
                iconStyle={{ background: 'rgb(133, 118, 255)', color: '#fff' }}
                icon={<Database />}
                visible={true}
                position="right"
            >
                <h3 className="vertical-timeline-element-title" > <strong>  Programación Web con PHP </strong></h3>
                <h4 className="vertical-timeline-element-subtitle">SEPE - Virensis</h4>
                <p>
                Este curso ha sido una inmersión completa en PHP, 
                desde los fundamentos hasta temas avanzados. 
                Cubrimos sintaxis, programación orientada a objetos, 
                desarrollo de aplicaciones web, bases de datos con MySQL y SQLite. 
                A través de proyectos prácticos, fortalecí mis habilidades
                 y adquirí una base sólida en desarrollo web con PHP.
                </p>
            </VerticalTimelineElement>
            </MotionTransition>
            
            <MotionTransition position="bottom">
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(123, 201, 255)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(123, 201, 255)' }}
                date="Mayo 2023 - Octubre 2023"
                iconStyle={{ background: 'rgb(123, 201, 255)', color: '#fff' }}
                icon={<CodeXml />}
                visible={true}
            >
                <h3 className="vertical-timeline-element-title"><strong>Web Development Full-Stack </strong></h3>
                <h4 className="vertical-timeline-element-subtitle">Ironhack</h4>
                
                <p>
                Fue una experiencia educativa enriquecedora que expandió significativamente 
                mi conjunto de habilidades. Durante el programa, 
                adquirí conocimientos sólidos en tecnologías esenciales, incluyendo JavaScript, 
                MongoDB, Express, React, Axios, Node.js, HTML, CSS, Git y GitHub. 
                Esta formación me proporcionó una base sólida en desarrollo 
                web y me permitió desarrollar proyectos reales utilizando estas tecnologías.
                </p>
            </VerticalTimelineElement>
            </MotionTransition>

            <MotionTransition position="right">
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(28, 22, 120)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(28, 22, 120)' }}
                date="Mayo 2022 - Julio 2022"
                iconStyle={{ background: 'rgb(28, 22, 120)', color: '#fff' }}
                icon={<Bolt />}
                style={{ color: 'white' }}
                visible={true}
                position="right"
            >
                <h3 className="vertical-timeline-element-title" ><strong>Soporte de Tecnologías de la Información </strong></h3>
                <h4 className="vertical-timeline-element-subtitle">Factoría F5</h4>
                <p>
                Durante este período, adquirí valiosos conocimientos y habilidades 
                relacionados con el soporte técnico y la gestión de tecnologías de la información. 
                </p>
            </VerticalTimelineElement>
            </MotionTransition>


            <MotionTransition position="bottom">
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'rgb(133, 118, 255)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(133, 118, 255)' }}
                date="Febrero 2021 - Febrero 2022"
                style={{ color: 'white' }}
                iconStyle={{ background: 'rgb(133, 118, 255)', color: '#fff' }}
                icon={<GraduationCap />}
                visible={true}
            >
                <h3 className="vertical-timeline-element-title"><strong> Master en Dirección Comercial y Marketing </strong></h3>
                <h4 className="vertical-timeline-element-subtitle">Cerem</h4>
                <p>
                Este programa de posgrado me proporcionó una comprensión 
                profunda de las estrategias comerciales y de marketing, 
                así como las habilidades necesarias para liderar equipos
                 y tomar decisiones estratégicas en un entorno empresarial dinámico.
                </p>
            </VerticalTimelineElement>
            </MotionTransition>



            <MotionTransition position="right">
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'rgb(123, 201, 255)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(123, 201, 255)' }}
                date="Febrero 2006 - Octubre 2011"
                iconStyle={{ background: 'rgb(123, 201, 255)', color: '#fff' }}
                icon={<Anvil />}
                visible={true}
                style={{ color: 'white' }}
                position = 'right'
            >
                <h3 className="vertical-timeline-element-title"><strong>Licenciatura en Publicidad </strong></h3>
                <h4 className="vertical-timeline-element-subtitle">Universidad Autónoma de Sto. Dgo.</h4>
                <p>
                Adquirí conocimiento en estrategias de marketing, 
                comunicación efectiva y diseño gráfico, lo que me ha 
                permitido desarrollar habilidades en el campo de la publicidad. 
                Mi educación me proporcionó una base sólida para crear campañas 
                publicitarias, así como para diseñar contenido visual atractivo
                 y comunicar mensajes de manera impactante a diversos públicos.
                </p>
            </VerticalTimelineElement>
            </MotionTransition>


            
        </VerticalTimeline>
        
        </>
    );
}

export default Timeline;