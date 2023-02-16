// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getSerpRanking } from '../../lib/serp';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const keyword = req.query.q as string;
  const domain = req.query.domain as string;
  if (!keyword || !domain)
    return res.status(400).json({ error: 'bad request' });

  // const ret = await getSerpRanking({ keyword: keyword, domain: domain });
  const ret = {};
  return res.status(200).json(ret);
}
