import styled from '@emotion/styled';
import Image from 'next/image';
import { useSubwayAPi } from '@/hooks/useSubWay';
import { useState, CSSProperties } from 'react';
import Skeleton from '../Common/Skeleton';
import SubwayTitle from '../Domain/SubwayTitle';
// import SubwaySeven from '../Domain/SubWaySeven';
import UplineOne from './UplineOne';
import UplineSeven from './UplineSeven';
import UnderLineOne from './UnderLineOne';
import UnderLineSeven from './UnderlineSeven';

const SubwayList = () => {
  const [page, setPage] = useState<number>(0);
  const [fetchFlag, setFetchFlag] = useState<boolean>(false);
  const { subway, isLoading } = useSubwayAPi(fetchFlag);

  // 페이지네이션
  // 새로고침
  const handleClickFetchButton = () => {
    setFetchFlag(!fetchFlag);
  };

  // 이전 페이지
  const handleClickPrevPage = () => {
    if (subway && page - 1 <= 0) {
      return;
    }
    setPage(page - 1);
  };

  // 다음페이지
  const handleClickNextPage = () => {
    if (subway && page + 2 > subway?.length) {
      return;
    }
    setPage(page + 1);
  };

  return (
    <div style={subwayStyles}>
      <div style={subwayTitleWrapperStyles}>
        <div style={subwayTitleListStyles}>
          <LineNo1>1호선</LineNo1>
          <div style={subwayLinewayStyles}>
            <Lineway>역곡 방면</Lineway>
            <Lineway>오류동 방면</Lineway>
          </div>
        </div>
        <div style={subwayTitleListStyles}>
          <LineNo7>7호선</LineNo7>
          <div style={subwayLinewayStyles}>
            <Lineway>까치울 방면</Lineway>
            <Lineway>천왕 방면</Lineway>
          </div>
        </div>
      </div>
      {isLoading && <Skeleton.Box width={450} height={180} />}

      {!isLoading && (
        <div>
          <div style={subwayListStyles}>
            <SubwayTitle
              renderItem={UplineOne}
              items={subway?.slice(0, 5) || []}
            />
            <SubwayTitle
              renderItem={UnderLineOne}
              items={subway?.slice(0, 5) || []}
            />
            <SubwayTitle
              renderItem={UplineSeven}
              items={subway?.slice(0, 5) || []}
            />
            <SubwayTitle
              renderItem={UnderLineSeven}
              items={subway?.slice(0, 5) || []}
            />
          </div>
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
          </ButtonLists>
        </div>
      )}
    </div>
  );
};

export default SubwayList;

const subwayStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const subwayTitleWrapperStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  gap: '2rem',
  
};

const subwayTitleListStyles: CSSProperties = {
  display: 'flex',
  width: '12rem',
  flexDirection: 'column',
  textAlign: 'left',
  marginBottom: '1rem',
};

const subwayLinewayStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  textAlign: 'left',
};

const subwayListStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  gap: '2rem',
};

const ButtonLists = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const LineNo1 = styled.div`
  font-weight: 700;
  color: #0052a4;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;

const LineNo7 = styled.div`
  font-weight: 700;
  color: #747f00;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;

const Lineway = styled.div`
  width: 5rem;
  font-weight: 700;
  text-align: left;
`;
