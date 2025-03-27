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

/* 
* 1. Memory Usage
* Arrays:
!  Require contiguous memory allocation.
!  Fixed size in some languages (not in JavaScript, where arrays are dynamic).
!  May waste memory if allocated size is larger than needed.
* Linked Lists:
!  Use dynamic memory allocation (each node is stored separately).
!  Require extra memory for pointers (next in singly linked lists, next and prev in doubly linked lists).
* Trade-off: Linked lists use more memory due to the overhead of storing pointers, but they are more flexible for dynamic resizing.

* 2. Access Time
* Arrays:
!  O(1) time complexity for accessing elements by index (e.g., arr[3]).
* Linked Lists:
!  O(n) time complexity for accessing elements, as you must traverse the list from the head to the desired node.
* Trade-off: Arrays are better for random access, while linked lists are slower for this operation.

* 3. Insertion and Deletion
* Arrays:
 ! O(n) for insertion or deletion at arbitrary positions because elements need to be shifted.
 ! O(1) for adding/removing elements at the end (e.g., push() or pop()).
* Linked Lists:
 ! O(1) for insertion or deletion at the beginning or end (if you maintain a tail pointer).
 ! O(n) for insertion or deletion at arbitrary positions (requires traversal).
* Trade-off: Linked lists are better for frequent insertions and deletions, especially at the beginning or end.

* 4. Search
* Arrays:
  ! O(n) for searching an element (linear search).
  ! O(log n) for searching in sorted arrays (binary search).
* Linked Lists:
  ! O(n) for searching, as you must traverse the list.
* Trade-off: Arrays are better for searching, especially if sorted.

* 5. Resizing
* Arrays:
  ! In JavaScript, arrays are dynamic, but resizing still involves copying elements to a new memory location when the capacity is exceeded.
* Linked Lists:
  ! No resizing is needed, as nodes are dynamically allocated.
* Trade-off: Linked lists are better for dynamic resizing without overhead.

* 6. Cache Locality
* Arrays:
  ! Stored in contiguous memory, so they benefit from cache locality (faster access due to proximity in memory).
* Linked Lists:
  ! Nodes are scattered in memory, so they do not benefit from cache locality.
* Trade-off: Arrays are faster for sequential access due to better cache performance.

* 7. Complexity
* Arrays:
  ! Simple to implement and use.
* Linked Lists:
  ! More complex to implement (requires managing pointers).
* Trade-off: Arrays are easier to work with, while linked lists require more effort to implement and debug.

* When to Use Arrays
  ! When you need fast random access to elements.
  ! When the size of the data is relatively small or predictable.
  ! When you perform few insertions or deletions.

* When to Use Linked Lists
  ! When you need frequent insertions or deletions, especially at the beginning or end.
  ! When the size of the data is highly dynamic and unpredictable.
  ! When memory reallocation overhead (as in arrays) is a concern

  
Feature	                 Arrays	                   Linked Lists
Memory Usage	     Contiguous, less overhead	    Dynamic, more overhead
Access Time	         O(1) (random access)	        O(n) (traversal)
Insertion/Deletion	 O(n) (arbitrary)	            O(1) (beginning/end)
Search	             O(n) or O(log n)	            O(n)
Resizing	         May require copying	        No resizing needed
Cache Performance	 Good (cache locality)	        Poor
Complexity	         Simple	                        More complex
*/

/*
    # Stacks
        A stack is LIFO (Last im, first out) data structure. You can use an array to implement a stack in JS

    ## Key Operations
        - Push: Add to the top
        - Pop: Remove from the top
        - Peek: View the top element 
*/

class Stack {
    constructor() {
        this.items = [];
    }

    push(value) {
        this.items.push(value);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek()); // 3
console.log(stack.pop()); // 3
console.log(stack.pop()); // 2
