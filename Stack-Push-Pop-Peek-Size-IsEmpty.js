/**
 * Class to represent a stack using an array to store the stacked items.
 * Follows a LIFO (Last In First Out) order where new items are stacked on
 * top (back of array) and removed items are removed from the top / back.
 */
class Stack {
    /**
     * The constructor is executed when instantiating a new Stack() to construct
     * a new instance.
     * @returns {Stack} This new Stack instance is returned without having to
     *    explicitly write 'return' (implicit return).
     */
    constructor() {
        this.items = [];
    }

    /**
     * Adds a new given item to the top / back of this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to be added to the top / back.
     * @returns {number} The new length of this stack.
     */
    push(item){
        this.items.push(item);
        return this.items.length;
    }

    /**
     * Removes the top / last item from this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The removed item or undefined if this stack was empty.
     */
    pop(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items.pop();
    }

    /**
     * Retrieves the top / last item from this stack without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The top / last item of this stack.
     */
    peek(){
        if(this.isEmpty()){
            return null;
        }
        return this.items[this.items.length - 1];
    }

    /**
     * Returns whether or not this stack is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty(){
        if(this.items.length == 0){
            return true;
        }
        return false;
    }

    /**
     * Returns the size of this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    size(){
        return this.items.length;
    }
}

// Extra
class StackNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.count = 0;
    }
}

class LinkedListStack {
    constructor() {
        this.head = null;
    }

    linkIsEmpty(){
        if(this.head == null){
            return true;
        }
        return false;
    }

    linkPush(data){
        let newNode = new StackNode(data);
        if(this.head == null){
            this.head = newNode;
            return this;
        }
        let runner = this.head;
        while(runner.next){
            runner = runner.next;
        }
        runner.next = newNode;
        return this;
    }

    linkPop(){
        if(this.linkIsEmpty()){
            return undefined;
        }
        let runner = this.head;
        let next = runner.next;
        while(next.next){
            runner = runner.next;
            next = next.next;
        }
        let temp = runner.next.data;
        runner.next = null;
        return temp;
    }

    linkPeek(){
        if(this.linkIsEmpty()){
            return null;
        }
        let runner = this.head;
        while(runner.next){
            runner = runner.next;
        }
        return runner.data;
    }

    linkSize(){
        if(this.linkIsEmpty()){
            return 0;
        }
        let runner = this.head;
        let count = 1;
        while(runner.next){
            runner = runner.next;
            count++;
        }
        return count;
    }

}

let newStack = new Stack();

newStack.push(4);
newStack.push(13);
newStack.push(8);
newStack.push(11);
newStack.push(25);
console.log(newStack);
console.log(newStack.peek());
console.log(newStack.size());
console.log(newStack.pop());
console.log(newStack);

let linkStack = new LinkedListStack();

linkStack.linkPush(4);
linkStack.linkPush(33);
linkStack.linkPush(17);
linkStack.linkPush(42);
linkStack.linkPush(72);
linkStack.linkPush(6);
linkStack.linkPush(13);
console.log(linkStack);
console.log(linkStack.linkSize());
console.log(linkStack.linkPop());
console.log(linkStack.linkPeek());