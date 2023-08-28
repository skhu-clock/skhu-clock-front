import Instance from '@/constants';
import { useState, useEffect } from 'react';
import type { SubWayAPi } from '@/types/index';

export const useSubwayAPi = () => {
  const [subway, setSubway] = useState<SubWayAPi[] | null>(null);

  useEffect(() => {
    const fetchSubwayData = async () => {
      const res = await Instance.get('/api/subway');
      setSubway(res.data);
    };

    fetchSubwayData();
  }, []);

  return { subway };
};
