const ShoppingBasket = function () {
  this.items = [];
}
ShoppingBasket.prototype.getItemCount = function(){
  return this.items.length;
}
module.exports = ShoppingBasket;
