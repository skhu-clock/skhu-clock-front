import type { GetServerSideProps } from 'next';
import React, { useState, useEffect, CSSProperties } from 'react';
import { BaseItem, BaseCalendar, Avatar, CurTime } from '@/components';
import page from '@/components/constants/page';

import type { Schedule } from '@/types';

export const getServerSideProps: GetServerSideProps<{
  data: Schedule[];
  endDate: string | null;
}> = async () => {
  try {
    const res = await fetch('https://skhuclock.duckdns.org/api/schedule');

    if (res.ok) {
      const data = (await res.json()) as Schedule[];
      const endDateData = data.find((eachData) =>
        eachData.txt.includes('2학기 종강일')
      );

      const parseDate = endDateData?.date?.match(/\d+/g)?.join('');

      return { props: { data, endDate: parseDate || null } };
    } else {
      // Handle the case when the response is not OK
      console.error('Failed to fetch data');
      return { props: { data: [], endDate: null } };
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return { props: { data: [], endDate: null } };
  }
};

export default function Home() {
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
    if (typeof window !== 'undefined') {
      window.addEventListener('wheel', handleWheelEvent);
    }
    return () => window.removeEventListener('wheel', handleWheelEvent);
  }, []);

  const containerStyles: CSSProperties = {
    position: 'absolute',
    zIndex: '1',
    margin: '0 auto',
    justifyContent: 'center',
    display: 'flex',
    gap: '15px',
    flexWrap: 'wrap',
    maxWidth: '80%',
    animation: 'fadeIn 1s linear',
    opacity: curPage ? 0 : 1,
  };

  return (
    <>
      <br />
      <div style={{ ...containerStyles }}>
        {page.map(({ item }) => (
          <BaseItem
            key={item.title}
            title={item.title}
            subtitle={item.subtitle}
            innerContent={item.innerContent()}
          />
        ))}
      </div>

      {curPage && (
        <>
          <CurTime
            year={new Date().getFullYear()}
            month={new Date().getMonth()}
            date={new Date().getDate()}
            hour={new Date().getHours()}
          />
          <Avatar src="/subway.png" size={50} alt="아바타" />
          <BaseCalendar />
        </>
      )}
    </>
  );
}
