import { ListProps } from '@/types';
import List from '../Common/List';
import styled from '@emotion/styled';

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ApiList = <T extends {}>({ items, renderItem }: ListProps<T>) => {
  return (
    <ListWrapper>
      <List
        items={items}
        renderItem={renderItem}
        listStyle={{
          width: '350px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '15px',
          flexDirection: 'column',
        }}
      />
    </ListWrapper>
  );
};

export default ApiList;
