Tinytest.add("coffeescript - presence", function(test) {
  test.isTrue(Meteor.__COFFEESCRIPT_PRESENT);
});
Tinytest.add("literate coffeescript - presence", function(test) {
  test.isTrue(Meteor.__LITCOFFEESCRIPT_PRESENT);
});

Tinytest.add("coffeescript - exported variable", function(test) {
  test.equal(COFFEESCRIPT_EXPORTED, 123);
  test.equal(Package.coffeescript.COFFEESCRIPT_EXPORTED, 123);
});
Tinytest.add("coffeescript - exported variable with 'use strict'", function(test) {
  test.equal(COFFEESCRIPT_EXPORTED2, 456);
  test.equal(Package.coffeescript.COFFEESCRIPT_EXPORTED2, 456);
});
