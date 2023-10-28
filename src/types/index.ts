import { CSSProperties, ComponentProps } from 'react';

export type ButtonProps = ComponentProps<'button'> & {
  primary?: 'primary' | 'secondary' | 'danger';
  round?: boolean;
  disabled?: boolean;
  outlined?: boolean;
};
export type MenuAPi = {
  id:string;
  name:string;
  price:number;
}

export type ResturantApi = { 
  id:number
  distannce:number
  categoryName:string
  distance:number
  placeUrl: string,
  name: string,
  addressName: string,
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
  [x: string]: any;
  forEach: any;
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
