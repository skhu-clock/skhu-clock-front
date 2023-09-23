import { useState } from 'react';
import styled from '@emotion/styled';
import { useWeatherAPi } from '@/hooks/useWeatherApi';
import List from '../Common/List';
import Skeleton from '../Common/Skeleton';
import type { WeatherApi } from '@/types';
import { Avatar } from '..';

const WeatherRenderItem = ({ weather }: WeatherApi) => {
  const [sky, setSky] = useState<string>('');
  /*
  1. 날씨 데이터를 받아온다.
  2. 날씨데이터의 SKY값을 받아온다.
  3. SKY값에 따라서 이미지를 다르게 보여준다.
  4. 현재는 렌더링이 너무 많이 돼서 에러가 난다.
  */
  // if (weather.sky === '1') {
  //   setSky('/sunnyday.png');
  // } else if (weather.sky === '3') {
  //   setSky('/cloudy.png');
  // } else setSky('/rainy.png');

  return (
    <WeatherContainer>
      <WeatherTitle>{weather.forecastTime + '시'}</WeatherTitle>

      <WeatherContainer>
        <Avatar size={32} alt="이미지" mode="cover" shape="round" src={'/sunnyday.png'} />
        <WeatherContent>{weather.temp + '도'}</WeatherContent>
      </WeatherContainer>
    </WeatherContainer>
  );
};

const WeatherList = () => {
  const { weather, isLoading } = useWeatherAPi();

  return (
    <>
      {isLoading && <Skeleton.Box width={450} height={180} />}

      {!isLoading && (
        <List
          renderItem={WeatherRenderItem}
          items={weather?.slice(0, 4) || []}
          listStyle={{
            display: 'flex',
          }}
        />
      )}
    </>
  );
};
export default WeatherList;

const WeatherContainer = styled.div`
  width: 80px;
  background-color: #f1f1f1;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const WeatherTitle = styled.div`
  background-color: white;
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