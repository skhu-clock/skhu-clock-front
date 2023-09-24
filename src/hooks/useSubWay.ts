import { useState, useEffect } from 'react';
import type { SubWayAPi } from '@/types/index';

export const useSubwayAPi = (flag?: boolean) => {
  const [subway, setSubway] = useState<SubWayAPi[] | null>(null);
  const [totalResult, setTotalResult] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchSubwayData = async () => {
      const res = await fetch('/api/subway');
      if (res.ok) {
        setSubway(await res.json());
      }
    };

    fetchSubwayData()
      .finally(() => setIsLoading(false));
  }, [flag]);  

  return { subway, totalResult, isLoading };
};
