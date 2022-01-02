// const n = new Node;
// const list = new LinkedList();

// class Node {
//     constructor() {
//         this.head = null;
//         this.value = null;
//         this.tail = null;
//     }
// }
// class LinkedList {
//     constructor() {
//         Node.head.value = "head";
//         Node.head.next = Node.tail;
//         Node.tail.value = "tail";
//         Node.tail.next = null;
//     }
// }

const obj = {
    head: {
        value: 1,
        next: {
            value: null,
            next: null
        }
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    pushToHead(arg) {
        let newNode = new Node(arg)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }
}

let node1 = new Node(1);
let list = new LinkedList(node1);
console.log(list);

list.pushToHead(8);
list.pushToHead(7);

console.log(list);
