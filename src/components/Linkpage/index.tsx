import { CSSProperties } from 'react';
import links from '../constants/links';
import Baselink from '../Baselink';
import { getFullYmdStr } from '../../hooks/useTime';
import { MenuAPi } from '@/types';
import DDay from '../DDay';
import CurTime from '../CurTime';

const Linkpage = ({randomMenu}:{randomMenu:MenuAPi}) => {

  return (
    <div style={basicStyle}>
      <span style={dateStyle}>{getFullYmdStr()}</span>
      <span></span>
      <CurTime />
      <span style={DdayStyle}>
        23년 2학기 종강까지
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

const DdayStyle: CSSProperties = {
  fontSize: '2.5rem',
  color: 'white',
  textShadow: '0 0 10px rgba(0,0,0,0.8)',
  fontWeight: '500',
};

const MenuStyle: CSSProperties = {
  fontSize: '1.3rem',
  color: 'white',
  textShadow: '0 0 10px rgba(0,0,0,0.8)',
  fontWeight: '700',
};

const linklistStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '60%',
};
