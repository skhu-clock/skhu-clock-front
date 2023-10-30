import { CSSProperties } from 'react';
import { useEffect, useState } from 'react';

const CurTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timeid = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timeid);
  }, []);

  return (
    <div style={clockStyle}>
      {time.getHours()} : {time.getMinutes()}
    </div>
  );
};

export default CurTime;

const clockStyle: CSSProperties = {
  fontSize: '8rem',
  color: 'white',
  fontWeight: 'bold',
  textShadow: '0 0 10px rgba(0,0,0,0.8)',
};