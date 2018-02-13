const assert = require('assert');
const Item = require('../item');

describe('Item', function () {

  let item;

  beforeEach(function () {
    item = new Item('beer', 2.00, false);
  })

  it('should have a name', function () {
    assert.strictEqual(item.name, 'beer');
  })

})
