import ScheduleList from '../ScheduleList';


type Page = {
  item: {
    title: string;
    subtitle: string;
    innerContent: () => JSX.Element;
  };
};

const schedulePage: Page[] = [
  {
    item: {
      title: '학사일정',
      subtitle: '이번달의 학사일정을 보여드립니다.',
      innerContent: ScheduleList,
    },
  },
];

export default schedulePage;