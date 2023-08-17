import Instance from '@/constants';
import { useState, useEffect } from 'react';
import type { CrawlerAPi } from '@/types/index';

export const useCrawlerAPi = () => {
  const [crawlData, setCrawlData] = useState<CrawlerAPi | null>(null);

  useEffect(() => {
    const fetchCrawlData = async () => {
      const res = await Instance.get('/api/crawling');
      setCrawlData(res.data);
    };

    fetchCrawlData();
  }, []);

  return { crawlData };
};
