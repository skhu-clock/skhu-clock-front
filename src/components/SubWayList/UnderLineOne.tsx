import type { SubWayAPi } from '@/types';
import SUBWAY_MAP from '../constants/subway';
import styled from '@emotion/styled';
import { useSubwayAPi } from '@/hooks/useSubWay';
import { useState } from 'react';
/*
1. 각 호선별로 색상을 다르게 표시하기위한  1001, 1007 분류
2. 각 호선별로 상행 하행을 분류
3. 상행 APIList, 하행 APIList를 각 호선별로 적용
4. 총 4개의 APIList를 만들어서 각 호선별로 상행 하행을 분류
*/

const UnderLineOne = () => {
  // map test
  const [fetchFlag, setFetchFlag] = useState<boolean>(false);
  const { subway } = useSubwayAPi(fetchFlag);
  console.log(subway);
  const 첫번째호선하행 = subway?.filter(
    (item) => item.subway.subwayId === 1001 && item.subway.updnLine === '하행'
  );

  const 첫번쨰호선상행 = subway?.filter(
    (item) => item.subway.subwayId === 1001 && item.subway.updnLine === '상행'
  );

  const 일곱번째호선호선하행 = subway?.filter(
    (item) => item.subway.subwayId === 1007 && item.subway.updnLine === '하행'
  );

  const 일곱번째호선상행 = subway?.filter(
    (item) => item.subway.subwayId === 1007 && item.subway.updnLine === '상행'
  );

  console.log(
    첫번쨰호선상행,
    첫번째호선하행,
    일곱번째호선호선하행,
    일곱번째호선상행
  );
  // const 호선 = SUBWAY_MAP.get(item.subway.subwayId + '');
  // const lineWay = SUBWAY_MAP.get(item.subway.updnLine);

  return (
    <div>
      {첫번째호선하행 &&
        첫번째호선하행?.map((item) => (
          <div key={item.subway.arvlMsg2}>{item.subway.arvlMsg1}</div>
        ))}
    </div>
  );
};

export default UnderLineOne;
/*
  원래 div내부 코드
      {호선 === '1호선' && lineWay === '하행' ? (
        <div>
          {item.subway.arvlMsg1.length < 7 ? (
            <LineLength>{item.subway.arvlMsg1}</LineLength>
          ) : (
            <div>{item.subway.arvlMsg2} 도착</div>
          )}
        </div>
      ) : (
        <span></span>
      )}
 */

const LineLength = styled.div`
  overflow: hidden;
`;
