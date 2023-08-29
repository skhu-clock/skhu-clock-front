import React, { useState, useEffect } from 'react';
import BaseItem from '@/components/BaseItem';
import DateCalendar from '@/components/DDay';
import NoticeList from '@/components/NoticeList';
import SubwayList from '@/components/SubWayList';
import ScheduleList from '@/components/ScheduleList';
import BaseCalendar from '@/components/Calendar';
import type { Schedule } from '@/types';

export const getStaticProps = async () => {
  const res = await fetch('http://skhuclock.duckdns.org/api/schedule');
  if (res.ok) {
    const data = await res.json();
    return { props: { data } };
  }
};

export default function Home({ data }: { data: Schedule[] }) {
  const endSemester = data.filter((eachData) =>
    eachData.txt.includes('2학기 종강일,')
  );

  const endDate = endSemester[0].date;

  const fadeInAnimation = {
    animation: 'fadeIn 1s linear',
    '@keyframes fadeIn': {
      '0%': { opacity: 0 },
      '50%': { opacity: 0.5 },
      '100%': { opacity: 1 },
    },
  };
  const [curPage, setCurPage] = useState(false);

  const handleWheelEvent = (event: WheelEvent) => {
    const wheel = event.deltaY;

    if (wheel > 0) {
      setCurPage(false);
    } else {
      setCurPage(true);
    }
  };
  useEffect(() => {
    window.addEventListener('wheel', handleWheelEvent);
    return () => window.removeEventListener('wheel', handleWheelEvent);
  }, []);

  return (
    <>
      <h2 style={{ fontSize: '3rem', fontWeight: '700' }}>
        다음 종강일 : {endDate}
      </h2>
      <br />
      {curPage === false && (
        <div
          style={{
            margin: '0 auto',
            display: 'flex',
            gap: '15px',
            flexWrap: 'wrap',
            maxWidth: '80%',
            ...fadeInAnimation,
          }}
        >
          <BaseItem
            title="학사공지"
            subtitle="최근 올라온 15개의 학사공지를 보여드립니다."
            innerContent={<NoticeList />}
          />
          <BaseItem
            title="다음지하철"
            subtitle="지하철을 확인할 수 있습니다."
            innerContent={<SubwayList />}
          />
          <BaseItem title="" subtitle="" innerContent={<ScheduleList />} />
          <DateCalendar />
        </div>
      )}

      {curPage && <BaseCalendar />}
    </>
  );
}
