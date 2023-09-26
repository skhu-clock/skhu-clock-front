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
    width: '30rem',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
    minHeight: '17rem',
    backgroundColor: 'rgba(255,255,255,0.56)',
    color: 'black',
  };

  const h1Style: CSSProperties = {
    backgroundColor: 'white',
    color: 'black',
    fontWeight: '700',
    fontSize: '1.4rem',
    paddingLeft: '0.5rem',
    paddingBottom: '0.5rem',
  };

  const h2Style: CSSProperties = {
    fontSize: '1.2rem',
    padding: '0.625rem',
    fontWeight: 'bold',
  };

  const innerContentDiv: CSSProperties = {
    background: 'rgba(255,255,255,0.8)',
    display: 'flex',
    width: '95%',
    margin: '1.25rem auto',
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
