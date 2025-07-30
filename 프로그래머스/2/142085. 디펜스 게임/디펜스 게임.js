class MinHeap {
    constructor() {
        this.heap = [ null ]; 
    }
    
    size() {
        return this.heap.length;
    }
    
    swap(idx1, idx2) {
        [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
    }
    
    add(value) {
        this.heap.push(value);
        this.bubbleUp();
    }
    
    poll(){
        if(this.heap.length === 0) return null;
        if(this.heap.length === 1) return this.heap.pop();
        
        const minValue = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return minValue;
    }
    
    bubbleUp() {
        let currentIndex = this.heap.length - 1;
        while(currentIndex > 0) {
            const parentIndex = Math.floor((currentIndex - 1) / 2);
            
            if(this.heap[parentIndex] <= this.heap[currentIndex]) break;
            this.swap(currentIndex,parentIndex);
            currentIndex = parentIndex;
        }
    }
    
    bubbleDown(){
        let index = 0;
        while(true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let smallestChildIndex = index;
            
            if(leftChildIndex <= this.heap.length && this.heap[leftChildIndex] < this.heap[smallestChildIndex]){
                smallestChildIndex = leftChildIndex;
            }
            
            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestChildIndex]) {
                    smallestChildIndex = rightChildIndex;             
            }
            
            if(smallestChildIndex === index) break;
            
            this.swap(index, smallestChildIndex);
            index = smallestChildIndex;
        }
    }
}


function solution(n, k, enemy) {
    
    const minHeap = new MinHeap();
    for(let i=0; i<enemy.length;i++){
        const currentEnemy = enemy[i];
        minHeap.add(currentEnemy);
        
        if(minHeap.size() > k){
            const weakestEnemy = minHeap.poll();
            n -= weakestEnemy;
        }
        
        if(n < 0) return i;
    }
    return enemy.length;
}