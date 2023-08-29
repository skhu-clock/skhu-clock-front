import styled from '@emotion/styled';
import type { SubWayAPi } from '@/types';
import ApiList from '../Domain/ApiList';
import { useState } from 'react';
import { useSubwayAPi } from '@/hooks/useSubWay';
import Image from 'next/image';
const renderSubWay = (item: SubWayAPi) => {
  return (
    <div>
      <Image src="/subway.png" width={30} height={30} alt="지하철 이미지" />
      <div>노선 : {item.subway.trainLineNm}</div>
      <div>방향 : {item.subway.updnLine}</div>
      <div>상태 : {item.subway.arvlMsg1}</div>
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

const SubwayList = () => {
  const { subway } = useSubwayAPi();
  const [page, setPage] = useState<number>(0);

  return (
    <>
      <ApiList
        renderItem={renderSubWay}
        items={subway?.slice(page, page + 2) || []}
      />
      <div>
        <button
          onClick={() => {
            setPage(page - 1);
          }}
        >
          이전
        </button>
        <button
          onClick={() => {
            setPage(page + 1);
          }}
        >
          다음
        </button>
      </div>
    </>
  );
};

export default SubwayList;
