export function towerOfHanoi(
	n: number,
	source: string,
	destination: string,
	auxiliary: string
): string[] {
	if (n === 0) return [];

	if (n === 1) return [`Move disk from ${source} to ${destination}`];

	const step1 = towerOfHanoi(n - 1, source, auxiliary, destination);

	const step2 = [`Move disk from ${source} to ${destination}`];

	const step3 = towerOfHanoi(n - 1, auxiliary, destination, source);

	return [...step1, ...step2, ...step3];
}
