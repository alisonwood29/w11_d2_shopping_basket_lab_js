const assert = require('assert');
const ShoppingBasket = require('../shopping_basket');

describe('shopping basket', function () {

  let shoppingBasket;

  beforeEach(function () {
    shoppingBasket = new ShoppingBasket();
  });

  it('should have items', function () {
    assert.deepStrictEqual(shoppingBasket.items, []);
  })

  it('should start empty', function () {
    const actual = shoppingBasket.getItemCount();
    assert.strictEqual(actual, 0);
  });



})
