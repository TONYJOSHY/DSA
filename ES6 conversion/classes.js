"use strict";
var Rectangle = /** @class */ (function () {
  function Rectangle(height, width) {
    this.height = height;
    this.width = width;
  }
  Object.defineProperty(Rectangle.prototype, "h", {
    get: function () {
      return this.height;
    },
    set: function (val) {
      this.height = val;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(Rectangle.prototype, "w", {
    set: function (val) {
      this.width = val;
    },
    enumerable: false,
    configurable: true,
  });
  Rectangle.prototype.printHeight = function () {
    console.log("height ", this.height);
  };
  Rectangle.doSomething = function () {
    return this.displayName;
  };
  Rectangle.displayName = "Point";
  return Rectangle;
})();
