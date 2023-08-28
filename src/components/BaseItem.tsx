import { CSSProperties } from 'react';

export default function BaseItem({
  title,
  subtitle,
  innerContent,
}: {
  title: string;
  subtitle: string;
  innerContent: React.ReactNode | React.ReactNode[];
}) {
  const sectionStyle: CSSProperties = {
    fontWeight: 'normal',
    fontStyle: 'normal',
    width: '480px',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
    minHeight: '272px',
    backgroundColor: 'rgba(255,255,255,0.56)',
    color: 'black',
  };

  const h1Style: CSSProperties = {
    backgroundColor: 'white',
    color: 'black',
    fontWeight: '700',
    fontSize: '1.2rem',
    paddingLeft: '8px',
  };

  const h2Style: CSSProperties = {
    fontSize: '1rem',
    padding: '10px',
  };

  const innerContentDiv: CSSProperties = {
    background: 'rgba(255,255,255,0.8)',
    display: 'flex',
    width: '95%',
    margin: '20px auto',
    borderRadius: '1rem',
    justifyContent: 'center',
    flex: 1,
  };

  return (
    <section style={sectionStyle}>
      <h1 style={h1Style}>{title}</h1>
      <h2 style={h2Style}>{subtitle}</h2>
      <div style={innerContentDiv}>{innerContent}</div>
    </section>
  );
}
