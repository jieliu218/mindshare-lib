import { request, RequestDocument, Variables } from 'graphql-request';

export interface QueryOptions {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

interface QueryFnParams {
  document: RequestDocument;
  variables?: Variables;
  options?: QueryOptions;
}

export const queryFn = async ({ document, variables = {}, options = {} }: QueryFnParams) => {
  try {
    console.log(import.meta.env)
    const url = import.meta.env.VITE_MINDSHARE_HTTPS ? import.meta.env.VITE_ENDPOINT : "/api/graphql";
    const response = await request(url as string, document, variables, {
      ...options,
    });
    return response;
  } catch (error) {
    console.error('Error in queryFn:', error);
    throw error;
  }
};

export const getNextPageParam = <T>(lastPage: T[], allPages: T[][]): number | undefined => {
  if (lastPage.length === 0) {
    return undefined;
  }
  return allPages.length;
};

// @ts-expect-error
export const getPreviousPageParam = <T>(firstPage: T[], allPages: T[][]): number | undefined => {
  if (allPages.length <= 1) {
    return undefined;
  }
  return allPages.length - 2;
};
