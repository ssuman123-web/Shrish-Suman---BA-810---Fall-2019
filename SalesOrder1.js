function SalesOrder(customer, salesTaxRate, items) {
    let salesOrder = {};
    salesOrder.customer = customer;
    salesOrder.salesTaxRate = salesTaxRate;
    salesOrder.ArrayOfitems = items;

    salesOrder.getValue = function() {
        totalValue = 0.0;
        salesOrder.items.forEach(item => {
            totalValue = totalValue + ((item.price) * item.quantity);
        });
        return totalValue;
    }


    salesOrder.getTotalValue = function() {
        price = salesOrder.getValue();
        SalesTax = salesOrder.getValue() + (price * salesOrder.salesTaxRate);
        return price;
    }

    return salesOrder;
}

module.exports = SalesOrder;