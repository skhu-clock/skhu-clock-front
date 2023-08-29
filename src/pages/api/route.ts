import Instance from '@/constants';

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const getData = await Instance.get('api/subway');
  res.status(200).json(getData.data);
}
