import React, { CSSProperties, WheelEvent, useRef, useState } from 'react';
import { BaseItem, BaseCalendar} from '@/components';
import PAGE from '@/components/constants/page';
import Linkpage from '@/components/Linkpage';
import type { MenuAPi } from '@/types';


export const getStaticProps = (async () => {
  const res = await fetch('https://skhu-clock-front.vercel.app/api/menu');
  const menu:MenuAPi[] = await res.json();
  return { props: { menu } };
}); 


export default function Home({menu}:{menu:MenuAPi[]}) {
  // 쌉 쌉 하드코디디딩 이러믄 안돼~
  // 사실 그래서 배열로 려고했는디 뭔가뭔가 이상해짐 ㅇㅇ
  // reallly 훅으로 만들어서 쓸라그랬는디 저기다가 넣으니까 또 안돼 ㅇㅇ
  // 왜? 저기 eleArr[index]에 number가 안들어감 ㅋㅋ
  const element = useRef<HTMLDivElement>(null);
  const element1 = useRef<HTMLDivElement>(null);
  const element2 = useRef<HTMLDivElement>(null);
  const element3 = useRef<HTMLDivElement>(null);
  const element4 = useRef<HTMLDivElement>(null);
  // 쌉쌉 하드코디리디리디링한 useRef 배열로 묶어버리기~
  const eleArr = [element, element1, element2,element3,element4];

  // 원하는 div로 이동하는 함수우미양가
  const onMoveToElement = (index: number) => {
    eleArr[index].current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  // wheel 이벤트 핸들러시아
  // wheel 통제해!! 행동제한해!! 구속시켜!!
  const [currentScroll, setCurrentScroll] = useState(0);

  const onHandelWheel = (e: WheelEvent<HTMLDivElement>) => {
    if (e.deltaY > 0) {
      // 휠을 아래로 스크롤할 때
      onMoveToElement(Math.min(currentScroll + 1, 4));
      setCurrentScroll(Math.min(currentScroll + 1, 4));
    } else {
      // 휠을 위로 스크롤할 때
      onMoveToElement(Math.max(currentScroll - 1, 0));
      setCurrentScroll(Math.max(currentScroll - 1, 0));
    }    
  };

  // 디바운스 함수
  const debounce = (callback: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return function(this: any, ...args: any[]) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        callback.apply(this, args);
      }, delay);
    };
  };

  // 500ms 딜레이로 호출  
  const onHandelWheelDebounced = debounce(onHandelWheel, 500); 

  return (
    <div style={indexStyles}>
      <div style={linkDivStyles} onWheel={onHandelWheelDebounced} ref={eleArr[0]}>
        <Linkpage randomMenu={menu[Math.floor(Math.random() * menu.length)]}/>
      </div>

      <div style={contantsDivStyles} ref={eleArr[1]} onWheel={onHandelWheelDebounced}>
        <div style={contantsStyles}>
          {PAGE.firstPage.map(({ item }) => (
            <BaseItem
              key={item.title}
              title={item.title}
              subtitle={item.subtitle}
              width={700}
              height={300}
              flexDirection = 'column'
              innerContent={item.innerContent()}
            />
          ))}
        </div>
      </div>

      <div ref={eleArr[2]} style={callenderStyles} onWheel={onHandelWheelDebounced}>
        <BaseCalendar />
      </div>

      <div ref={eleArr[3]} style={callenderStyles} onWheel={onHandelWheelDebounced}>
        <div style={contantsStyles}>
          {PAGE.page.map(({ item }) => (
            <BaseItem
              key={item.title}
              title={item.title}
              subtitle={item.subtitle}
              width={700}
              height={300}
              flexDirection = 'column'
              innerContent={item.innerContent()}
            />
          ))}
        </div>
      </div>

      <div style={contantsDivStyles} ref={eleArr[4]} onWheel={onHandelWheelDebounced}>
        <div style={contantsStyles}>
          {PAGE.lastPage.map(({ item }) => (
            <BaseItem
              key={item.title}
              title={item.title}
              subtitle={item.subtitle}
              width={700}
              height={400}
              flexDirection = 'column'
              innerContent={item.innerContent()}
            />
          ))}
        </div>
      </div>
    </div>

    
    
  );
}

const indexStyles: CSSProperties = {
  position: 'absolute',
  top: '0',
  width: '100%',
  height: '100vh',
  overflow: 'hidden',
};

const linkDivStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  minHeight: '100vh',
};

const contantsDivStyles: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100vh',
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
};

const callenderStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100vh',
};
