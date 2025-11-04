type Point = {
	x: number;
	y: number;
};

function walk(
	maze: string[],
	wall: string,
	curr: Point,
	end: Point,
	seen: boolean[][]
) {
	// Base cases:
	// 1. If off map
	if (
		curr.x < 0 ||
		curr.x >= maze[0].length ||
		curr.y < 0 ||
		curr.y >= maze.length
	) {
		return false;
	}

	// 2. If on a wall
	if (maze[curr.y][curr.x] === wall) return false;

	// 3. If already seen
	if (seen[curr.y][curr.x]) return false;

	// 4. If at end
	if (curr.x === end.x && curr.y === end.y) return true;
}

export default function solve(
	maze: string[],
	wall: string,
	start: Point,
	end: Point
) {}
