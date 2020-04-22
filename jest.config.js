module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    roots: [
        "<rootDir>/src/"
    ],
    transform: {
        ".(ts)$": "ts-jest"
    }
};
