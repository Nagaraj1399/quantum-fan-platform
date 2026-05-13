import { gql } from 'graphql-tag';

export const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    xp: Int!
    level: Int!
    coins: Int!
    streakCount: Int!
    lastActive: String!
  }

  type Match {
    id: ID!
    homeTeam: String!
    awayTeam: String!
    startTime: String!
    status: String!
    predictionOdds: PredictionOdds
  }

  type PredictionOdds {
    homeWin: Float!
    awayWin: Float!
    draw: Float
  }

  type Prediction {
    id: ID!
    matchId: ID!
    userId: ID!
    prediction: String!
    pointsStaked: Int!
    status: String!
  }

  type Query {
    me: User
    upcomingMatches: [Match!]!
    myPredictions: [Prediction!]!
    leaderboard: [User!]!
  }

  type Mutation {
    placePrediction(matchId: ID!, prediction: String!, points: Int!): Prediction
    checkIn: User
  }
`;
