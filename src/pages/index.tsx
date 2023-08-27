import DateCalender from '@/components/DDay';
import BaseItem from '@/components/BaseItem';
import NoticeList from '@/components/NoticeList';

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
      <BaseItem title="하이" subtitle="하하" innerContent={<NoticeList />} />
      <DateCalender />
    </div>
  );
}
