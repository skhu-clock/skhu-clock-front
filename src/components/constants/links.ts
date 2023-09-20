type Links = {
  item: {
    title: string;
    link: string;
    emoji: string;
  };
};

const links: Links[] = [
  {
    item: {
      title: '홈페이지',
      link: 'https://www.skhu.ac.kr',
      emoji: '🎓',
    },
  },
  {
    item: {
      title: 'LMS',
      link: 'https://lms.skhu.ac.kr',
      emoji: '📋',
    },
  },
  {
    item: {
      title: '중앙도서관',
      link: 'https://ebook.skhu.ac.kr',
      emoji: '📖',
    },
  },
  {
    item: {
      title: '종정시',
      link: 'https://portal.skhu.ac.kr',
      emoji: 'ℹ️',
    },
  },
  {
    item: {
      title: '학사일정',
      link: 'https://www.skhu.ac.kr/skhu/4166/subview.do',
      emoji: '📅',
    },
  },
];

export default links;
