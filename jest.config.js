module.exports = {
    roots: ['<rootDir>/src'],
    collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
    coverageDirectory: 'coverage',
    testeEnvironment: 'node',
    transform: {
        '.+\\.ts$': 'ts-jest'
    }
}