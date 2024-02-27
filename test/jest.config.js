module.exports = {
  transform: {
    "^.+\\.(j|t)sx?$": "ts-jest",
  },
  transformIgnorePatterns: [
    "/node_modules/(?!@react-dnd|react-dnd|dnd-core|react-dnd-html5-backend)",
  ],
};
