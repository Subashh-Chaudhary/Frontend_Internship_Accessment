import "@testing-library/jest-dom"; // No need for '/extend-expect'

/** @type {import('jest').Config} */
const config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|scss|svg)$": "identity-obj-proxy", // Mock CSS/SCSS/SVG imports
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"], // Just import the module itself
};

module.exports = config;
