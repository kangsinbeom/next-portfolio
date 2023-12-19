import React from 'react';
import Comment from './Comment';
import Button from '@/common/buttons/Button';
import Subtitle from '@/common/sentence/Subtitle';

const CommentBox = () => {
  return (
    <div className="flex flex-col gap-5">
      <Subtitle>About Me</Subtitle>
      <Comment />
    </div>
  );
};

export default CommentBox;
