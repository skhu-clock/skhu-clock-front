import styled from '@emotion/styled';
import type { CrawlerAPi } from '@/types';
import ApiList from '../Domain/ApiList';
import Skeleton from '../Common/Skeleton';
import { useCrawlerAPi } from '@/hooks/useCrawler';
import { useState } from 'react';
import Image from 'next/image';

const NoticeLinkStyle = styled.a`
  width: 20rem;
  padding: 0 0.3125rem;
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
    <div className="notice-item">
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
        <Skeleton.Box width={700} height={180} />
      ) : (
        <>
          <div
            style={{
              width: '21.875rem',
            }}
          >
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
              display: 'flex',
              justifyContent: 'center',
              width: '5rem',
            }}
          >
            <Image
              src="/left.png"
              width={30}
              height={30}
              onClick={handleClickPrevPage}
              alt={''}
              style={{
                cursor: 'pointer',
              }}
            ></Image>
            {initPage / 5 + 1}
            <Image
              src="/righth.png"
              width={30}
              height={30}
              onClick={handleClickNextPage}
              alt={''}
              style={{
                cursor: 'pointer',
              }}
            ></Image>
          </div>
        </>
      )}
    </>
  );
};

export default NoticeList;

const BtnStyle = styled.button`
  all: unset;
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid #dadada;
  border-radius: 50%;
  background-color: #d1d1d1;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
