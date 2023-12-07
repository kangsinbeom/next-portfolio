import Image from 'next/image';

const MainImage = () => {
  return (
    <figure className="flex h-full w-1/2 items-center justify-end">
      <div className="relatives w-[600px] shadow-[10px_20px_10px_7px_rgba(0,0,0,0.5)]">
        <Image
          src={
            'https://res.cloudinary.com/dmowpence/image/upload/v1701931247/ykx4gctiwbaoslkyygmz.jpg'
          }
          alt="pictuer of the author"
          priority={true}
          width={600}
          height={100}
        />
      </div>
    </figure>
  );
};

export default MainImage;
