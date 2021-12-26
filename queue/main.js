class Queue {
    constructor() {
        this.array = new Array;
    }
    //! option 1
    // enqueue(obj) {
    //     this.array.push(obj)
    //     console.log(this.array)
    // }
    // dequeue() {
    //     this.array.shift()
    //     console.log(this.array);
    // }

    //! option 2
    enqueue(obj) {
        this.array.unshift(obj)
        console.log(this.array)
    }
    dequeue() {
        this.array.pop()
        console.log(this.array);
    }
}
const queue = new Queue;
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();


// export default Queue;