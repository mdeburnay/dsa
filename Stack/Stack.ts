type Node<T> = {
	value: T;
	prev?: Node<T> | undefined;
};

export class Stack<T> {
	public length: number;
	private head?: Node<T>;

	constructor() {
		this.head = undefined;
		this.length = 0;
	}

	public push(item: T): void {
		this.length++;

		if (!this.head) {
			this.head = { value: item };
			return;
		}

		this.head = { value: item, prev: this.head }
	}

	public pop(): T | undefined {
		if (!this.head) {
			return undefined;
		}

		this.length--;

		const value = this.head.value;
		this.head = this.head.prev;
		return value;
	}

	public peek(): T | undefined {
		return this.head?.value;
	}
}
