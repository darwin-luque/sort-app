"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i += 1) {
            for (var j = 0; j < length - i - 1; j += 1) {
                if (this.collection[j] > this.collection[j + 1]) {
                    var rightHand = this.collection[j + 1];
                    this.collection[j + 1] = this.collection[j];
                    this.collection[j] = rightHand;
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
