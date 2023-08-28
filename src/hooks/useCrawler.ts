import Instance from '@/constants';
import { useState, useEffect } from 'react';
import type { CrawlerAPi } from '@/types/index';

export const useCrawlerAPi = () => {
  const [crawlData, setCrawlData] = useState<CrawlerAPi[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchCrawlData = async () => {
      const res = await Instance.get('/api/notice');
      setCrawlData(res.data);
    };

    fetchCrawlData().finally(() => setIsLoading(false));
  }, []);

  return { crawlData, isLoading };
};
