var test = require("tape");
var arrayCompare = require('./index').arrayCompare;
var tolerantArrayCompare = require('./index').tolerantArrayCompare;

test("arrayCompare() should return false, when paramters don't have the same length.", function(t) {
    t.equal(arrayCompare([2,3,4],[2]), false);
    t.end();
});

test("arrayCompare() should return true, when comparing two empty arrays.", function(t) {
    t.equal(arrayCompare([],[]), true);
    t.end();
});

test("arrayCompare() should return false, when paramters don't have the same elements.", function(t) {
    t.equal(arrayCompare([2,3,4],[2,3,5]), false);
    t.end();
});

test("arrayCompare() should return true, when paramters are equal.", function(t){
    t.equal(arrayCompare([2,3,4],[2,3,4]), true);
    t.end();
});

test("tolerantArrayCompare() should return true, because arrays are equal.", function(t) {
    t.equal(tolerantArrayCompare([1, 3, 6],[1, 3, 6], 0.1), true);
    t.end();
});

test("tolerantArrayCompare() should return false, because arrays are different and tolerance is exceeded.", function(t) {
    t.equal(tolerantArrayCompare([1, 3, 5],[1, 3, 6], 0.1), false);
    t.end();
});

test("tolerantArrayCompare() should return true, because arrays are different but  tolerance is not exceeded.", function(t) {
    t.equal(tolerantArrayCompare([2.1, 3, 5],[2, 3, 5], 0.2), true);
    t.end();
});

