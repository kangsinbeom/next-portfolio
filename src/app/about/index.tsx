import CommentBox from './components/CommentBox';
import MainImage from './components/MainImage';
import SubTitle from './components/SubTitle';

export const About = () => {
  return (
    <div className="content-area flex-row">
      <MainImage />
      <CommentBox />
      <SubTitle />
    </div>
  );
};
