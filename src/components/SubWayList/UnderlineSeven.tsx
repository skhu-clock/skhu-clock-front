import type { SubWayAPi } from '@/types';
import SUBWAY_MAP from '../constants/subway';
import styled from '@emotion/styled';

const UnderLineSeven = (item: SubWayAPi) => {
  const 호선 = SUBWAY_MAP.get(item.subway.subwayId + '');
  const lineWay = SUBWAY_MAP.get(item.subway.updnLine);

  return (
    <div>
      {호선 === '7호선' && lineWay === '하행' ? (
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

export default UnderLineSeven;

const LineLength = styled.div`
  overflow: hidden;
`;
