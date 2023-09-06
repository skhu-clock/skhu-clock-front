import {useState} from 'react';
import styled from '@emotion/styled';
import { useWeatherAPi } from '@/hooks/useWeatherApi';
import List from '../Common/List';
import Skeleton from '../Common/Skeleton';
import type { WeatherApi } from '@/types';
import { Avatar } from '..';

const WeatherContainer = styled.div`
  width: 80px;
  background-color: #f1f1f1;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
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
`;
const WeatherRenderItem = ({ weather }: WeatherApi) => {
  return (
    <WeatherContainer>
      <WeatherTitle>{weather.forecastTime + '시'}</WeatherTitle>

      <WeatherContainer>
        <Avatar
          size={32}
          alt="이미지"
          mode="cover"
          shape="round"
          src="/sun.png"
        />
        <WeatherContent>{weather.temp + '도'}</WeatherContent>
      </WeatherContainer>
    </WeatherContainer>
  );
};

const WeatherList = () => {
  const { weather, isLoading } = useWeatherAPi();
  const [page,setPage] = useState<number>(0);

  return (
    <>
      {isLoading && <Skeleton.Box width={450} height={180} />}

      {!isLoading && (
        <List
          renderItem={WeatherRenderItem}
          items={weather || []}
          listStyle={{
            display: 'flex',
            gap: '5px',
            flexWrap: 'wrap',
          }}
        />
      )}
    </>
  );
};
export default WeatherList;
