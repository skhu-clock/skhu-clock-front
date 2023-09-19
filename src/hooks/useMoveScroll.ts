import { useRef } from 'react';

//hook
function useMoveScrool(name: string) {
  const element = useRef<HTMLDivElement>(null);
  const element1 = useRef<HTMLDivElement>(null);
  const element2 = useRef<HTMLDivElement>(null);

  const eleArr = [element, element1, element2];


  const onMoveToElement = (index: any) => {
    eleArr[index].current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return { eleArr, onMoveToElement, name};
}

export default useMoveScrool;