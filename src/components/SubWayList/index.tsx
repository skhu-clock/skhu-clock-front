import styled from '@emotion/styled';
import type { SubWayAPi } from '@/types';
import ApiList from '../Domain/ApiList';
import Image from 'next/image';
import { useSubwayAPi } from '@/hooks/useSubWay';
import { useState } from 'react';
import Skeleton from '../Common/Skeleton';

const ButtonLists = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
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
  const [page, setPage] = useState<number>(0);
  const [fetchFlag, setFetchFlag] = useState<boolean>(false);
  const { subway, isLoading } = useSubwayAPi(fetchFlag);

  const handleClickFetchButton = () => {
    setFetchFlag(!fetchFlag);
  };

  const handleClickPrevPage = () => {
    if (subway && page - 2 < 0) {
      return;
    }
    setPage(page - 1);
  };

  const handleClickNextPage = () => {
    if (subway && page + 2 > subway?.length) {
      return;
    }
    setPage(page + 1);
  };

  return (
    <>
      {isLoading && <Skeleton.Box width={450} height={180} />}

      {!isLoading && (
        <>
          <ApiList
            renderItem={renderSubWay}
            items={subway?.slice(page, page + 2) || []}
          />

          <ButtonLists>
            <Image
              onClick={handleClickFetchButton}
              src="/reload.png"
              style={{
                cursor: 'pointer',
              }}
              alt="다시로드하는 이미지"
              width={30}
              height={30}
            />

            <button onClick={handleClickPrevPage}>이전</button>
            <button onClick={handleClickNextPage}>다음</button>
          </ButtonLists>
        </>
      )}
    </>
  );
};

export default SubwayList;
