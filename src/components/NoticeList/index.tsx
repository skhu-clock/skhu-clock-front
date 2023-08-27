import type { CrawlerAPi } from '@/types';
import List from '../Common/List';
import { useCrawlerAPi } from '@/hooks/useCrawler';

const renderNotice = (item: CrawlerAPi) => {
  return <div>{item.title}</div>;
};

const NoticeList = () => {
  const { crawlData } = useCrawlerAPi();
  return (
    <List
      items={crawlData || []}
      renderItem={renderNotice}
      listStyle={{
        listStyle: 'none',
      }}
    />
  );
};

export default NoticeList;
