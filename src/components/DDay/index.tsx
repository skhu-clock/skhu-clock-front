/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ChangeEvent, useState } from 'react';

const DateCalender = () => {
  const [startDate, setStartDate] = useState<string>(new Date().toDateString());
  const [endtDate, setEndDate] = useState<string>(new Date().toDateString());

  // console.log('오늘 날짜', datenow.getTime());

  // console.log('내가 누른 날짜', startDate);

  // console.log('날자 type', typeof startDate);

  // console.log('날짜 추출', startDate);

  const dateDifference = () => {
    const datenow = new Date(startDate).getTime();
    const dateend = new Date(endtDate).getTime();

    const dateDiff = dateend - datenow;

    if (dateDiff === 0) {
      return 'D-day';
    } else {
      return Math.abs(dateDiff / (1000 * 60 * 60 * 24));
    }
  };

  const onChangeStartDate = (e: ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  };

  const onChangeEndtDate = (e: ChangeEvent<HTMLInputElement>) => {
    if (new Date(startDate).getTime() > new Date(e.target.value).getTime()) {
      alert('시작일이 종료일보다 늦습니다.'); // eslint-disable-line no-alert
    } else {
      setEndDate(e.target.value);
      dateDifference();
    }
  };

  const dateDiff = dateDifference();

  return (
    <div css={calenderContaner}>
      <h1>D-day 계산기</h1>
      <div css={dDaygroup}>
        <div css={dDayInput}>
          <label htmlFor="firstday">시작일</label>
          <input
            type="date"
            name="firstday"
            id="firstdate"
            value={startDate}
            onChange={onChangeStartDate}
          />
        </div>
        <div css={dDayInput}>
          <label htmlFor="lasttday">종료일</label>
          <input
            type="date"
            name="lasttday"
            id="lasttday"
            value={endtDate}
            onChange={onChangeEndtDate}
          />
        </div>
      </div>
      <div id="D-day">D-{dateDiff}</div>
    </div>
  );
};

export default DateCalender;

const calenderContaner = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40rem;
  height: 20rem;
  gap: 2rem;

  background-color: rgba(255, 255, 255, 0.7);

  border-radius: 1rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.2);

  h1 {
    font-size: 2rem;
  }
  input {
    text-align: center;
  }
  div#D-day {
    font-size: 3rem;
  }
`;

const dDaygroup = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 30rem;
  height: 5rem;
  gap: 3rem;

  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.3);
`;

const dDayInput = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  font-size: 1.5rem;
`;
