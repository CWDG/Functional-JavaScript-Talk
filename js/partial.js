(function (context) {
  // slice is shorter and I am a lazy.
  var slice = Array.prototype.slice;

  Function.prototype.partial = function () {
    var func = this;
    var args = slice.apply(arguments);

    return function () {
      return func.apply(this, args.concat(slice.apply(arguments)));
    };
  };


  Function.prototype.apartial = function (self) {
    var func = this;
    var args = slice.apply(arguments);
    args = args.slice(1);

    return function () {
      return func.apply(self, args.concat(slice.apply(arguments)));
    };
  };

  Object.prototype.partial = function (funcName) {
    var func = this[funcName];
    var self = this;
    var args = slice.apply(arguments);
    args = args.slice(1);

    return function () {
      return func.apply(self, args.concat(slice.apply(arguments)));
    };
  };
})(this);
