import styled from '@emotion/styled';
import { useWeatherAPi } from '@/hooks/useWeatherApi';
import List from '../Common/List';
import Skeleton from '../Common/Skeleton';
import type { WeatherApi } from '@/types';
import { Avatar } from '..';
import Image from 'next/image';

const WeatherRenderItem = ({ weather }: WeatherApi) => {
  /*
  1. 날씨 데이터를 받아온다.
  2. 날씨 데이터의 SKY 값이 어떤지 확인한다.
  3. SKY 값에 따라 다른 이미지를 표시한다.
  4. 현재는 렌더링이 너무 많이 되어 오류가 발생한다.
  */
  return (
    <WeatherContainer>
      <WeatherTitle>{weather.forecastTime.slice(0,-2) + '시'}</WeatherTitle>
      <WeatherContainer>
        {Number(weather.precipitation) > 70 ? (
          <Avatar
            size={100}
            alt="이미지"
            mode="cover"
            shape="round"
            src={'/rainy.png'}
          />
        ) : Number(weather.sky) === 4 || Number(weather.sky) === 3 ? (
          <Avatar
            size={100}
            alt="이미지"
            mode="cover"
            shape="round"
            src={'/cloudy.png'}
          />
        ) : (
          <Image width={100} height={100} alt="이미지" src={'/sunnyday.png'} />
        )}
        <WeatherContent>{weather.temp + '도'}</WeatherContent>
        <p>강수:{weather.precipitation}%</p>
      </WeatherContainer>
    </WeatherContainer>
  );
};

const WeatherList = () => {
  const { weather, isLoading } = useWeatherAPi();

  return (
    <>
      {isLoading && <Skeleton.Box width={700} height={180} />}

      {!isLoading && (
        <List
          renderItem={WeatherRenderItem}
          items={weather?.slice(0, 5) || []}
          listStyle={{
            display: 'flex',
            alignItems: 'center',
          }}
        />
      )}
    </>
  );
};
export default WeatherList;

const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 11rem;
  height: 11rem;
  margin: 0 auto;
  padding-bottom: 1rem;
  flex: 1;

`;

const WeatherTitle = styled.div`
  color: black;
  font-weight: 700;
  font-size: 18px;
`;

const WeatherContent = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  justify-content: center;
  align-items: center;
`;
