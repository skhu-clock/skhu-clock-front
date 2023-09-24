import type { ListProps } from '@/types';
import { v4 as uuidv4 } from 'uuid';

const List = <T extends {}>({ items, renderItem, listStyle }: ListProps<T>) => {
  return (
    <ul style={listStyle}>
      {items?.map((item) => (
        <li key={uuidv4()}>{renderItem(item)}</li>
      ))}
    </ul>
  );
};

export default List;
