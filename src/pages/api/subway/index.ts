import Instance from '@/constants';
import { NextRequest } from 'next/server';

const getFetchSubway = async () => {
  const getData = await fetch('http://skhuclock.duckdns.org/api/subway');
  if (getData.ok) {
    return await getData.json();
  }
};

export default async function handler(req: NextRequest) {
  try {
    const subwayData = await getFetchSubway(); // 함수를 실행하여 데이터를 가져옴

    return new Response(JSON.stringify(subwayData), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error: 'An error occurred' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
export const config = {
  runtime: 'edge',
};
