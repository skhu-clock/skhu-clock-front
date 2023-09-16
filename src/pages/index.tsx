import React, { CSSProperties } from 'react';
import { BaseItem, BaseCalendar, Avatar } from '@/components';
import page from '@/components/constants/page';

export default function Home() {
  return (
    <div style={indexStyles}>

      <div style={linkDivStyles}>
        <h1>👋 안녕하세요!</h1>
        <div>a;sldfasd</div>
        <div>a;sldfasd</div>
        <div>a;sldfasd</div>
        <div>a;sldfasd</div>
        <div>a;sldfasd</div>
        <div>a;sldfasd</div>
        <div>a;sldfasd</div>
      </div>

      <div style={contantsDivStyles}>
        <div style={contantsStyles}>
          {page.map(({ item }) => (
            <BaseItem
              key={item.title}
              title={item.title}
              subtitle={item.subtitle}
              innerContent={item.innerContent()}
            />
          ))}
        </div>
      </div>

      <div style={callenderStyles}>
        <Avatar src="/subway.png" size={50} alt="아바타" />
        <BaseCalendar />
      </div>
    </div>
  );
}

const indexStyles: CSSProperties = {
  position: 'absolute',
  top: '0',
  border: '1px solid black',
  height: '100vh',
};

const linkDivStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  minHeight: '100vh',
  border: '1px solid yellow',

};

const contantsDivStyles: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100vh',
  border: '1px solid green',

};

const contantsStyles: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  margin: '0 auto',
  gap: '15px',
  maxWidth: '80%',
  animation: 'fadeIn 1s linear',
  zIndex: 1,
  border: '1px solid blue',
  
};

const callenderStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100vh',
  border: '1px solid purple',
};
