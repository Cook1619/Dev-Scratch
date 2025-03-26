// *  Arrays

// *  An array is a collection of elements stored in a contiguous memory location. It is one of the most commonly used linear data structures in JavaScript.

// ! Key Operations:
// * Access: arr[index]
// *  Add: push() (end), unshift() (start)
// *  Remove: pop() (end), shift() (start)

let arr = [1, 2, 3, 4];

// Access elements
console.log(arr[0]); // 1

// Add elements
arr.push(5); // Add to the end
arr.unshift(0); // Add to the start
console.log(arr); // [0, 1, 2, 3, 4, 5]

// Remove elements
arr.pop(); // Remove from the end
arr.shift(); // Remove from the start
console.log(arr); // [1, 2, 3, 4]

// * Linked Lists, not nativly supported by JS, but can be created with classes

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Add to the end
    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    // Remove from the start
    shift() {
        if (!this.head) return null;
        const temp = this.head;
        this.head = this.head.next;
        this.length--;
        return temp.value;
    }
}

const list = new LinkedList();
list.push(1);
list.push(2);
list.push(3);
console.log(list.shift()); // 1
console.log(list.shift()); // 2