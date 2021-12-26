class Stack {
    constructor() {
        this.array = new Array
    }
    pushToStack(obj) {
        this.array.push(obj)
    }
    popFromStack() {
        this.array.pop()
    }
}
const stack = new Stack;
stack.pushToStack(1)
stack.pushToStack(2)
stack.pushToStack(3)

console.log(stack);
stack.popFromStack()
console.log(stack);



// export default Stack;