export const getFullYmdStr = () => {
  //년월일시분초 문자열 생성
  const d = new Date();
  return (
    d.getFullYear() +
    '년 ' +
    (d.getMonth() + 1) +
    '월 ' +
    d.getDate() +
    '일 ' +
    '일월화수목금토'.charAt(d.getUTCDay()) +
    '요일'
  );
};
