import { ReactElement } from 'react';

interface ContentAreaProps {
  children: React.ReactNode;
}

const ContentArea = ({ children }: ContentAreaProps) => {
  return <section className="bg-slate-700">{children}</section>;
};

export default ContentArea;
