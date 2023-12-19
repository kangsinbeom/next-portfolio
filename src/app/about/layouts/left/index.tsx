'use client';

import useScrollAnimation from '@/hooks/useScrollAnimation';
import MainComment from '../../components/MainComment';
import MainImage from '../../components/MainImage';

export const Left = () => {
  const { scrollRef, scrollEl } = useScrollAnimation();
  return (
    <figure
      ref={scrollRef}
      className="relative grid h-full w-1/2 place-items-center"
    >
      <MainImage scrollEl={scrollEl} />
      <MainComment scrollEl={scrollEl} />
    </figure>
  );
};
