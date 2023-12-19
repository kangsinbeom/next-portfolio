const Subtitle = ({ children }: { children: string }) => {
  return (
    <h2 className="font-serif text-4xl font-extrabold text-white">
      {children}
    </h2>
  );
};

export default Subtitle;
