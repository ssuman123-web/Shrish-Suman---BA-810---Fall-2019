function SalesOrderItem(item, price) {
    let salesorderitem = {};
    salesorderitem.item = item;
    salesorderitem.price = price;
    salesorderitem.value = function() {
        return item * price;
    }
    return salesorderitem;
}

console.log(SalesOrderItem);
module.exports = SalesOrderItem;

function SalesOrderItem(item, price) {
    let salesorderitem = {};
    salesorderitem.item = item;
    salesorderitem.price = price;
    salesorderitem.value = function() {
        return item * price;
    }
    return salesorderitem;
}

console.log(SalesOrderItem);
module.exports = SalesOrderItem;