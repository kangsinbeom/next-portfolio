import Title from './components/Title';
import BackgroundImg from '@/common/images/BackgroundImg';
export const Intro = () => {
  return (
    <section className="relative center-layout">
      <Title />
      <BackgroundImg layout={'intro'} />
    </section>
  );
};
