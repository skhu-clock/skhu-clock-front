import { NoticeList, SubwayList, WeatherList } from '@/components';

type Page = {
  item: {
    title: string;
    subtitle: string;
    innerContent: () => JSX.Element;
  };
};

const page: Page[] = [
  {
    item: {
      title: '학사공지',
      subtitle: '최근 올라온 15개의 학사 공지를 보여드립니다.',
      innerContent: NoticeList,
    },
  },
  {
    item: {
      title: '다음지하철',
      subtitle: '지하철을 확인할 수 있습니다.',
      innerContent: SubwayList,
    },
  },
  {
    item: {
      title: '날씨정보',
      subtitle: '날씨 정보를 확인할 수 있습니다.',
      innerContent: WeatherList,
    },
  },
];

export default page;
