import styled from '@emotion/styled';
import type { SubWayAPi } from '@/types';
import List from '../Common/List';
import { useSubwayAPi } from '@/hooks/useSubWay';
import { useState } from 'react';

const renderNotice = (item: SubWayAPi) => {
  return (
    <div>
      <Link>{item.arvlCd}</Link>
    </div>
  );
};

export const Link = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    color: '#e1e1e1';
  }
`;

const NoticeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const SubwayList = () => {
  const { subway } = useSubwayAPi();
  const [initPage, setPage] = useState<number>(0);

  const handleClickNextPage = () => {
    if (initPage + 5 <= 15) setPage(initPage + 5);
  };

  const handleClickPrevPage = () => {
    if (initPage - 5 < 0) setPage(initPage - 5);
  };
  return (
    <>
      <NoticeWrapper>
        <List
          renderItem={renderNotice}
          items={subway || []}
          listStyle={{
            width: '350px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        />

        <div>
          <button onClick={handleClickPrevPage}>이전</button>
          {initPage / 5 + 1}
          <button onClick={handleClickNextPage}>이후</button>
        </div>
      </NoticeWrapper>
    </>
  );
};

export default SubwayList;
