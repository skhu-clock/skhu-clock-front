import { useState, useEffect } from 'react';
import type { SubWayAPi } from '@/types/index';

export const useSubwayAPi = () => {
  const [subway, setSubway] = useState<SubWayAPi[] | null>(null);
  const [totalResult, setTotalResult] = useState<number>(0);

  useEffect(() => {
    const fetchSubwayData = async () => {
      const res = await fetch('/api/subway');
      if (res.ok) {
        setSubway(await res.json());
      }
    };

    fetchSubwayData().then(() => {
      if (subway) setTotalResult(subway?.length);
    });
  }, []);

  return { subway, totalResult };
};
