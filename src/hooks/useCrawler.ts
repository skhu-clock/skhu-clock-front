import Instance from '@/components/constants';
import { useState, useEffect } from 'react';
import type { CrawlerAPi } from '@/types/index';

export const useCrawlerAPi = () => {
  const [crawlData, setCrawlData] = useState<CrawlerAPi[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [totalResult, setTotalResult] = useState<number>(0);

  useEffect(() => {
    setIsLoading(true);
    const fetchCrawlData = async () => {
      const res = await fetch('/api/notice');
      if (res.ok) {
        return await res.json();
      }
    };

    fetchCrawlData()
      .then((res) => setCrawlData(res))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { crawlData, isLoading, totalResult };
};
