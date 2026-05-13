// Mock data for the demo
const mockUser = {
  id: '1',
  username: 'FanaticPro',
  xp: 1250,
  level: 12,
  coins: 450,
  streakCount: 7,
  lastActive: new Date().toISOString(),
};

const mockMatches = [
  {
    id: 'm1',
    homeTeam: 'Mumbai Indians',
    awayTeam: 'Chennai Super Kings',
    startTime: new Date(Date.now() + 3600000).toISOString(),
    status: 'UPCOMING',
    predictionOdds: { homeWin: 1.8, awayWin: 2.1, draw: 4.5 },
  },
  {
    id: 'm2',
    homeTeam: 'Royal Challengers Bangalore',
    awayTeam: 'Gujarat Titans',
    startTime: new Date(Date.now() + 86400000).toISOString(),
    status: 'UPCOMING',
    predictionOdds: { homeWin: 2.0, awayWin: 1.9, draw: 4.0 },
  },
];

export const resolvers = {
  Query: {
    me: () => mockUser,
    upcomingMatches: () => mockMatches,
    myPredictions: () => [],
    leaderboard: () => [mockUser],
  },
  Mutation: {
    placePrediction: (_: any, { matchId, prediction, points }: any) => {
      return {
        id: Math.random().toString(36).substr(2, 9),
        matchId,
        userId: '1',
        prediction,
        pointsStaked: points,
        status: 'PENDING',
      };
    },
    checkIn: () => {
      mockUser.streakCount += 1;
      mockUser.xp += 50;
      return mockUser;
    },
  },
};
