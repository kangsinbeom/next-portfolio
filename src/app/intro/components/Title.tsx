const Title = () => {
  return (
    <div className="animate-fill-forwards animate-test animate-delay-[2s] relative z-20  flex items-center justify-center ">
      <h1 className="animate-delay-[1s] animate-fill-forwards animate-fade-up top-1/2 font-gasoek text-9xl text-slate-200 opacity-0">
        FRONT-END
      </h1>
      <p className=" absolute bottom-0 animate-fadein font-blackhansans text-5xl text-slate-950">
        프론트엔드 개발자 <span className="text-6xl">강신범</span>입니다.
      </p>
    </div>
  );
};

export default Title;
