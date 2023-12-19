import Image from 'next/image';
import a from '../../../../public/next icon.png';
const Skill = () => {
  return (
    <div className="grid h-12 w-12 place-content-center rounded-lg bg-black p-2">
      <Image alt="skill-icon" src={a} width={25} height={25} />
    </div>
  );
};

export default Skill;
