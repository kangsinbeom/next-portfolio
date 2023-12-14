import { selectLayoutImg } from '@/utils/function/selectLayoutImg';
import Image from 'next/image';

const BackgroundImg = ({ layout }: { layout: string }) => {
  const layoutImg = selectLayoutImg(layout);
  return (
    <Image
      alt="background-image intro"
      src={layoutImg}
      fill
      priority={true}
      className="animate-fadein -z-10 transition-opacity duration-100"
    />
  );
};

export default BackgroundImg;
