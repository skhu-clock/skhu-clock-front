import React, { useState, useEffect } from 'react';
import { BaseItem, BaseCalendar, Avatar } from '@/components';
import page from './constants';

import calcuateDateDIff from '@/utils/calculateDateDiff';
import type { Schedule } from '@/types';

export const getStaticProps = async () => {
  const res = await fetch('http://skhuclock.duckdns.org/api/schedule');
  if (res.ok) {
    const data = (await res.json()) as Schedule[];
    const endDate = data.filter((eachData) =>
      eachData.txt.includes('2학기 종강일')
    );
    const parseDate = endDate[0].date.match(/\d+/g)?.join('');

    return { props: { data, endDate: parseDate } };
  }
};

export default function Home({ endDate }: { endDate: string | null }) {
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
      <br />
      {curPage === false && (
        <div
          style={{
            position: 'absolute',
            zIndex: '1',
            margin: '0 auto',
            justifyContent: 'center',
            display: 'flex',
            gap: '15px',
            flexWrap: 'wrap',
            maxWidth: '80%',
            ...fadeInAnimation,
          }}
        >
          {page.map(({ item }) => {
            return (
              <BaseItem
                key={item.title}
                title={item.title}
                subtitle={item.subtitle}
                innerContent={item.innerContent()}
              />
            );
          })}
        </div>
      )}

      {curPage && (
        <>
          <Avatar src="/subway.png" size={50} alt="아바타" />
          <BaseCalendar />
        </>
      )}
    </>
  );
}
