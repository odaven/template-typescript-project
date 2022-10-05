// This is needed because Jest does not understand typescript so we need it to me transformed into js first
import type {Config} from 'jest';
const config: Config = {
  verbose: true,
    preset: "ts-jest",
    testEnvironment: "node",
    transform: {
        "^.+\\.ts?$": "ts-jest",
    },
    transformIgnorePatterns: ["<rootDir>/node_modules/"],
    testMatch: [ "**/__tests__/**/*.ts?(x)", "**/?(*.)+(spec|test).ts?(x)" ]
};

export default config;
