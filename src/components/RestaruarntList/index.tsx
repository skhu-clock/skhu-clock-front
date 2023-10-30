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

const Data = styled.a`
  width: 20rem;
  padding: 0 0.3125rem;
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

const renderRestarutList = (items: RestrantObj) => {
  return (
    <div key={items.restaurant.id} className='notice-item'>
      <Data
        href={items.restaurant.placeUrl}
      >{`[${items.restaurant.categoryName}]${items.restaurant.name}`}</Data>
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
    <>
      {isLoading ? (
        <Skeleton.Box width={450} height={180} />
      ) : (
        <>
          <div
            style={{
              width: '21.875rem',
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
              width: '5rem',
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
        </>
      )}
    </>
  );
};

export default RestaruarntList;

const NoticeLinkStyle = styled.a`
  width: 20rem;
  padding: 0 0.3125rem;
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
