import styled from '@emotion/styled';
import Image from 'next/image';
import { useState, useEffect, MouseEvent } from 'react';

interface SubwayInfo {
  subwayId: number;
  updnLine: string;
  trainLineNm: string;
  arvlMsg1: string;
  arvlMsg2: string;
  arvlCd: number;
}

interface SubwayData {
  subway: SubwayInfo[];
  updnLine: string;
  subwayId: string;
}

const SubwayList = () => {
  const [fetchFlag, setFetchFlag] = useState<boolean>(false);
  const [subwayData, setSubwayData] = useState<SubwayData[]>([]);

  const fetchData = async () => {
    try {
      // 데이터를 가져오는 비동기 처리 (예: fetch, axios 등 사용)
      const response = await fetch('/api/subway');
      const data = await response.json();
      await setSubwayData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    // 컴포넌트가 마운트될 때 데이터를 가져옴
    fetchData();
  }, [fetchFlag]);

  // 새로고침
  const handleClickFetchButton = (e: MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    setFetchFlag(!fetchFlag);
  };

  return (
    <div>
      <ButtonLists onClick={handleClickFetchButton}>
        <Image
          src="/reload.png"
          style={{
            cursor: 'pointer',
          }}
          alt="다시로드하는 이미지"
          width={30}
          height={30}
        />
      </ButtonLists>
      <ul
        style={{
          display: 'flex',
          gap: '1rem',
          margin: '1rem',
        }}
      >
        {subwayData.map((item, index) => (
          <EverySubwayLine key={index}>
            <LineColor line={item.subwayId}>{`${item.subwayId}`}</LineColor>
            <Lineway>{item.updnLine}</Lineway>
            <ul
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}
            >
              {item.subway.map((subwayInfo, subwayIndex) => (
                <li key={subwayIndex}>
                  <p>
                    {subwayInfo.arvlMsg1.length < 7 ? (
                      <span>{subwayInfo.arvlMsg1}</span>
                    ) : (
                      <span
                        style={{
                          wordBreak: 'keep-all',
                        }}
                      >
                        {subwayInfo.arvlMsg2} 도착
                      </span>
                    )}
                  </p>
                </li>
              ))}
            </ul>
          </EverySubwayLine>
        ))}
      </ul>
    </div>
  );
};

export default SubwayList;

const EverySubwayLine = styled.li`
  width: 6rem;
`;

const ButtonLists = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1rem;
  margin-right: 1rem;

  gap: 1rem;
`;

const LineColor = styled.h2<{ line: string }>`
  font-weight: 700;
  color: ${(props) => (props.line === '1호선' ? '#0052A4' : '#747F00')};
`;

const Lineway = styled.p`
  width: 5rem;
  font-weight: 700;
  text-align: left;
  margin-bottom: 0.5rem;
`;
