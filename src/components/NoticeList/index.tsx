import styled from '@emotion/styled';
import type { CrawlerAPi } from '@/types';
import ApiList from '../Domain/ApiList';
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
        <Skeleton.Box width={450} height={180} />
      ) : (
        <>
          <ApiList
            renderItem={renderNotice}
            items={crawlData?.slice(initPage, initPage + 5) || []}
          />
          <div>
            <button onClick={handleClickPrevPage}>이전</button>
            {initPage / 5 + 1}
            <button onClick={handleClickNextPage}>이후</button>
          </div>
        </>
      )}
    </>
  );
};

export default NoticeList;
