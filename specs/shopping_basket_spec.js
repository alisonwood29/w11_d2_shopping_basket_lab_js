const assert = require('assert');
const ShoppingBasket = require('../shopping_basket');
const Item = require('../item');

describe('shopping basket', function () {

  let shoppingBasket;
  let item;

  beforeEach(function () {
    shoppingBasket = new ShoppingBasket();
  });

  it('should have items', function () {
    assert.deepStrictEqual(shoppingBasket.items, []);
  });

  it('should start empty', function () {
    const actual = shoppingBasket.getItemCount();
    assert.strictEqual(actual, 0);
  });

  it('should be able to add an item', function () {
    shoppingBasket.addItem(item);
    const actual = shoppingBasket.getItemCount();
    assert.strictEqual(actual, 1);
  });



})
