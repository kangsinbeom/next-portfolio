import Title from './components/Title';
import BackgroundImg from '@/common/images/BackgroundImg';
export const Intro = () => {
  return (
    <section className="relative top-0 -z-10 center-layout">
      <Title />
      <BackgroundImg layout={'intro'} />
    </section>
  );
};
