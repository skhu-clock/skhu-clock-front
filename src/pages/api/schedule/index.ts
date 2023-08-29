import { NextRequest } from 'next/server';

const fetchSchedule = async () => {
  const getData = await fetch('http://skhuclock.duckdns.org/api/schedule');
  if (getData.ok) {
    return await getData.json();
  }
};
export default async function handler(req: NextRequest) {
  try {
    const scheduleData = await fetchSchedule();
    return new Response(JSON.stringify(scheduleData), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
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
