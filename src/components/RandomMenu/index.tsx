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
      {randomMenu && (
        <span style={MenuStyle}>🤗 오늘은 {randomMenu.name} 어떠신가요?</span>
      )}
      <button style={ButtonStyle} onClick={selectRandomMenu}>
        랜덤 메뉴 선택
      </button>
    </div>
  );
};

export default RandonMenu;
const randWapper: CSSProperties = {
  width: '50%',
};

const MenuStyle: CSSProperties = {
  fontSize: '1.3rem',
  color: 'white',
  textShadow: '0 0 10px rgba(0,0,0,0.8)',
  fontWeight: '700',
};

const ButtonStyle: CSSProperties = {
  all: 'unset',
  cursor: 'pointer',
  width: '12rem',
  height: '3rem',
  border: '1px solid black',
  borderRadius: '1.5rem',
  textAlign: 'center',

  backgroundColor: 'white',
};
