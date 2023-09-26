import styled from '@emotion/styled';
import type { CrawlerAPi } from '@/types';
import ApiList from '../Domain/ApiList';
import Skeleton from '../Common/Skeleton';
import { useCrawlerAPi } from '@/hooks/useCrawler';
import { useState } from 'react';

const NoticeLinkStyle = styled.a`
  width: 320px;
  padding: 0 5px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: inherit;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    color: '#e1e1e1';
  }
`;

const renderNotice = (item: CrawlerAPi) => {
  return (
    <div>
      <NoticeLinkStyle href={item.url}>{item.title}</NoticeLinkStyle>
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
          <div style={{
            width: '350px',
          }}>
            <ApiList
              renderItem={renderNotice}
              items={
                crawlData
                  ?.sort((a, b) => {
                    const firstDate = new Date(a.writeDate).getDate();
                    const secondDate = new Date(b.writeDate).getDate();
                    return firstDate - secondDate;
                  })
                  .slice(initPage, initPage + 5) || []
              }
            />
          </div>
          <div
            style={{
              width: '5rem',
            }}
          >
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
