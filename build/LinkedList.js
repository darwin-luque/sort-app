"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    return Node;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
    }
    LinkedList.prototype.add = function (data) {
        var node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        var tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
    };
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            var output = 0;
            var tail = this.head;
            while (tail) {
                output++;
                tail = tail.next;
            }
            return output;
        },
        enumerable: false,
        configurable: true
    });
    LinkedList.prototype.at = function (index) {
        if (!this.head) {
            throw new Error('Index out of bounds');
        }
        var counter = 0;
        var node = this.head;
        while (node) {
            if (index === counter) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error('Index out of bounds');
    };
    LinkedList.prototype.compare = function (leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error('List is empty');
        }
        return this.at(leftIndex).data > this.at(rightIndex).data;
    };
    LinkedList.prototype.swap = function (leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error('List is empty');
        }
        var node = this.head;
        if (node.next) {
            if (leftIndex === 0) {
                var nextNode = node.next;
                node.next = nextNode.next;
                nextNode.next = node;
                this.head = nextNode;
                return;
            }
            var counter = 0;
            while (node.next) {
                if (counter + 1 === leftIndex) {
                    var nextNode = node.next;
                    if (nextNode.next) {
                        node.next = nextNode.next;
                        nextNode.next = node.next.next;
                        node.next.next = nextNode;
                    }
                    return;
                }
                node = node.next;
                counter++;
            }
        }
        throw new Error('Index out of bounds');
    };
    LinkedList.prototype.print = function () {
        if (!this.head) {
            return;
        }
        var node = this.head;
        var printStatement = '';
        while (node) {
            printStatement += node.data + " => ";
            node = node.next;
        }
        console.log(printStatement);
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
