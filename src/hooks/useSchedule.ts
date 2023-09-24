import { useState, useEffect } from 'react';
import type { Schedule } from '@/types';

const useSchedule = () => {
  const [schedule, setSchedule] = useState<Schedule[] | null>(null);

  useEffect(() => {
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

  return { schedule };
};

export default useSchedule;
