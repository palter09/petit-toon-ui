import { useEffect, useRef, useState } from 'react';

//https://heropy.blog/2019/10/27/intersection-observer/
function useIntersectionObserver(options, onIntersect) {
  const targetRef = useRef(null);
  const observerRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false); // 이미지 로드 상태

  useEffect(() => {
    const currentTargetRef = targetRef.current;

    if (currentTargetRef) {
      observerRef.current = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if(!entry.isIntersecting){
            return;
          }else{//api-reload시키는 target인지 확인
            const isApiReloadTarget = entry.target.hasAttribute('api-reload-target');
            if(isApiReloadTarget){//api reload target을 observe했으면
              if (onIntersect) {
                onIntersect();
              }
            }else{//이미지 lazy loading : src에 있는 임시 url을 data-src의 url로 교체
              const image = entry.target;
              image.src = image.dataset.src;
              // 이미지 로드가 완료되면 상태를 업데이트
              image.onload = () => {
                setImageLoaded(true);
              };
            }
          }
        })
      }, options);
      // data-src 속성을 가진 요소를 찾아서 observe
      const elementsToLazyLoad = document.querySelectorAll('[data-src]');
      elementsToLazyLoad.forEach((element) => {
        observerRef.current.observe(element);
      });
      observerRef.current.observe(currentTargetRef);
    }

    return () => {
      if (observerRef.current && currentTargetRef) {
        observerRef.current.unobserve(currentTargetRef);
      }
    };
  }, [options, onIntersect]);

  return { targetRef , observerRef, imageLoaded };
}

export default useIntersectionObserver;
