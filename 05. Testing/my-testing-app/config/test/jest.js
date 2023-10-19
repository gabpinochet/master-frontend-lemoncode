module.exports = {
  rootDir: '../../',
  verbose: true,
  restoreMocks: true,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/config/test/setup-after.ts'],
  moduleNameMapper: {
    "^api/(.*)$": "<rootDir>/src/api/$1",
    "^common-app/(.*)$": "<rootDir>/src/common-app/$1",
    "^common/(.*)$": "<rootDir>/src/common/$1",
    "^core/(.*)$": "<rootDir>/src/core/$1",
    "^layout/(.*)$": "<rootDir>/src/layout/$1",
    "^pods/(.*)$": "<rootDir>/src/pods/$1",
    "^scenes/(.*)$": "<rootDir>/src/scenes/$1"
  },
};
