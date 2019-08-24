let a = [1, 2, 3, 4, 5];
let b = [1, 2];
console.log(a)
console.log(b)

Array.prototype.diff = function(a) {
    return this.filter(function(i) {return a.indexOf(i) < 0;});
};

var fuck = a.diff(b);
console.log(fuck)