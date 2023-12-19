import Subtitle from '@/common/sentence/Subtitle';
import SkillList from './SkillList';

const SkillBox = () => {
  return (
    <div className="flex flex-col gap-5">
      <Subtitle>Skill & Tools</Subtitle>
      <SkillList />
      <SkillList />
    </div>
  );
};

export default SkillBox;
