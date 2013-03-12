(function (context) {
  var Sample = {};

  Sample.switchCase = function (x) {
    var returnValue;
    swtich(val) {
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

  return context.Sample = Sample;

  Sample.hashAccess = {2: 'A', 6: 'B', 9: 'C', '2': 'D'}[val];
})(this)
