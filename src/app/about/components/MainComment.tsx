const MainComment = ({ scrollEl }: { scrollEl: boolean }) => {
  return (
    <div
      id="test"
      className={
        scrollEl
          ? `${'animate-fade-up absolute right-0 top-[15%] translate-x-1/4'}`
          : ''
      }
    >
      <h2 className="text-end font-serif text-7xl font-extrabold">Developer</h2>
      <p className=" font-serif text-5xl font-bold">better than yesterday</p>
    </div>
  );
};

export default MainComment;
