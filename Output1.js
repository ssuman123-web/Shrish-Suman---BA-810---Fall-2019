SalesOrderItem = require("./salesorderitem");
SalesOrder = require("./salesorder");

widget = new SalesOrderItem("Widget", 2.5, 10);
gidget = new SalesOrderItem("Gidget", 1.0, 20);

order = new SalesOrder("Customer 1", 0.10, [widget, gidget]);
console.log(order.getTotalValue());