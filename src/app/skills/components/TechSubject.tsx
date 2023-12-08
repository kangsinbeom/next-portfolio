import React from 'react';

const TechSubject = ({ title }: { title: string }) => {
  return (
    <div className="w-fit rounded-full border-2 px-5 font-semibold">
      {title}
    </div>
  );
};

export default TechSubject;
