// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../../utils/client";
import { allPostsQuery } from "../../../utils/queries";

type Data = {
  name: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if(req.method === 'GET'){
    const query = allPostsQuery(); // FROM GROQ Language - Sanity DOCS..
    const data = await client.fetch(query);
    res.status(200).json(data);
  }
}
