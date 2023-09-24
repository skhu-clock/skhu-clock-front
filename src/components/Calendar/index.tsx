import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import type { Schedule } from '@/types';
import ApiList from '../Domain/ApiList';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const RenderCalenDarItem = (schedule: Schedule) => {
  return (
    <div>
      {schedule.date} <div>{schedule.txt}</div>
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

        const curDate = new Date().getMonth();
        const filteredSchedule = data.filter((item: Schedule) => {
          const itemDate = new Date(item.date);
          return itemDate.getMonth() === curDate;
        });

        setSchedule(filteredSchedule);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
      <div>
        <ApiList
          items={schedule as Schedule[]}
          renderItem={RenderCalenDarItem}
        />
      </div>
    </div>
  );
};
export default BaseCalendar;
