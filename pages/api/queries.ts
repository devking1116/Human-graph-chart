import gql from "graphql-tag";

export const GET_BLOCK = gql`
  query blocks($timestampFrom: Int!) {
    hmbulkTransferEvents(
      orderDirection: asc
    ) {
      id
      bulkCount
      timestamp
    }
  }
`;