import styled from '@emotion/styled';
import type { MenuAPi } from '@/types';
import ApiList from '../Domain/ApiList';
import Skeleton from '../Common/Skeleton';
import { useMenuAPi } from '@/hooks/useMenu';


const renderMenu = (item: MenuAPi) => {
  return (
    <div className="notice-item">
      {item.name}
    </div>
  );
};

const MenuList = () => {
  const { menu, isLoading } = useMenuAPi();

  return (
    <>
      {isLoading ? (
        <Skeleton.Box width={700} height={300} />
      ) : (
        <>
          <div
            style={{
              width: '21.875rem',
            }}
          >
            <ApiList
              renderItem={renderMenu}
              items={ menu ?? []}
            />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: '5rem',
            }}
          >
          </div>
        </>
      )}
    </>
  );
};

export default MenuList;

