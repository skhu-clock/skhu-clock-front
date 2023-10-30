import { MenuList, NoticeList, SubwayList, WeatherList, BaseCalendar } from '@/components';
import RestaruarntList from '../Restaurant';

type Page = {
  item: {
    title: string;
    subtitle: string;
    innerContent: () => JSX.Element;
  };
};

const firstPage: Page[] = [
  {
    item: {
      title: '학사공지',
      subtitle: '* 최근 올라온 15개의 학사 공지를 보여드립니다.',
      innerContent: NoticeList,
    },
  },
  {
    item: {
      title: '학사 일정',
      subtitle: '',
      innerContent: BaseCalendar,
    },
  },
];

const page: Page[] = [
  {
    item: {
      title: '오늘의 날씨정보',
      subtitle: '',
      innerContent: WeatherList,
    },
  },
  {
    item: {
      title: '다음지하철',
      subtitle: '지하철을 확인할 수 있습니다.',
      innerContent: SubwayList,
    },
  },
];

const lastPage: Page[] = [
  {
    item: {
      title: '국수나무메뉴',
      subtitle: '국순나무 메뉴를 확인할 수 있습니다.',
      innerContent: MenuList,
    },
  },
  // {
  //   item: {
  //     title: '근처 식당',
  //     subtitle: '성공회대 반경 800M 이내의 식당을 확인할 수 있습니다.',
  //     innerContent: RestaruarntList,
  //   },
  // },
];

const PAGE = {
  firstPage,
  page,
  lastPage,
};

export default PAGE;
