(function (context) {
  // slice is shorter and I am a lazy.
  var slice = Array.prototype.slice;

  Function.prototype.partial = function () {
    // TODO: Implement
  };

  Function.prototype.partial = function () {
    var func = this;
    var args = slice.apply(arguments);

    return function () {
      return func.apply(this, args.concat(slice.apply(arguments)));
    };
  };

  Function.aprototype.partial = function () {
    // TODO: Implement
  };

  Function.prototype.apartial = function (self) {
    var func = this;
    var args = slice.apply(arguments, 1);

    return function () {
      return func.apply(self, args.concat(slice.apply(arguments)));
    };
  };

  Function.object.partial = function (funcName) {
    // TODO: Implement
  };

  Function.object.partial = function (funcName) {
    var func = this[funcName];
    var self = this;
    var args = slice.apply(arguments, 1);

    return function () {
      return func.apply(self, args.concat(slice.apply(arguments)));
    };
  };
})(this);
