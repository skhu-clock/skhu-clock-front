import type { CurTimeProps } from '@/types';

const CurTime = ({ year, month, date, hour }: CurTimeProps) => {
  const HOUR_MESSAGE = () => {
    if (hour >= 12 && hour <= 17) {
      return '좋은 오후입니다, ☕ 한잔 어떠신가요';
    }
    if (hour >= 18 && hour <= 20) {
      return '행복한 저녁보내세요 🍯';
    }

    if (hour >= 21 && hour <= 24) {
      return '오늘도 고생하셨어요 😊';
    }
  };

  return (
    <div
      style={{
        fontSize: '1.875rem',
        color: '#fff',
      }}
    >
      <div>{year + ' ' + month + ' ' + date}</div>
      <div
        style={{
          fontSize: '1.75rem',
          color: '#fff',
        }}
      >
        {HOUR_MESSAGE()}
      </div>
    </div>
  );
};

export default CurTime;
