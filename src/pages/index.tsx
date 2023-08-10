import DateCalender from '@/components/DDay';
import BaseItem from '@/components/BaseItem';
export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        gap: '15px',
        flexWrap: 'wrap',
        maxWidth: '80%',
      }}
    >
      <BaseItem
        title="하이"
        subtitle="하하"
        innerContent={
          <div
            style={{
              background: 'white',
            }}
          >
            학사공지 리스트
          </div>
        }
      />
      <DateCalender />
    </div>
  );
}
