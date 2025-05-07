class MinHeap {
  constructor() {
    this.heap = [];
  }
  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }
  getLeftChildIndex(i) {
    return i * 2 + 1;
  }
  getRightChildIndex(i) {
    return i * 2 + 2;
  }
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
  push(value) {
    this.heap.push(value);
    this.heapifyUp();
  }
  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parent = this.getParentIndex(index);
      if (this.heap[parent] > this.heap[index]) {
        this.swap(parent, index);
        index = parent;
      } else break;
    }
  }
  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return min;
  }
  heapifyDown() {
    let index = 0;
    const length = this.heap.length;
    while (this.getLeftChildIndex(index) < length) {
      let left = this.getLeftChildIndex(index);
      let right = this.getRightChildIndex(index);
      let smaller = left;
      if (right < length && this.heap[right] < this.heap[left]) {
        smaller = right;
      }
      if (this.heap[index] > this.heap[smaller]) {
        this.swap(index, smaller);
        index = smaller;
      } else break;
    }
  }
  size() {
    return this.heap.length;
  }
  peek() {
    return this.heap[0];
  }
}

function solution(scoville, K) {
  const heap = new MinHeap();
  for (let s of scoville) heap.push(s);

  let count = 0;
  while (heap.size() > 1 && heap.peek() < K) {
    const first = heap.pop();
    const second = heap.pop();
    const mixed = first + second * 2;
    heap.push(mixed);
    count++;
  }
  return heap.peek() >= K ? count : -1;
}

console.log(solution([1, 2, 3, 9, 10, 12], 7)); // 2
