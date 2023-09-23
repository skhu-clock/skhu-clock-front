import { ListProps } from '@/types';
import List from '../Common/List';
import styled from '@emotion/styled';

const SubwayTitle = <T extends {}>({ items, renderItem }: ListProps<T>) => {
  return (
    <ListWrapper>
      <List
        items={items}
        renderItem={renderItem}
        listStyle={{
          width: '5rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '15px',
          flexDirection: 'column',
        }}
      />
    </ListWrapper>
  );
};

export default SubwayTitle;


const ListWrapper = styled.div`
  display: flex;
  width: 5rem;
  flex-direction: column;
  justify-content: flex-start;
`;