import styled from '@emotion/styled';
import ApiList from '../Domain/ApiList';
import Skeleton from '../Common/Skeleton';
import { useEffect, useState } from 'react';
import Image from 'next/image';
// import type { ResturantApi } from '@/types';

interface RestrantObj {
  restaurant: ResturantApi;
  message: string;
}

interface ResturantApi {
  id: number;
  distannce: number;
  categoryName: string;
  distance: number;
  placeUrl: string;
  name: string;
  addressName: string;
}

const renderRestarutList = (items: RestrantObj) => {
  return (
    <div key={items.restaurant.id} className="notice-item">
      <RestaruantStyle
        href={items.restaurant.placeUrl}
      >{`[${items.restaurant.categoryName}]${items.restaurant.name}`}</RestaruantStyle>
    </div>
  );
};

const RestaruarntList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [initPage, setPage] = useState<number>(0);
  const [restaruarntList, setRestaruarntList] = useState<RestrantObj[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/KaKaoMap');
      const data = await res.json().finally(() => setIsLoading(false));
      setRestaruarntList(data);
    };

    fetchData();
  }, []);

  const handleClickNextPage = () => {
    if (initPage + 5 <= 15) setPage(initPage + 5);
  };

  const handleClickPrevPage = () => {
    if (initPage - 5 >= 0) setPage(initPage - 5);
  };
  return (
    <RestaruantWapper>
      <H1Style>근처 식당</H1Style>
      {isLoading ? (
        <Skeleton.Box width={450} height={180} />
      ) : (
        <div>
          <div
            style={{
              width: '21.875rem',
              paddingLeft: '2rem',
            }}
          >
            <ApiList
              renderItem={renderRestarutList}
              items={
                restaruarntList
                  ?.filter((res) => res.restaurant)
                  .slice(initPage, initPage + 5) || []
              }
            />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '5rem',
                marginTop: '1rem',
              }}
            >
              <Image
                src="/left.png"
                width={30}
                height={30}
                onClick={handleClickPrevPage}
                alt={''}
                style={{
                  cursor: 'pointer',
                }}
              ></Image>
              {initPage / 5 + 1}
              <Image
                src="/righth.png"
                width={30}
                height={30}
                onClick={handleClickNextPage}
                alt={''}
                style={{
                  cursor: 'pointer',
                }}
              ></Image>
            </div>
          </div>
        </div>
      )}
    </RestaruantWapper>
  );
};

export default RestaruarntList;

const RestaruantWapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  font-weight: normal;
  font-style: normal;
  width: 29rem;
  height: 18.75rem;
  min-height: 17rem;
  background-color: rgba(255, 255, 255, 0.56);
  color: black;

  border-radius: 2rem;
`;

const H1Style = styled.h1`
  color: black;
  font-size: 2rem;
  font-weight: 700;

  padding-top: 0.5rem;
  padding-left: 2rem;
`;

const RestaruantStyle = styled.a`
  width: 100%;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: inherit;
  text-decoration: none;
  text-align: left;

  &:hover {
    cursor: pointer;
    color: '#e1e1e1';
  }
`;
