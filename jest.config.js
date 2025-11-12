module.exports = {
	preset: "ts-jest",
	testEnvironment: "node",
	roots: ["<rootDir>"],
	testMatch: ["**/*.spec.ts", "**/*.test.ts"],
	transform: {
		"^.+\\.ts$": [
			"ts-jest",
			{
				tsconfig: "tsconfig.spec.json",
			},
		],
	},
	moduleFileExtensions: ["ts", "js", "json"],
};
