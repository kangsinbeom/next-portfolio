import Image from 'next/image';

const MainImage = ({ scrollEl }: { scrollEl: boolean }) => {
  return (
    <Image
      src={
        'https://res.cloudinary.com/dmowpence/image/upload/v1701931247/ykx4gctiwbaoslkyygmz.jpg'
      }
      alt="pictuer of the author"
      height={960}
      width={720}
      className={`w-[500px] shadow-[10px_20px_10px_7px_rgba(0,0,0,0.5)] ${
        scrollEl ? `${'animate-fade-up'}` : 'opacity-0'
      }`}
    />
  );
};

export default MainImage;
