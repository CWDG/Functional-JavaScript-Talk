(function (context) {
  var Sample = {};

  Sample.switchCase = function (val) {
    var returnValue;
    switch(val) {
      case 2:
        returnValue = 'A'
        break;
      case 6:
        returnValue = 'B'
        break;
      case 9:
        returnValue = 'C'
        break;
      default:
        returnValue = null;
    }
    return returnValue;
  };

  Sample.forEachArray = [1, 3, 5, 9, 6, 19, 10, 11];
  Sample.forEach = function (x) {
    var sum = 0;
    for (var index in Sample.forEachArray) {
      sum += Sample.forEachArray[index];
    }
    return sum;
  };

  Sample.twoDigits = function (x) {
    var z = x * 10;
    return function (y) {
      return z + y;
    }
  };

  Sample.whatTheFunc = function (bar) {
    return function (baz) {
      return function (derp) {
        return bar.callback(baz, derp, bar.value);
      };
    };
  };

  Sample.whatTheFuncData = {
    callback: function (x, y, z) { return [x, y, z].join(' '); },
    value: 'func?!'
  };

  Sample.whatTheFuncOut = Sample.whatTheFunc(Sample.whatTheFuncData)('What')('the');

  Sample.add = function () {
    console.log(this);
    var sum = 0;
    for (var i = 0, len = arguments.length; i < len; i++) {
      sum += arguments[i];
    }
    return sum;
  };

  var val = 2;
  Sample.hash = {2: 'A', 6: 'B', 9: 'C', '2': 'D'};
  Sample.hashAccess1 = {2: 'A', 6: 'B', 9: 'C', '2': 'D'}[val];
  Sample.hashAccess2 = Sample.hash[val];

  return context.Sample = Sample;
})(this)
