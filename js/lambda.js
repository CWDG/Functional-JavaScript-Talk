(function (context) {
  var λ = {};

  λ.map = function (coll, func) {
    var output = [];
    for (var index in coll) {
      if (coll.hasOwnProperty(index)) {
        output.push(func(coll[index]));
      }
    }
    return output;
  };

  λ.reduce = function (coll, func, memo) {
    for (var index in coll) {
      if (coll.hasOwnProperty(index)) {
        if (memo === undefined) {
          memo = coll[index];
        } else {
          memo = func(memo, coll[index], index);
        }
      }
    }
    return memo;
  };

  context.λ = λ;
  context.L = λ;
})(this);


var inc = function (v) {
  return v + 1;
};

var product = function (pro, next) {
  return pro * next;
};


assert(equalToString(λ.map([1,2,3], inc), [2,3,4]), "Mappin'");
assert(equal(λ.reduce([2,3,4], product), 24), "Reducin'");
assert(equal(λ.reduce([2,3,4], product, 3), 72), "Reducin' with memo");

function equal(v1, v2) {
  return v1 === v2;
}

function equalToString(v1, v2) {
  return v1.toString() === v2.toString();
}
function assert(value, message) {
  if (!value) {
    throw "FAILED: " + message;
  } else {
    console.log(message + " works!");
  }
}
