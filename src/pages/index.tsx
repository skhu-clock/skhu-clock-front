import React, {
  CSSProperties,
  WheelEvent,
  useRef,
  useState,
} from 'react';
import { BaseItem, BaseCalendar, Avatar } from '@/components';
import page from '@/components/constants/page';

/*
1. div엘리멘트를 탐지하는 hook을 만듦 / 완료
2. map을 이용해서 화면에 뿌려주기 위해 배열을 만듦
2-1. ex)
const scrollList = {
  0: hooks('clock'),
  1: hooks('contants'),
  2: hooks('calender'),
  length:3,
}
3. useEffect를 사용해서 스크롤 이벤트를 발생시키면 currentScroll +,-를 이용해서 화면을 이동한다.
4. 스크롤 이벤트가 발생하면 scrollList을 탐지해서 해당하는 div를 찾아서 화면을 이동한다.
*/

// console.log(scrollList[0]);

export default function Home() {
  // 쌉 쌉 하드코디디딩 이러믄 안돼~
  // 사실 그래서 배열로 려고했는디 뭔가뭔가 이상해짐 ㅇㅇ
  // reallly 훅으로 만들어서 쓸라그랬는디 저기다가 넣으니까 또 안돼 ㅇㅇ
  // 왜? 저기 eleArr[index]에 number가 안들어감 ㅋㅋ
  const element = useRef<HTMLDivElement>(null);
  const element1 = useRef<HTMLDivElement>(null);
  const element2 = useRef<HTMLDivElement>(null);

  // 쌉쌉 하드코디리디리디링한 useRef 배열로 묶어버리기~
  const eleArr = [element, element1, element2];

  // 원하는 div로 이동하는 함수우미양가
  const onMoveToElement = (index: number) => {
    eleArr[index].current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  // wheel 이벤트 핸들러시아
  // wheel 통제해!! 행동제한해!! 구속시켜!!
  const [currentScroll, setCurrentScroll]= useState(0);

  const onHandelWheel = (e: WheelEvent<HTMLDivElement>) => {
    // 휠업 다운 이벤트
    // 휠 다운 이벤트
    if (e.deltaY > 0 && currentScroll === 0) {
      onMoveToElement(currentScroll + 1);
      setCurrentScroll(currentScroll + 1);
    }else if (e.deltaY > 0 && currentScroll === 1) {
      onMoveToElement(currentScroll + 1);
      setCurrentScroll(currentScroll + 1);
    }else if (e.deltaY > 0 && currentScroll === 2) {
      onMoveToElement(currentScroll);
      setCurrentScroll(currentScroll);
    }
    // 휠 업 이벤트
    else if (e.deltaY < 0 && currentScroll === 0) {
      onMoveToElement(currentScroll);
      setCurrentScroll(currentScroll);
    }else if (e.deltaY < 0 && currentScroll === 1) {
      onMoveToElement(currentScroll - 1);
      setCurrentScroll(currentScroll - 1);
    }else if (e.deltaY < 0 && currentScroll === 2) {
      onMoveToElement(currentScroll - 1);
      setCurrentScroll(currentScroll - 1);
    }
  };

  return (
    <div style={indexStyles}>
      <div style={linkDivStyles} onWheel={onHandelWheel} ref={eleArr[0]}>
        <h1>👋 안녕하세요!</h1>
        <div>a;sldfasd</div>
        <div>a;sldfasd</div>
        <div>a;sldfasd</div>
        <div>a;sldfasd</div>
        <div>a;sldfasd</div>
        <div>a;sldfasd</div>
        <div>a;sldfasd</div>
      </div>

      <div
        style={contantsDivStyles}
        ref={eleArr[1]}
        onWheel={onHandelWheel}
      >
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

      <div
        ref={eleArr[2]}
        style={callenderStyles}
        onWheel={onHandelWheel}
      >
        <Avatar src="/subway.png" size={50} alt="아바타" />
        <BaseCalendar />
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
