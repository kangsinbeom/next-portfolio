import Icon from '@/common/icons/Icon';
import Image from 'next/image';

const Infomation = () => {
  return (
    <div className="gird h-20 w-[480px] bg-gray-500 p-8">
      <p className="font-bold">Sinbeom Kang</p>
      <div className="relatives h-auto w-[100px]">
        {/* <Image
          alt="qrcode"
          src="https://res.cloudinary.com/dmowpence/image/upload/v1702273024/qhq9n5bajmytig3ctdwu.svg"
          width={100}
          height={100}
          style={{ width: '100%', height: 'auto' }}
          priority={true}
        /> */}
      </div>
      <Icon />
    </div>
  );
};

export default Infomation;
