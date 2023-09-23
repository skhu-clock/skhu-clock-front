import { CSSProperties } from 'react';
import Link from 'next/link';

export default function Baselink({
  title,
  link,
  emoji,
}: {
  title: string;
  link: string;
  emoji: string;
}) {
  return (
    <Link href={link} style={linkStyle}>
      <div style={emojiStyle}>{emoji}</div>
      <div style={titleStyle}>{title}</div>
    </Link>
  );
}

const linkStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  width: '5.5rem',
  height: '5.5rem',
  borderRadius: '50%',

  textDecoration: 'none',
  color: 'black',
  backgroundColor: 'rgba(225,225,225,0.7)',
};

const emojiStyle: CSSProperties = {
  fontSize: '1.2rem',
};

const titleStyle: CSSProperties = {
  fontSize: '1rem',
};
