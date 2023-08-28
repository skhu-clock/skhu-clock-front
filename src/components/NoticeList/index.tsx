import styled from '@emotion/styled';
import type { CrawlerAPi } from '@/types';
import List from '../Common/List';
import Skeleton from '../Common/Skeleton';
import { useCrawlerAPi } from '@/hooks/useCrawler';
import { useState } from 'react';
import { Link } from '@/components/SubWayList/index';

const renderNotice = (item: CrawlerAPi) => {
  return (
    <div>
      <Link href={item.url}>{item.title}</Link>
    </div>
  );
};

const NoticeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const NoticeList = () => {
  const { crawlData, isLoading } = useCrawlerAPi();
  const [initPage, setPage] = useState<number>(0);

  const handleClickNextPage = () => {
    if (initPage + 5 <= 15) setPage(initPage + 5);
  };

  const handleClickPrevPage = () => {
    if (initPage - 5 >= 0) setPage(initPage - 5);
  };
  return (
    <>
      {isLoading ? (
        <Skeleton.Box width={465} height={228} />
      ) : (
        <NoticeWrapper>
          <List
            renderItem={renderNotice}
            items={crawlData?.slice(initPage, initPage + 5) || []}
            listStyle={{
              width: '350px',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '15px',
              flexDirection: 'column',
            }}
          />

          <div>
            <button onClick={handleClickPrevPage}>이전</button>
            {initPage / 5 + 1}
            <button onClick={handleClickNextPage}>이후</button>
          </div>
        </NoticeWrapper>
      )}
    </>
  );
};

export default NoticeList;
