
import TransitionPages from '@/components/transition-pages';
import Particle from '../components/cover-particle';
import Introduction from '@/components/introduction'


export default function Home() {
  return (
   <main>
    <TransitionPages />
    <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      
      <Particle /> 
      <Introduction />

      
    </div>
   </main>
  );
}
