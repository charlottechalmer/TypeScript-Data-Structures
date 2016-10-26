/*
    Data Structures in TypeScript

    To Compile:
        tsc structures.ts
        (optionally: tsc structures.ts --noImplicitAny)
    To run:
        node structures.js

*/
// Basic wrapper for a primitive
var Item = (function () {
    function Item(value) {
        this.value = value;
    }
    return Item;
}());
function assert(val1, val2, message) {
    if (val1 !== val2) {
        console.log("Assertion Failed: ", message);
        console.log(val1, "does not equal", val2);
    }
}
// 1. Stack
/*
 * A stack is a LIFO (Last In First Out) data structure. We use a stack when we
 * need to keep track of data that is nested, or when we need to make sure that
 * we solve all the sub-problems before solving a main problem. JavaScript uses
 * a stack to keep track of our function calls.
 */
var Stack = (function () {
    function Stack() {
        // initialize our storage so that it actually is an array.
        this.storage = [];
    }
    Stack.prototype.addItem = function (i) {
        // void means that this function doesn't return anything.
        // to add an item, push that item onto the end of the array.
        this.storage.push(i);
    };
    Stack.prototype.getLastItem = function () {
        // todo: remove and return the last item on the storage
        return this.storage.pop();
    };
    Stack.prototype.peekLastItem = function () {
        // todo: return a reference to the last item in storage without removing
        return this.storage[this.storage.length - 1];
    };
    Stack.prototype.isEmpty = function () {
        // todo: return true if storage is empty, false otherwise
        if (this.storage.length === 0) {
            return true;
        }
        return false;
    };
    return Stack;
}());
var st = new Stack();
assert(st.isEmpty(), true, "Stack is empty on creation");
st.addItem(new Item(3));
assert(st.isEmpty(), false, "Stack is not empty after one item added");
var i = st.peekLastItem();
assert(i.value, 3, "Peeking last item gets us the last item");
assert(st.isEmpty(), false, "Stack is not emptied by peeking");
var i2 = st.getLastItem();
assert(i2.value, 3, "Stack returns last item on getLastItem");
assert(st.isEmpty(), true, "Stack is empty after popping last item");
// 2. Queue
/*
 * A queue is a FIFO (First In First Out) data structure. We use a queue when we
 * want to handle things in the order they are recieved. JavaScript uses a queue
 * to handle asynch functions in the order that they fire.
 */
// Write, from scratch, an implementation of a Queue, and at least one test for
// each method on the Queue.
var Queue = (function () {
    function Queue() {
        // initialize our storage so that it actually is an array.
        this.storage = [];
    }
    Queue.prototype.addItem = function (i) {
        // void means that this function doesn't return anything.
        // to add an item, push that item onto the end of the array.
        this.storage.push(i);
    };
    Queue.prototype.getFirstItem = function () {
        // todo: remove and return the last item on the storage
        return this.storage.shift();
    };
    Queue.prototype.peekFirstItem = function () {
        // todo: return a reference to the last item in storage without removing
        return this.storage[0];
    };
    Queue.prototype.isEmpty = function () {
        // todo: return true if storage is empty, false otherwise
        if (this.storage.length === 0) {
            return true;
        }
        return false;
    };
    return Queue;
}());
var q = new Queue();
assert(st.isEmpty(), true, "Stack is empty on creation");
q.addItem(new Item(3));
assert(q.isEmpty(), false, "Stack is not empty after one item added");
var j = q.peekFirstItem();
assert(j.value, 3, "Peeking last item gets us the last item");
assert(q.isEmpty(), false, "Stack is not emptied by peeking");
var j2 = q.getFirstItem();
assert(j2.value, 3, "Stack returns last item on getLastItem");
assert(q.isEmpty(), true, "Stack is empty after popping last item");
// 3. Pick a Data Structure
/* Pick one structure from http://en.wikipedia.org/wiki/List_of_data_structures
 * and implement it in
 * TypeScript. Be sure to include tests! Make sure to choose something that
 * will be a good challenge for you! (Go with "Heap" if you're unsure. Ask Erty
 * if you need help :)
 */
var ItemPriority = (function () {
    function ItemPriority(value, priority) {
        this.value = value;
        this.priority = priority;
    }
    return ItemPriority;
}());
var PriorityQueue = (function () {
    function PriorityQueue() {
        this.storage = [];
    }
    PriorityQueue.prototype.isEmpty = function () {
        if (this.storage.length === 0) {
            return true;
        }
        return false;
    };
    PriorityQueue.prototype.addItemPriority = function (i) {
        // void means that this function doesn't return anything.
        // to add an item, push that item onto the end of the array.
        this.storage.push(i);
    };
    PriorityQueue.prototype.peekSmallestPriority = function () {
        var a = this.storage[0];
        for (var i_1 = 0; i_1 < this.storage.length; i_1++) {
            if (this.storage[i_1].priority > a.priority) {
                a = this.storage[i_1];
            }
        }
        return a.value;
    };
    PriorityQueue.prototype.getSmallestPriority = function () {
        var a = this.storage[0];
        for (var i_2 = 0; i_2 < this.storage.length; i_2++) {
            if (this.storage[i_2].priority > a.priority) {
                a = this.storage[i_2];
            }
        }
        this.storage.splice(this.storage.indexOf(a), 1);
        return a.value;
    };
    PriorityQueue.prototype.clearStorage = function () {
        this.storage = [];
    };
    return PriorityQueue;
}());
var pq = new PriorityQueue();
assert(pq.isEmpty(), true, "Stack is empty on creation");
pq.addItemPriority(new ItemPriority("cat", 3));
assert(pq.isEmpty(), false, "Stack is not empty after one item added");
var k = pq.peekSmallestPriority();
assert(k, "cat", "Peeking last item gets us the last item");
assert(pq.isEmpty(), false, "Stack is not emptied by peeking");
var k2 = pq.getSmallestPriority();
assert(k2, "cat", "Stack returns last item on getLastItem");
assert(pq.isEmpty(), true, "Stack is empty after popping last item");
