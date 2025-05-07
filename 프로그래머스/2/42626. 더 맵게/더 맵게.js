function push(heap, value) {
  heap.push(value);
  let idx = heap.length - 1;
  while (idx > 0) {
    let parent = Math.floor((idx - 1) / 2);
    if (heap[parent] > heap[idx]) {
      [heap[parent], heap[idx]] = [heap[idx], heap[parent]];
      idx = parent;
    } else break;
  }
}

function pop(heap) {
  if (heap.length === 1) return heap.pop();
  const min = heap[0];
  heap[0] = heap.pop();
  let idx = 0;
  while (true) {
    let left = idx * 2 + 1;
    let right = idx * 2 + 2;
    let smallest = idx;
    if (left < heap.length && heap[left] < heap[smallest]) smallest = left;
    if (right < heap.length && heap[right] < heap[smallest]) smallest = right;
    if (smallest !== idx) {
      [heap[smallest], heap[idx]] = [heap[idx], heap[smallest]];
      idx = smallest;
    } else break;
  }
  return min;
}

function solution(scoville, K) {

  const heap = [];
  for (let s of scoville) push(heap, s);

  let count = 0;
  while (heap.length > 1 && heap[0] < K) {
    const first = pop(heap);
    const second = pop(heap);
    push(heap, first + second * 2);
    count++;
  }
  return heap[0] >= K ? count : -1;
}