'use client';

import useScrollAnimation from '@/hooks/useScrollAnimation';
import Image from 'next/image';

const MainImage = () => {
  const { scrollRef, scrollEl } = useScrollAnimation();
  console.log(scrollEl);
  return (
    <div
      ref={scrollRef}
      className="relative h-full w-[500px] shadow-[10px_20px_10px_7px_rgba(0,0,0,0.5)]"
    >
      <Image
        src={
          'https://res.cloudinary.com/dmowpence/image/upload/v1701931247/ykx4gctiwbaoslkyygmz.jpg'
        }
        alt="pictuer of the author"
        priority={true}
        fill
        className="animate-fade-up"
      />
    </div>
  );
};

export default MainImage;
