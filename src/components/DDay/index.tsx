import { CSSProperties } from 'react';
import { useEffect, useState } from 'react';

const DDay = () => {
  const setDate = new Date('2023-12-18');
  const today = new Date();

  const dis = setDate.getTime() - today.getTime();
  const min = 1000 * 60;

  const d = Math.floor(dis / (min * 60 * 24));
  const h = Math.floor((dis % (min * 60 * 24)) / (min * 60));
  const m = Math.floor((dis % (min * 60)) / min);
  const s = Math.floor((dis % min) / 1000);

  const [day, setDay] = useState(d);
  const [hour, setHour] = useState(h);
  const [minute, setMinute] = useState(m);
  const [second, setSecond] = useState(s);

  useEffect(() => {
    const timer = setInterval(() => {
      if (second > 0) {
        setSecond(second - 1);
      }

      if (second === 0) {
        if (minute === 0) {
          if (hour === 0) {
            if (day === 0) {
              clearInterval(timer);
            } else {
              setDay(day - 1);
              setHour(23);
              setMinute(59);
              setSecond(59);
            }
          } else {
            setHour(hour - 1);
            setMinute(59);
            setSecond(59);
          }
        } else {
          setMinute(minute - 1);
          setSecond(59);
        }
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [day, hour, minute, second]);

  return (
    <div style={DdayStyle}>
      {day.toString().padStart(2, '0')}일 {hour.toString().padStart(2, '0')}시{' '}
      {minute.toString().padStart(2, '0')}분{' '}
      {second.toString().padStart(2, '0')}초
    </div>
  );
};

export default DDay;

const DdayStyle: CSSProperties = {
  fontSize: '3rem',
  color: 'red',
  textShadow: '0 0 10px rgba(0,0,0,0.8)',
  fontWeight: '700',
};
