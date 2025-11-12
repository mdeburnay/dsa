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

		const result = solveMaze(maze, "#", { x: 3, y: 0 }, { x: 3, y: 4 });

		expect(result).toEqual([
			{ x: 3, y: 0 },
			{ x: 3, y: 1 },
			{ x: 2, y: 1 },
			{ x: 1, y: 1 },
			{ x: 1, y: 2 },
			{ x: 1, y: 3 },
			{ x: 2, y: 3 },
			{ x: 3, y: 3 },
			{ x: 3, y: 4 },
		]);
	});
});
