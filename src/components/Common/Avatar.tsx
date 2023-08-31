import Image from 'next/image';
import styled from '@emotion/styled';

const ShapeToCssVal = {
  circle: '50%',
  round: '4px',
  square: '0px',
};

const AvatarWrapper = styled.div<{ shape: 'circle' | 'round' | 'square' }>`
  background-color: rgb(209, 209, 209);
  position: relative;
  display: inline-block;
  border: 1px solid #dadada;
  border-radius: ${({ shape }) => ShapeToCssVal[shape]};

  overflow: hidden;
  > img {
    transition: opacity 0.2s ease-out;
  }
`;

const Avatar = ({
  lazy,
  threshold,
  src,
  alt,
  mode = 'cover',
  placeholder,
  props,
  size = 70,
  shape = 'circle',
}: {
  props?: Object;
  alt: string;
  placeholder?: string;
  mode?: 'cover' | 'fill' | 'contain';
  shape?: 'circle' | 'round' | 'square';
  src: string;
  size?: number;
  threshold?: number;
  lazy?: boolean;
}) => {
  return (
    <AvatarWrapper shape={shape}>
      <Image
        src={src}
        width={size}
        height={size}
        alt={alt}
        style={{
          objectFit: mode,
        }}
      />
    </AvatarWrapper>
  );
};

export default Avatar;
