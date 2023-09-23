import type { SubWayAPi } from '@/types';
import SUBWAY_MAP from '../constants/subway';
import styled from '@emotion/styled';
/*
1. 각 호선별로 색상을 다르게 표시하기위한  1001, 1007 분류
2. 각 호선별로 상행 하행을 분류
3. 상행 APIList, 하행 APIList를 각 호선별로 적용
4. 총 4개의 APIList를 만들어서 각 호선별로 상행 하행을 분류
*/

const UnderLineOne = (item: SubWayAPi) => {
  const 호선 = SUBWAY_MAP.get(item.subway.subwayId + '');
  const lineWay = SUBWAY_MAP.get(item.subway.updnLine);

  return (
    <div>
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
    </div>
  );
};

export default UnderLineOne;

const LineLength = styled.div`
  overflow: hidden;
`;