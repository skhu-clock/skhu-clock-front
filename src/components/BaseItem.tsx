import { CSSProperties } from 'react';

export default function BaseItem({
  title,
  subtitle,
  innerContent,
  width,
  height,
  flexDirection,
}: {
  title: string;
  subtitle: string;
  innerContent: React.ReactNode | React.ReactNode[];
  width?: number;
  height?: number;
  flexDirection?: 'row' | 'column';
}) {
  const sectionStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: flexDirection ?? 'column',

    fontWeight: 'normal',
    fontStyle: 'normal',
    width: '60rem',
    height: height,

    minHeight: '17rem',
    backgroundColor: 'rgba(255,255,255,0.56)',
    color: 'black',

    borderRadius: '2rem',
  };

  const h1Style: CSSProperties = {
    color: 'black',
    fontSize: '2rem',
    fontWeight: '700',

    paddingTop: '2rem',
    paddingLeft: '2rem',
  };

  const h2Style: CSSProperties = {
    padding: '0.625rem',
    paddingLeft: '2rem',
  };

  const innerContentDiv: CSSProperties = {
    display: 'flex',
    justifyContent: 'flex-start',
    flex: 1,
    width: '100%',
    paddingLeft: '2rem',
  };

  return (
    <section style={sectionStyle}>
      <h1 style={h1Style}>{title}</h1>
      <h2 style={h2Style}>{subtitle}</h2>
      <div style={innerContentDiv}>{innerContent}</div>
    </section>
  );
}
