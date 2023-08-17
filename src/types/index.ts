export type WeatherApi = {
  temp: string;
  precipitation: string;
  humid: string;
  sky: string;
  forecastTime: string;
};

export type SubWayAPi = {
  subwayId: number;
  updnLine: string;
  trainLineNm: string;
  statnNm: string;
  arvlMsg2: string;
  arvlMsg3: string;
  arvlCd: number;
};

export type CrawlerAPi = {
  articleName: string;
  number: string;
  status: string;
  title: string;
  writeDate: string;
  author: string;
  views: number;
  url: string;
};
