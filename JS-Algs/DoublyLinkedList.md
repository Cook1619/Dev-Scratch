| Operation         | Doubly Linked List | Array |
|--------------------|--------------------|-------|
| Push              | O(1)               | O(1)  |
| Pop               | O(1)               | O(1)  |
| Shift             | O(1)               | O(n)  |
| Unshift           | O(1)               | O(n)  |
| Insert            | O(n)               | O(n)  |
| Delete            | O(n)               | O(n)  |
| Lookup by Index   | O(n)               | O(1)  |
| Lookup by Value   | O(n)               | O(n)  |

- **Push**: Doubly Linked Lists have O(1) time complexity for push operations as they can add elements at the end in constant time.
- **Pop**: Doubly Linked Lists have O(1) time complexity because they can directly access the last node and remove it.
- **Shift**: Doubly Linked Lists can remove the first element in O(1) time, while Arrays need to shift all elements down by one position, resulting in O(n) time complexity.
- **Unshift**: Doubly Linked Lists can add an element at the beginning in O(1) time, while Arrays need to shift all elements to make room for the new element, resulting in O(n) time complexity.
- **Insert/Delete**: Both Doubly Linked Lists and Arrays have O(n) time complexity for insert and delete operations as they may need to traverse elements during these operations.
- **Lookup by Index**: Doubly Linked Lists have O(n) time complexity because they need to traverse the list until they find the element at the given index. Arrays can directly access elements by their index in O(1) time.
- **Lookup by Value**: Both Doubly Linked Lists and Arrays have O(n) time complexity for this operation as they may need to traverse all elements to find the given value.

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;
    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let temp;
    if (index < this.length / 2) {
      temp = this.head;
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
    } else {
      temp = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        temp = temp.prev;
      }
    }
    return temp;
  }

  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    if (index < 0 || index > this.length) return false;

    const newNode = new Node(value);
    const before = this.get(index - 1);
    const after = before.next;

    before.next = newNode;
    newNode.prev = before;
    newNode.next = after;
    after.prev = newNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    if (index < 0 || index >= this.length) return undefined;

    const temp = this.get(index);
    temp.prev.next = temp.next;
    temp.next.prev = temp.prev;

    temp.next = null;
    temp.prev = null;

    this.length--;
    return temp;
  }
}

let doublyLinkedList = new DoublyLinkedList(4);
doublyLinkedList.push(7);
doublyLinkedList ->
DoublyLinkedList {
  head: Node {
    value: 4,
    next: Node {
      value: 7,
      next: null,
      prev: [Node]
    },
    prev: null
  },
  tail: Node {
    value: 7,
    next: null,
    prev: Node {
      value: 4,
      next: [Node],
      prev: null
    }
  },
  length: 2
}