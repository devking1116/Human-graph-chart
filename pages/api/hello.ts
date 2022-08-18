// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { GET_BLOCK } from './queries'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}

export const apiClient = new ApolloClient({
  link: new HttpLink({
    uri: "https://api.thegraph.com/subgraphs/name/humanprotocol/rinkeby",
  }),
  cache: new InMemoryCache(),
});

export async function getBlockFromTimestamp() {
  let result = await apiClient.query({
    query: GET_BLOCK,
    variables: {
      timestampFrom: 1660026943
    },
    fetchPolicy: "cache-first",
  });
  return result?.data?.hmbulkTransferEvents;
}

