import { useWeatherAPi } from '@/hooks/useWeatherApi';
import ApiList from '../Domain/ApiList';
import type { WeatherApi } from '@/types';

const WeatherRenderItem = ({ weather }: WeatherApi) => {
  return <div>{weather.forecastTime}</div>;
};

const WeatherList = () => {
  const { weather } = useWeatherAPi();

  return (
    <>
      <ApiList
        items={weather || ([] as WeatherApi[])}
        renderItem={WeatherRenderItem}
      />
    </>
  );
};
export default WeatherList;
