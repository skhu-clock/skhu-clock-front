import { useState, useEffect } from 'react';
import type { Schedule } from '@/types';

const useSchedule = () => {
  const [schedule, setSchedule] = useState<Schedule[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/schedule');
      if (res.ok) {
        const data = await res.json();
        setSchedule(data);
      }
    };

    fetchData();
  }, []);

  return { schedule };
};

export default useSchedule;
