import Instance from '@/constants';
import { useState, useEffect } from 'react';
import type { WeatherApi } from '@/types/index';

export const useWeatherAPi = () => {
  const [weather, setWeather] = useState<WeatherApi | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const res = await Instance.get('/api/weather');
      setWeather(res.data);
    };

    fetchWeather();
  }, []);

  return { weather };
};
