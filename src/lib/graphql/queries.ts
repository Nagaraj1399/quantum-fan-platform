import { gql } from '@apollo/client';

export const GET_DASHBOARD_DATA = gql`
  query GetDashboardData {
    me {
      id
      username
      xp
      level
      coins
      streakCount
    }
    upcomingMatches {
      id
      homeTeam
      awayTeam
      startTime
      status
      predictionOdds {
        homeWin
        awayWin
      }
    }
  }
`;
