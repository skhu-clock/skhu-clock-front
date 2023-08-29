import useSchedule from '@/hooks/useSchedule';

const ScheduleList = () => {
  const { schedule } = useSchedule();
  console.log(schedule);
  return <></>;
};
export default ScheduleList;
