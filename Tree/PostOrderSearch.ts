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
	 * 1. If current doesn't exist
	 */
	if (!curr) return path;

	// recurse
	walk(curr.left, path);
	walk(curr.right, path);
	path.push(curr.value);

	// post
	return path;
}

export function postOrderSearch(
	head: BinaryNode<number> | undefined,
	path: number[]
): number[] {
	return walk(head, path);
}
