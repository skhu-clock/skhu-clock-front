import { NextRequest } from 'next/server';

const fetchWeather = async () => {
  const getData = await fetch('http://skhuclock.duckdns.org/api/weather');
  if (getData.ok) {
    return await getData.json();
  }
};
export default async function handler(req: NextRequest) {
  try {
    const scheduleData = await fetchWeather();
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
