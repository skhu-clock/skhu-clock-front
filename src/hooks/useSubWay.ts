import { useState, useEffect } from 'react';
import type { SubWayAPi } from '@/types/index';

export const useSubwayAPi = () => {
  const [subway, setSubway] = useState<SubWayAPi[] | null>(null);

  useEffect(() => {
    const fetchSubwayData = async () => {
      const res = await fetch('/api/subway');
      if (res.ok) {
        setSubway(await res.json());
      }
    };

    fetchSubwayData();
  }, []);

  return { subway };
};
