const ContentArea = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="relative flex h-screen w-screen flex-col border-2 border-red-600 bg-slate-400 p-5 ">
      {children}
    </section>
  );
};

export default ContentArea;
