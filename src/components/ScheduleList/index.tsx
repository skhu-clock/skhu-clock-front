import styled from '@emotion/styled';
import type { Schedule } from '@/types';
import {useSchedule} from '@/hooks/useSchedule';
import { useState } from 'react';

const renderNotice = (item: Schedule) => {
  return (
    <div>
      
    </div>
  );
};

const ScheduleList = () => {
  const { schedule } = useSchedule();

  
  const [initPage, setPage] = useState<number>(0);

  const handleClickNextPage = () => {
    if (initPage + 5 <= 15) setPage(initPage + 5);
  };

  const handleClickPrevPage = () => {
    if (initPage - 5 >= 0) setPage(initPage - 5);
  };
  return (
    <div>
      {}
    </div>
  );
};

export default ScheduleList;

const NoticeLinkStyle = styled.a`
  width: 320px;
  padding: 0 5px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: inherit;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    color: '#e1e1e1';
  }
`;
