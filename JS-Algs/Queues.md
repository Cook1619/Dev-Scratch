# Queues

- A queue is a linear collection of nodes that exclusively adds (enqueues) nodes to the tail, and removes (dequeues) nodes from the head of the queue. They can be implemented using different underlying data structures, but one of the more common methods is to use a singly linked list, which is what you will be using for your JavaScript Queue class. Think of the queue data structure as an actual queue, or line, in a grocery store. The person at the front gets to leave the line first, and every person who joins the line has to join in the back.

## A queue is a data structure which contains an ordered set of data.

# Queues provide three methods for interaction:

- Enqueue - adds data to the “back” or end of the queue
- Dequeue - provides and removes data from the “front” or beginning of the queue
- Peek - reveals data from the “front” of the queue without removing it
- This data structure mimics a physical queue of objects like a line of people buying movie tickets. Each person has a name (the data). The first person to enqueue, or get into line, is both at the front and back of the line. As each new person enqueues, they become the new back of the line.

### When the cashier serves someone, they begin at the front of the line (or people would get very mad!). Each person served is dequeued from the front of the line, they purchase a ticket and leave.

### If they just want to know who is next in line, they can peek and get their name without removing them from the queue.

### The first person in the queue is the first to be served. Queues are a First In, First Out or FIFO structure.