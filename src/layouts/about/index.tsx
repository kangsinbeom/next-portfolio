import CommentBox from '@/components/about/CommentBox';
import MainImage from '@/components/about/MainImage';
import SubTitle from '@/components/about/SubTitle';
import ContentArea from '@/components/common/ContentArea';

export const About = () => {
  return (
    <ContentArea>
      <MainImage />
      <CommentBox />
      <SubTitle />
    </ContentArea>
  );
};
