import { CSSProperties } from 'react';

export type WeatherApi = {
  temp: string;
  precipitation: string;
  humid: string;
  sky: string;
  forecastTime: string;
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
