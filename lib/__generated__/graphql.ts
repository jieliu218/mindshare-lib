/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type DailyMindshare = {
  __typename?: "DailyMindshare";
  _time: Scalars["String"]["output"];
  fid: Scalars["String"]["output"];
  mindshare?: Maybe<Scalars["Float"]["output"]>;
};

export type GetMindshareInput = {
  desc?: InputMaybe<Scalars["Boolean"]["input"]>;
  duration: Scalars["String"]["input"];
  field: Scalars["String"]["input"];
  limit?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MindshareResult = {
  __typename?: "MindshareResult";
  change7d: Scalars["Float"]["output"];
  change30d: Scalars["Float"]["output"];
  changeRatio7d: Scalars["Float"]["output"];
  changeRatio30d: Scalars["Float"]["output"];
  currentMindshare: Scalars["Float"]["output"];
  daily: Array<DailyMindshare>;
  fid: Scalars["String"]["output"];
  last7dMindshare: Scalars["Float"]["output"];
  last30dMindshare: Scalars["Float"]["output"];
  rank: Scalars["Int"]["output"];
  time: Scalars["String"]["output"];
  userInfo: UserInfo;
};

export type UserInfo = {
  __typename?: "UserInfo";
  displayName: Scalars["String"]["output"];
  fid: Scalars["Int"]["output"];
  followerCount: Scalars["Int"]["output"];
  followingCount: Scalars["Int"]["output"];
  isSmartUser: Scalars["Boolean"]["output"];
  neynarUserScore: Scalars["Float"]["output"];
  pfpUrl: Scalars["String"]["output"];
  powerBadge: Scalars["Boolean"]["output"];
  username: Scalars["String"]["output"];
};

export type Query_Root = {
  __typename?: "query_root";
  getTopMindshare?: Maybe<Array<Maybe<MindshareResult>>>;
};

export type Query_RootGetTopMindshareArgs = {
  input: GetMindshareInput;
};

export type GetTopMindshareQueryVariables = Exact<{
  duration: Scalars["String"]["input"];
  field: Scalars["String"]["input"];
  limit: Scalars["Int"]["input"];
  desc: Scalars["Boolean"]["input"];
}>;

export type GetTopMindshareQuery = {
  __typename?: "query_root";
  getTopMindshare?: Array<{
    __typename?: "MindshareResult";
    change30d: number;
    change7d: number;
    changeRatio30d: number;
    changeRatio7d: number;
    currentMindshare: number;
    fid: string;
    last30dMindshare: number;
    last7dMindshare: number;
    rank: number;
    time: string;
    userInfo: {
      __typename?: "UserInfo";
      displayName: string;
      fid: number;
      followingCount: number;
      followerCount: number;
      isSmartUser: boolean;
      neynarUserScore: number;
      pfpUrl: string;
      powerBadge: boolean;
      username: string;
    };
    daily: Array<{
      __typename?: "DailyMindshare";
      _time: string;
      fid: string;
      mindshare?: number | null;
    }>;
  } | null> | null;
};

export const GetTopMindshareDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetTopMindshare" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "duration" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "field" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "limit" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "desc" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "Boolean" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getTopMindshare" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "duration" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "duration" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "field" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "field" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "limit" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "limit" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "desc" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "desc" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "change30d" } },
                { kind: "Field", name: { kind: "Name", value: "change7d" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "changeRatio30d" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "changeRatio7d" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "currentMindshare" },
                },
                { kind: "Field", name: { kind: "Name", value: "fid" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "last30dMindshare" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "last7dMindshare" },
                },
                { kind: "Field", name: { kind: "Name", value: "rank" } },
                { kind: "Field", name: { kind: "Name", value: "time" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "userInfo" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "displayName" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "fid" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "followingCount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "followerCount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "isSmartUser" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "neynarUserScore" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "pfpUrl" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "powerBadge" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "username" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "daily" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "_time" } },
                      { kind: "Field", name: { kind: "Name", value: "fid" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mindshare" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetTopMindshareQuery,
  GetTopMindshareQueryVariables
>;
