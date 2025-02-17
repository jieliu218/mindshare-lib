import { GetMindshareInput, GetTopMindshareQuery, MindshareResult } from '../__generated__/graphql';
import { GetTopMindshareGql } from '../gql/getTopMindshare.gql';
import { UseQueryOptions } from '@tanstack/react-query';

import { queryFn } from './queryFn';

interface GetTopMindshareProps {
  variables: GetMindshareInput;
}

export const GetTopMindshare = async ({
  variables,
}: GetTopMindshareProps): Promise<MindshareResult[]> => {
  const data = (await queryFn({
    document: GetTopMindshareGql,
    variables,
  })) as GetTopMindshareQuery;

  return (data.getTopMindshare as MindshareResult[]) ?? [];
};

interface GetTopMindshareQueryOptionsProps extends GetTopMindshareProps {
  keys?: string[];
  options?: Omit<UseQueryOptions<MindshareResult[]>, 'queryKey' | 'queryFn'>;
}

export const GetTopMindshareQueryQueryOptions = ({
  keys = [],
  variables,
  options,
}: GetTopMindshareQueryOptionsProps): UseQueryOptions<MindshareResult[]> => {
  return {
    queryKey: ['GetTopMindshareQuery', ...keys],
    queryFn: async () => await GetTopMindshare({ variables }),
    ...options,
  };
};
