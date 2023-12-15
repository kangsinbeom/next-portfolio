import { useEffect, useRef, useState } from 'react';
interface ScrollAnimationHookResult {
  scrollRef: React.RefObject<HTMLDivElement>;
  scrollEl: boolean;
}
const useScrollAnimation = (): ScrollAnimationHookResult => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollEl, setScrollEl] = useState<boolean>(false);
  useEffect(() => {
    if (!scrollRef.current) return;
    window.addEventListener('scroll', yScrollEvent);
    return () => {
      window.removeEventListener('scroll', yScrollEvent);
    };
  }, []);

  const yScrollEvent = () => {
    const scroll = scrollRef.current?.getBoundingClientRect();
    if (scroll) setScrollEl(scroll.top <= 500);
  };
  return { scrollRef, scrollEl };
};

export default useScrollAnimation;
