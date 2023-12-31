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
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'left',
          width: '100%',
          gap: '0.625rem',
        }}
      />
    </ListWrapper>
  );
};

export default ApiList;
