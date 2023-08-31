import Instance from '@/constants';
import { useState, useEffect } from 'react';
import type { WeatherApi } from '@/types/index';

export const useWeatherAPi = () => {
  const [weather, setWeather] = useState<WeatherApi[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchWeather = async () => {
      const res = await fetch('/api/weather');
      if (res.ok) {
        setWeather(await res.json());
      }
    };

    fetchWeather().finally(() => setIsLoading(false));
  }, []);

  return { weather, isLoading };
};
