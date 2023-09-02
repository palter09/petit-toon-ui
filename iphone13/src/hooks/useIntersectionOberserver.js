import { useEffect, useRef, useState } from 'react';

//https://heropy.blog/2019/10/27/intersection-observer/
function useIntersectionObserver(options, onIntersect) {
  const targetRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const currentTargetRef = targetRef.current;

    if (currentTargetRef) {
      observerRef.current = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && onIntersect) {
          onIntersect(); // 교차할 때 실행할 함수
        }
      }, options);
      observerRef.current.observe(currentTargetRef);
    }

    return () => {
      if (observerRef.current && currentTargetRef) {
        observerRef.current.unobserve(currentTargetRef);
      }
    };
  }, [options, onIntersect]);

  return { targetRef , observerRef };
}

export default useIntersectionObserver;
