import DateCalender from '@/components/DDay';
import BaseItem from '@/components/BaseItem';
import NoticeList from '@/components/NoticeList';
import SubwayList from '@/components/SubWayList';
import { SubWayAPi } from '@/types';
import Instance from '@/constants';

export const getStaticProps = async () => {
  const res = await Instance.get('/api/subway');
  console.log('revalidate');
  if (res) {
    return {
      props: {
        subwayData: await res.data,
      },
      revalidate: 60,
    };
  }
};

export default function Home({ subwayData }: { subwayData: SubWayAPi[] }) {
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

      <BaseItem
        title="다음지하철"
        subtitle=""
        innerContent={<SubwayList subwayList={subwayData} />}
      />
      <DateCalender />
    </div>
  );
}
