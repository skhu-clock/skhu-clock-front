import { CSSProperties, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import type { Schedule } from '@/types';
import ApiList from '../Domain/ApiList';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const RenderCalenDarItem = (schedule: Schedule) => {
  return (
    <div style={{
      width: '13.5rem',
      height: '5rem',
    }}>
      {schedule.date} 
      <hr />
      <div style={{
        wordBreak: 'keep-all',
      }}>{schedule.txt}</div>
    </div>
  );
};

const BaseCalendar = () => {
  const [schedule, setSchedule] = useState<Schedule[] | null>(null);

  const [value, onChange] = useState<Value>(null);

  useEffect(() => {
    onChange(new Date());
    const fetchData = async () => {
      const res = await fetch('/api/schedule');

      if (res.ok) {
        const data = await res.json();

        const curDate = new Date().getMonth() + 1;

        const filteredSchedule = data.filter((item: Schedule) => {
          const newDate = item.date.replace(/[^0-9]/g, '').slice(0, 2);
          return curDate === Number(newDate);
        });

        setSchedule(filteredSchedule);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={calenderWarpper}>
      <section style={sectionStyle}>
        <h1 style={h1Style}>달력</h1>
        <h2 style={h2Style}>달력입니다</h2>
        <div style={calednerCenter}>
          <Calendar onChange={onChange} value={value} />
        </div>
      </section>
      <section style={sectionStyle}>
        <h1 style={h1Style}>학사일정</h1>
        <h2 style={h2Style}>이번 달 학사일정 세부내용을 보여드립니다</h2>
        <div style={innerContentDiv}>
          <ApiList
            items={schedule as Schedule[]}
            renderItem={RenderCalenDarItem}
          />
        </div>
      </section>
    </div>
  );
};
export default BaseCalendar;

const calenderWarpper: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  width: '100%',
  height: '100%',
  gap: '1rem',
};

const calednerCenter: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '100%',
  height: '100%',
};

const sectionStyle: CSSProperties = {
  fontWeight: 'normal',
  fontStyle: 'normal',
  width: '30rem',
  height: '30rem',
  display: 'flex',
  justifyContent: 'space-around',
  flexDirection: 'column',
  minHeight: '272px',
  backgroundColor: 'rgba(255,255,255,0.56)',
  color: 'black',
};

const h1Style: CSSProperties = {
  backgroundColor: 'white',
  color: 'black',
  fontWeight: '700',
  fontSize: '1.4rem',
  paddingLeft: '0.5rem',
  paddingBottom: '0.5rem',
};

const h2Style: CSSProperties = {
  fontSize: '1.2rem',
  padding: '0.625rem',
};

const innerContentDiv: CSSProperties = {
  background: 'rgba(255,255,255,0.8)',
  display: 'flex',
  width: '95%',
  margin: '1.25rem auto',
  borderRadius: '1rem',
  justifyContent: 'center',
  flex: 1,
};
