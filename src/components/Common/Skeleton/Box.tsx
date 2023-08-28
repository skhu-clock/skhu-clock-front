import Base from './Base';
import styled from '@emotion/styled';

const Box = styled(Base)<{
  height?: number | string;
  width?: number | string;
  type?: 'circle' | 'square';
  line?: number;
}>`
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width)};
  height: ${({ height }) =>
    typeof height === 'number' ? `${height}px` : height};
  border-radius: ${({ type }) => (type === 'circle' ? '50%' : '0%')};
`;

export default Box;
