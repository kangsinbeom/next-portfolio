const ContentArea = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="h-screen w-screen border-2 border-red-600 bg-slate-400">
      {children}
    </section>
  );
};

export default ContentArea;
