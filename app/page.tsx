
import TransitionPages from '@/components/transition-pages';
import Particle from '../components/cover-particle';
import Introduction from '@/components/introduction'


const Home = () => {
  return (
    <main>
      <TransitionPages />
      <div className="relative flex items-center justify-center">
        <Particle />
        <Introduction />
      </div>
    </main>
  );
};

export default Home;
