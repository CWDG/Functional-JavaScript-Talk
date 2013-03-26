(function (context) {
  var λ = {};

  λ.map = function (coll, func) {
    var output = [];
    for (var index in coll) {
      output.push(func(coll[index]));
    }
    return output;
  };

  λ.reduce = function (coll, func) {
  };
})(this);
