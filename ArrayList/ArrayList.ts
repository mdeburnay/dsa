export class ArrayList<T> {
	private length: number;
	private capacity: number;
	private array: Array<T>;

	constructor() {
		this.length = 0;
		this.capacity = 5;
		this.array = new Array(this.capacity);
	}

	/**
	 * Doubles the capacity of the array
	 */
	private resize() {
		// Create new arr copy, double capacity
		const newCapacity = this.capacity * 2;
		const newArr = new Array(newCapacity);

		for (let i = 0; i < this.length; i++) {
			newArr[i] = this.array[i];
		}

		// Set capacity and arr
		this.capacity = newCapacity;
		this.array = newArr;
	}

	/**
	 * Removes the last element of the array
	 *
	 * @returns {T} - The removed element from the array
	 */
	public pop(): T {
		if (!this.length) return undefined;

		// Get last el
		const lastEl = this.array[this.length - 1];

		// Set final el to undefined, reduce length
		this.array[this.length - 1] = undefined;
		this.length = this.length - 1;

		// Return popped el
		return lastEl;
	}

	/**
	 * Adds an element to the end of the array
	 *
	 * @param {T} el - The element to add to the end of the array
	 * @returns {Array<T>} - The array with the new element prepended
	 */
	public push(el: T): Array<T> {
		// check if above capacity
		if (this.length + 1 > this.capacity) {
			this.resize();
		}

		// add el then increment length
		this.array[this.length] = el;
		this.length++;

		// return arr
		return this.array;
	}

	/**
	 * Removes the first element of the array
	 *
	 * @returns {T} - the popped off element
	 */
	public shift(): T {
		if (!this.length) return undefined;

		// get first el
		const firstEl = this.array[0];

		// shift els backwards, leaving final el undefined
		for (let i = 0; i < this.length - 1; i++) {
			this.array[i] = this.array[i + 1];
		}

		// remove final array
		this.array[this.length - 1] = undefined;

		// decrement length
		this.length--;

		// return first el
		return firstEl;
	}

	/**
	 * Adds the element to the front of the array
	 *
	 * @param el - The element to add to the front of the array
	 * @returns {Array<T>} - The array containing the new element
	 */
	public unshift(el: T): Array<T> {
		// check if array needs to resize
		if (this.length + 1 > this.capacity) {
			this.resize();
		}

		// reorder array
		for (let i = this.length - 1; i > 0; i++) {
			this.array[i] = this.array[i - 1];
		}

		// increment length
		this.length++;

		// set new value for first el
		this.array[0] = el;

		return this.array;
	}
}
