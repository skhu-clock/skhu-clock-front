import Base from './Base';
import styled from '@emotion/styled';

export const Circle = styled(Base)<{
  size: number;
}>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;
`;
