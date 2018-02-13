const ShoppingBasket = function () {
  this.items = [];
}
ShoppingBasket.prototype.getItemCount = function(){
  return this.items.length;
}

ShoppingBasket.prototype.addItem = function (item) {
  this.items.push(item);
}
module.exports = ShoppingBasket;
