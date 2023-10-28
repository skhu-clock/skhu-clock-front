import { useState, useEffect } from 'react';
import type {MenuAPi } from '@/types/index';

export const useMenuAPi = () => {
  const [menu, setMenu] = useState<MenuAPi[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [totalResult, setTotalResult] = useState<number>(0);

  useEffect(() => {
    setIsLoading(true);
    const fetchCrawlData = async () => {
      const res = await fetch('/api/menu');
      if (res.ok) {
        return await res.json();
      }
    };

    fetchCrawlData()
      .then((res) => setMenu(res))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { menu, isLoading, totalResult };
};
