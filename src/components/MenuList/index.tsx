import { CSSProperties } from 'react';
import type { MenuAPi } from '@/types';
import ApiList from '../Domain/ApiList';
import Skeleton from '../Common/Skeleton';
import { useMenuAPi } from '@/hooks/useMenu';

const renderMenu = (item: MenuAPi) => {
  return (
    <div className="notice-item" style={Menulist}>
      <div>{item.name}</div>
      <div>{item.price}</div>
    </div>
  );
};

const MenuList = () => {
  const { menu, isLoading } = useMenuAPi();

  return (
    <div style={MenuWrapper}>
      <h1 style={h1Style}>국수나무 메뉴</h1>
      {isLoading ? (
        <Skeleton.Box width={700} height={300} />
      ) : (
        <div>
          <div
            style={{
              width: '%',
              paddingLeft: '2rem',

              backgroundColor: 'rgba(255,255,255,0)',
            }}
          >
            <ApiList renderItem={renderMenu} items={menu ?? []} />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: '5rem',
            }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default MenuList;

const MenuWrapper: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-around',
  flexDirection: 'column',

  fontWeight: 'normal',
  fontStyle: 'normal',
  width: '60rem',
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

  paddingTop: '0.5rem',
  paddingLeft: '2rem',
};

const Menulist: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '6rem',
  backgroundColor: 'rgba(255,255,255,0.56)',
  color: 'black',

  borderRadius: '.5rem',
};
