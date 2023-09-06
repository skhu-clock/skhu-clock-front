import { CSSProperties, ComponentProps } from 'react';

export type ButtonProps = ComponentProps<'button'> & {
  primary?: 'primary' | 'secondary' | 'danger';
  round?: boolean;
  disabled?: boolean;
  outlined?: boolean;
};

export type WeatherApi = {
  weather: {
    temp: string;
    precipitation: string;
    humid: string;
    sky: string;
    forecastTime: string;
  };
};

export type AvatarProps = ComponentProps<'button'> & {
  icon?: React.ReactNode;
  size: number;
};

export type SubWayAPi = {
  subway: {
    subwayId: number;
    updnLine: string;
    trainLineNm: string;
    statnNm: string;
    arvlMsg1: string;
    arvlMsg2: string;
    arvlMsg3: string;
    arvlCd: number;
  };
};

export type CrawlerAPi = {
  articleNum: string;
  number: string;
  status: string;
  title: string;
  writeDate: string;
  author: string;
  views: number;
  url: string;
};

export type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  listStyle?: CSSProperties;
};

export type Schedule = {
  date: string;
  txt: string;
};

export type CurTimeProps = {
  year: number;
  month: number;
  date: number;
  hour: number;
};
