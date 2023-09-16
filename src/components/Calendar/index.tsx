import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const BaseCalendar = () => {
  const [value, onChange] = useState<Value>(null);

  useEffect(() => {
    onChange(new Date());
  }, []);

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};
export default BaseCalendar;
