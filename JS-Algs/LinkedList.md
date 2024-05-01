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