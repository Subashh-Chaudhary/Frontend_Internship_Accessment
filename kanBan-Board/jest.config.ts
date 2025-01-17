/** @type {import('jest').Config} */
const config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|scss|svg)$": "identity-obj-proxy", // Mock CSS/SCSS/SVG imports
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // Add setup file
};

module.exports = config;
