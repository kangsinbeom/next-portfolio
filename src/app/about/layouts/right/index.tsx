import CommentBox from '../../components/CommentBox';
import SkillBox from '../../components/SkillBox';

export const Right = () => {
  return (
    <div className="flex flex-col justify-center gap-20 pl-10">
      <CommentBox />
      <SkillBox />
    </div>
  );
};
