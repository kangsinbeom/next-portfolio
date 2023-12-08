import MainComment from '../../components/MainComment';
import MainImage from '../../components/MainImage';

export const Left = () => {
  return (
    <figure className="relative grid h-full w-1/2 place-items-center">
      <MainImage />
      <MainComment />
    </figure>
  );
};
