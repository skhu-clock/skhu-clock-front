import styled from '@emotion/styled';
import type { CrawlerAPi } from '@/types';
import ApiList from '../Domain/ApiList';
import Skeleton from '../Common/Skeleton';
import { useCrawlerAPi } from '@/hooks/useCrawler';
import { useState } from 'react';
import Image from 'next/image';

const NoticeLinkStyle = styled.a`
  width: 100%;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: inherit;
  text-decoration: none;
  text-align: left;

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
        <div>
          <div
            style={{
              width: '50%',
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
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '95%',
          }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '5rem',
                marginTop: '0.5rem',
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
              <div
                style={{
                  textAlign: 'center',
                }}
              >
                {initPage / 5 + 1}
              </div>
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
          </div>
        </div>
      )}
    </>
  );
};

export default NoticeList;
