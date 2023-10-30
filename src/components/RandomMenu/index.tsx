import type { MenuAPi } from '@/types';
import axios from 'axios';
import { useState, useEffect, CSSProperties } from 'react';

const RandonMenu = () => {
  const [menuList, setMenuList] = useState<MenuAPi[]>([]);
  const [randomMenu, setRandomMenu] = useState<MenuAPi | null>(null);

  useEffect(() => {
    async function fetchMenuData() {
      try {
        const response = await axios.get<MenuAPi[]>(
          'http://skhuclock.duckdns.org/api/menus'
        );
        setMenuList(response.data); // API의 응답 형태에 따라 적절하게 수정하세요.
      } catch (error) {
        console.error('메뉴를 불러오는데 실패했습니다.', error);
      }
    }

    fetchMenuData();
  }, []);

  const selectRandomMenu = () => {
    const randomIndex = Math.floor(Math.random() * menuList.length);
    setRandomMenu(menuList[randomIndex]);
  };

  return (
    <div style={randWapper}>
      <h1 style={h1Style}>국수나무 메뉴 추천</h1>
      <div style={MenuDivStyle}>
        {randomMenu && (
          <span style={MenuStyle}>🤗 오늘은 <span style={MenuSpanStyle}>{randomMenu.name}</span> 어떠신가요?</span>
        )}
        <button style={ButtonStyle} onClick={selectRandomMenu}>
          다른 메뉴 선택
        </button>
      </div>
    </div>
  );
};

export default RandonMenu;
const randWapper: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  fontWeight: 'normal',
  fontStyle: 'normal',
  width: '29rem',
  height: '18.75rem',
  minHeight: '17rem',
  backgroundColor: 'rgba(255,255,255,0.56)',
  color: 'black',

  borderRadius: '2rem',
};

const h1Style: CSSProperties = {
  color: 'black',
  fontSize: '2rem',
  fontWeight: '700',

  paddingTop: '2rem',
  paddingLeft: '2rem',
};

const ButtonStyle: CSSProperties = {
  all: 'unset',
  cursor: 'pointer',
  width: '20rem',
  height: '2rem',
  borderRadius: 'rem',
  textAlign: 'center',

  backgroundColor: 'rgba(255,255,255,0.56)',
  
};

const MenuDivStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  
  width: '100%',
  height: '100%',

  gap: '2rem',
};

const MenuStyle: CSSProperties = {
  fontSize: '1.7rem',
  color: 'white',
  textShadow: '0 0 10px rgba(0,0,0,0.8)',
  fontWeight: '700',
};

const MenuSpanStyle: CSSProperties = {
  color: 'beige',
};