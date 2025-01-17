import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|scss|svg)$": "identity-obj-proxy", // Mock CSS/SCSS/SVG imports
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"], // Ensure Jest DOM matchers are set up
};

export default config;
