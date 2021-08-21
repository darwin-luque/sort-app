"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var Sorter_1 = require("./Sorter");
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    return Node;
}());
var LinkedList = /** @class */ (function (_super) {
    __extends(LinkedList, _super);
    function LinkedList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.head = null;
        return _this;
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
    LinkedList.prototype.log = function () {
        if (!this.head) {
            return '';
        }
        var node = this.head;
        var printStatement = '';
        while (node) {
            printStatement += node.data + " => ";
            node = node.next;
        }
        return printStatement + "null";
    };
    return LinkedList;
}(Sorter_1.Sorter));
exports.LinkedList = LinkedList;
