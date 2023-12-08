import React from 'react';
import Comment from './Comment';
import Button from '@/common/buttons/Button';

const CommentBox = () => {
  return (
    <div className="flex flex-col justify-center">
      <Comment />
      <Button />
    </div>
  );
};

export default CommentBox;
