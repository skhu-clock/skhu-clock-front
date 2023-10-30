import { CSSProperties } from 'react';
import links from '../constants/links';
import Baselink from '../Baselink';
import { getFullYmdStr } from '../../hooks/useTime';
import { MenuAPi } from '@/types';
import DDay from '../DDay';

const Linkpage = ({randomMenu}:{randomMenu:MenuAPi}) => {
  // 시간
  const hour = ('0' + new Date().getHours().toString()).slice(-2);
  const minute = ('0' + new Date().getMinutes().toString()).slice(-2);
  /*
  // 시간 계산기
  // 여기부터는 되면 좋은거 시간차까지 나오는거 ㅇㅇ
  // 총 날짜
  const timeStamp = new Date().getTime();
  // 문자로 만들어서 월, 일, 년도, 시간, 분, 초로 나누기
  const timeStampdate = new Date(timeStamp).toString().substring(4, 24);
  // 월, 일, 년도, 초배열로 만들기
  const timeStampArr = timeStampdate.split(' ');
  // 시간 배열로 만들기
  const timeArr = timeStampArr[3].split(':');
*/

  // 종강까지 남은 날짜 계산기
  // 나중에 훅으로 뺄 수있을듯?
  const datenow = new Date().getTime(); // 현재 날짜
  const dateend = new Date('2023-12-18').getTime(); // 종강 날짜
  const dateDiff = dateend - datenow; // 종강 날짜 - 현재 날짜
  const dDay = Math.abs(dateDiff / (1000 * 60 * 60 * 24)) // 날짜 차이 계산
    .toString() // 문자열로 변환
    .substring(0, 2); // 남은 일 수만 보이게 앞에서부터 두자리 자르기

  return (
    <div style={basicStyle}>
      <span style={dateStyle}>{getFullYmdStr()}</span>
      <span style={clockStyle}>
        {hour} : {minute}
      </span>
      <span style={DdayStyle}>
        종강까지 약 <span style={DdayHighlightStyle}>{dDay}일</span> 남았습니다!
      </span>
      <DDay />

      <span style={MenuStyle}>
      🤗 오늘은 {randomMenu.name} 어떠신가요?
      </span>
      <div style={linklistStyle}>
        {links.map(({ item }) => (
          // eslint-disable-next-line react/jsx-key
          <Baselink title={item.title} link={item.link} emoji={item.emoji} />
        ))}
      </div>
    </div>
  );
};

export default Linkpage;

const basicStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  minHeight: '100vh',
  gap: '1rem',
};

const dateStyle: CSSProperties = {
  fontSize: '2rem',
  color: 'white',
  textShadow: '0 0 10px rgba(0,0,0,0.7)',
  fontWeight: 'bold',
};

const clockStyle: CSSProperties = {
  fontSize: '8rem',
  color: 'white',
  fontWeight: 'bold',
  textShadow: '0 0 10px rgba(0,0,0,0.8)',
};
const DdayStyle: CSSProperties = {
  fontSize: '3rem',
  color: 'white',
  textShadow: '0 0 10px rgba(0,0,0,0.8)',
  fontWeight: '700',
};

const MenuStyle: CSSProperties = {
  fontSize: '1.3rem',
  color: 'white',
  textShadow: '0 0 10px rgba(0,0,0,0.8)',
  fontWeight: '700',
};

const DdayHighlightStyle: CSSProperties = {
  color: 'red',
};

const linklistStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '60%',
};
