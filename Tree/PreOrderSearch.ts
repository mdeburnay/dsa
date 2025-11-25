type BinaryNode<T> = {
	value: T;
	left?: BinaryNode<T>;
	right?: BinaryNode<T>;
};

export function walk(
	curr: BinaryNode<number> | undefined,
	path: number[]
): number[] {
	/**
	 * Base cases:
	 *
	 * 1. If left or right doesn't exist
	 */
	if (!curr) return path;

	// pre
	path.push(curr.value);

	// recurse
	walk(curr.left, path);
	walk(curr.right, path);

	// post
	return path;
}

export function preOrderSearch(
	head: BinaryNode<number> | undefined,
	path: []
): number[] {
	return walk(head, path);
}
