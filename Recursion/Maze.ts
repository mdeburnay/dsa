/**
 * Maze problem *
 *
 * Inputs:
 * 1. Maze itself (2D array)
 * 2. Point/current location
 * 3. seen array
 * 4.
 *
 **/

const maze = [
	"xxxxxxxxxxxxxx xxxxx",
	"xxxxx          xxxxx",
	"xxxxxx xxxxxxxxxxxxx",
];

type Point = {
	x: number;
	y: number;
};

function walk(
	maze: string[],
	wall: string,
	curr: Point,
	end: Point,
	seen: Point[]
): boolean {
	/**
	 * BASE CASES
	 */
	// 1. If off the map
	if (
		curr.x < 0 ||
		curr.x >= maze[0].length ||
		curr.y < 0 ||
		curr.y >= maze.length
	) {
		return false;
	}

	// 2. If at a wall
	if (maze[curr.y][curr.x] === wall) {
		return false;
	}

	// 3. If already seen
	// 4. If at end
	return false;
}

function solveMaze(
	maze: string[],
	wall: string,
	start: Point,
	end: Point,
	seen: Point[]
) {}
