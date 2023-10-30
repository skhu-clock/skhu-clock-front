import { CSSProperties, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import type { Schedule } from '@/types';
import ApiList from '../Domain/ApiList';
import { styled } from '@mui/material';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const RenderCalenDarItem = (schedule: Schedule) => {
  return (
    <div
      style={{
        width: '40rem',
        height: '3rem',
      }}
    >
      <p style={{ fontWeight: 'bold' }}>{schedule.date}</p>
      <hr />
      <div
        style={{
          wordBreak: 'keep-all',
          fontWeight: 'nomal',
        }}
      >
        {schedule.txt}
      </div>
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
    <div style={calTextWarpper}>
      <div style={calenderWarpper}>
        <div style={calednerCenter}>
          <StyleCalendar onChange={onChange} value={value} />
        </div>
      </div>
      <div style={innerContentDiv}>
        <ApiList
          items={schedule as Schedule[]}
          renderItem={RenderCalenDarItem}
        />
      </div>
    </div>
  );
};
export default BaseCalendar;

const calTextWarpper: CSSProperties = {
  display: 'flex',
  justifyContent: 'flx-start',
  alignItems: 'center',
  flexDirection: 'row',
};

const calenderWarpper: CSSProperties = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  flexDirection: 'row',
  width: '14rem',
  height: '50%',
  gap: '1rem',

  paddingRight: '2rem',
  paddingBottom: '1rem',
};

const calednerCenter: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '100%',
  height: '50%',
};

const innerContentDiv: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  width: '95%',
  borderRadius: '1rem',
  flex: 1,
  paddingBottom: '2rem',

};

// react-calendar 스타일
const StyleCalendar = styled(Calendar)`
  width: 100px;
  border: none;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 25px;

  .react-calendar__navigation {
    display: flex;
    height: 24px;
    margin-bottom: 1em;
  }

  .react-calendar__navigation button {
    min-width: 24px;
    background-color: none;
  }

  .react-calendar__navigation button:disabled {
    background-color: #e8e8e8;
  }

  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #e8e8e8;
    border-radius: 7px;
  }

  /* 일별 텍스트사이즈 */
  .react-calendar__month-view__days__day {
    font-size: 0.6rem;
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.625rem;
  }

  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    padding: 1.2em 0.5em;
  }

  /* 일별 셀 패딩 */
  .react-calendar__tile {
    padding: 0.1rem;
    border-radius: 7px;
  }

  .react-calendar__tile--hasActive {
    color: #ffffff;
    background-color: #797979;
    border-radius: 7px;
  }

  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background-color: #797979;
    border-radius: 7px;
  }

  .react-calendar__tile--active {
    color: #ffffff;
    background-color: #6a6a6a;
    border-radius: 7px;
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background-color: #6a6a6a;
    border-radius: 7px;
  }
`;
