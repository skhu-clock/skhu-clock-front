import DateCalender from '@/components/DDay';
import BaseItem from '@/components/BaseItem';
import NoticeList from '@/components/NoticeList';
import SubwayList from '@/components/SubWayList';

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
        title="학사공지"
        subtitle="
      최근 올라온 15개의 학사공지를 보여드립니다."
        innerContent={<NoticeList />}
      />
      <DateCalender />
    </div>
  );
}
