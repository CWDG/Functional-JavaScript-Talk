(function (context) {
  var Sample = {};

  Sample.switchCase = function (x) {
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

  return context.Sample = Sample;

  var val = 2;
  Sample.hash = {2: 'A', 6: 'B', 9: 'C', '2': 'D'};
  Sample.hashAccess1 = {2: 'A', 6: 'B', 9: 'C', '2': 'D'}[val];
  Sample.hashAccess2 = Sample.hash[val];
})(this)
