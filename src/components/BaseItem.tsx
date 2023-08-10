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
    flexDirection: 'column',
    minHeight: '272px',
    backgroundColor: '#d4d4d4',
    color: 'rgb(116, 116, 116);',
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
    width: '80%',
    background: 'white',
    display: 'flex',
    margin: '20px auto',
    padding: '0px 2rem',
    borderRadius: '1rem',
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
