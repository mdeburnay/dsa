type QNode<T> = {
	value: T;
	next?: QNode<T>;
};

export class Queue<T> {
	public length: number;
	private head: QNode<T> | undefined;
	private tail: QNode<T> | undefined;

	constructor() {
		this.head = this.tail = undefined;
		this.length = 0;
	}

	public enqueue(item: T): T | undefined {
		this.length++;

		const node: QNode<T> = { value: item };
		if (!this.tail) {
			this.tail = this.head = node;
			return;
		}

		this.tail.next = node;
		this.tail = node;
	}

	public deque(): T | undefined {
		if (!this.head) {
			return undefined;
		}

		this.length--;
		if (this.length === 0) {
			this.tail = this.head = undefined;
			return;
		}

		const head = this.head;
		this.head = this.head.next;
		return head.value;
	}

	public peek(): T | undefined {
		return this.head?.value;
	}
}
