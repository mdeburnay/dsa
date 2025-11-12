// test the maze solver

import { solveMaze } from "./Maze";

describe("Maze Solver", () => {
	it("should solve a maze", () => {
		const maze = [
			["#", "#", "#", "S", "#"],
			["#", " ", " ", " ", "#"],
			["#", " ", "#", "#", "#"],
			["#", " ", " ", " ", "#"],
			["#", "#", "#", "E", "#"],
		];

		const result = solveMaze(maze, "#", { x: 0, y: 0 }, { x: 4, y: 4 });

		expect(result).toEqual([
			{ x: 0, y: 0 },
			{ x: 1, y: 0 },
			{ x: 2, y: 0 },
		]);
	});
});
