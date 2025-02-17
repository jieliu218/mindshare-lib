import { gql } from '../__generated__/gql';

const GetTopMindshareGql = gql(/* GraphQL */ `
  query GetTopMindshare($duration: String!, $field: String!, $limit: Int!, $desc: Boolean!) {
    getTopMindshare(input: { duration: $duration, field: $field, limit: $limit, desc: $desc }) {
      change30d
      change7d
      changeRatio30d
      changeRatio7d
      currentMindshare
      fid
      last30dMindshare
      last7dMindshare
      rank
      time
      userInfo {
        displayName
        fid
        followingCount
        followerCount
        isSmartUser
        neynarUserScore
        pfpUrl
        powerBadge
        username
      }
      daily {
        _time
        fid
        mindshare
      }
    }
  }
`);

export { GetTopMindshareGql };
