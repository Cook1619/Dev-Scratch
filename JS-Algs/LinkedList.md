                                        | Operation | Linked List | Array |
                                        |-----------|-------------|-------|
                                        | Push      | O(1)        | O(1)  |
                                        | Pop       | O(n)        | O(1)  |
                                        | Shift     | O(1)        | O(n)  |
                                        | Unshift   | O(1)        | O(n)  |
                                        | Insert    | O(n)        | O(n)  |
                                        | Delete    | O(n)        | O(n)  |
                                        | Lookup by Index | O(n)  | O(1)  |
                                        | Lookup by Value | O(n)  | O(n)  |

- **Push**: Both Linked Lists and Arrays have O(1) time complexity for push operations as they can add elements at the end in constant time.
- **Pop**: Linked Lists have O(n) time complexity because they need to traverse the entire list to remove the last element. Arrays have O(1) time complexity as they can directly access the last element.
- **Shift**: Linked Lists can remove the first element in O(1) time, while Arrays need to shift all elements down by one position, resulting in O(n) time complexity.
- **Unshift**: Linked Lists can add an element at the beginning in O(1) time, while Arrays need to shift all elements to make room for the new element, resulting in O(n) time complexity.
- **Insert/Delete**: Both Linked Lists and Arrays have O(n) time complexity for insert and delete operations as they may need to shift elements during these operations.
- **Lookup by Index**: Linked Lists have O(n) time complexity because they need to traverse the list until they find the element at the given index. Arrays can directly access elements by their index in O(1) time.
- **Lookup by Value**: Both Linked Lists and Arrays have O(n) time complexity for this operation as they may need to traverse all elements to find the given value.

```js
class Node {
  constructor(value){
    this.value = value
    this.next = null
  }
}


class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }
  push(value) {
    const newNode = new Node(value);
    // checks to see if the linked list is empty
    if (!this.head) {
      // if empty it sets the head and tail to the new node
      this.head = newNode;
      this.tail = newNode;
    } else {
      // if its not empty were are updating the pre-existing tail next pointer to the new node
      this.tail.next = newNode;
      // now we set the new tail to the new node
      this.tail = newNode;
    }
    // increase length by 1
    this.length++;
    // return the entire linked list
    return this;
  }
  /**
 * Removes the last node from the linked list and returns it.
 *
 * If the list is empty (i.e., the head is null), it returns undefined.
 * If the list has only one node, it sets both the head and tail to null.
 * For lists with multiple nodes, it iterates through the list to find the second to last node,
 * sets that as the new tail, and removes the reference to the last node.
 *
 * @returns {Node|undefined} The node that was removed, or undefined if the list was empty.
 */
  pop(value) {
    // 0 items
    if (!this.head) {
      return undefined;
    }
    // multiple items normal state
    let temp = this.head;
    let pre = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    // 1 item
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }
  unshift(value){
    const newNode = new Node(value)
    if(!this.head){
        this.head = newNode
        this.tail = newNode
    }else {
        newNode.next = this.head
        this.head = newNode
    }
    this.length++
    return this
  }

  shift() {
    if(!this.head) return undefined
    let temp = this.head;
    this.head = this.head.next
    // this removes the pointer to the heads next pointer
    temp.next = null
    this.length--
    // edge case for when there is only one value in linked list
    if(this.length === 0){
        this.tail = null
    }
    return temp
  }

  get(index){
    if(index < 0 || index >= this.length){
        return undefined;
    }
    let temp = this.head;
    for(let i = 0; i < index; i++){
        temp = temp.next
    }
    return temp;
  }
}

let linkedList = new LinkedList(4)
linkedList.push(7)
linkedList ->
LinkedList {
  head: Node {
    value: 4,
    next: Node {
      value: 7,
      next: null,
    },
  },
  tail: Node {
    value: 7,
    next: null,
  },
  length: 2,
}
```
