import Image from 'next/image';

const MainImage = () => {
  return (
    <div className="relatives h-auto w-[500px] shadow-[10px_20px_10px_7px_rgba(0,0,0,0.5)]">
      <Image
        src={
          'https://res.cloudinary.com/dmowpence/image/upload/v1701931247/ykx4gctiwbaoslkyygmz.jpg'
        }
        alt="pictuer of the author"
        priority={true}
        width={720}
        height={960}
      />
    </div>
  );
};

export default MainImage;
