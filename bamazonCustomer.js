var inquirer = require("inquirer");
var Table = require('cli-table2');
var connection = require("./Connection");
var clrScr = require("./ClearScreen");
var formatJS = require("./FormatJS");
var validateNum = require("./ValidateJS");

var validateNm = new validateNum();
var fmtStr = new formatJS();
clrScr();
displayItems();

function displayItems() {
  console.log("\n  Amazon Customer Module");
  console.log("  ---------------------------------------------------------\n");
  var table = new Table({
    head: ['id', 'Name', 'Price']
    , colWidths: [6, 20, 15]
    , style: { compact: true, 'padding-left': 1 }
  });

  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      table.push(
        [{ hAlign: 'right', content: res[i].product_id }, res[i].product_name, { hAlign: 'right', content: fmtStr.formatFloat(res[i].price) }]

      );
    }
    console.log(table.toString());
    startPurchaseItem();
  });
};

function startPurchaseItem() {
  console.log("\n  Place Order");
  console.log("  -----------\n");
  purchaseItem();
};

function purchaseItem() {
  inquirer.prompt([
    {
      name: "id",
      type: "input",
      message: "Enter Product ID : ",
      validate: validateNm.validateInt
    },
    {
      name: "order_qty",
      type: "input",
      message: "How many would you like to buy? : ",
      validate: validateNm.validateInt
    }

  ]).then(function (answer) {
    //check productExists
    var itemid = answer.id;
    var orderQty = answer.order_qty;
    checkOrder(itemid, orderQty);

  });
};

function checkOrder(itemid, ordQty) {
  var itemFound = true;
  var query = connection.query("SELECT * FROM products WHERE product_id=?", [itemid], function (err, res) {

    if (!err) {
      if (res.length > 0) {
        var stockQty = res[0].stock_quantity;
        var price = res[0].price;
        var product = res[0].product_name;
        var productSales = res[0].product_sale;
        if (ordQty <= stockQty) {

          updateProduct(itemid, stockQty, price, ordQty, productSales, product);
        }
        else {
          console.log("\033[31m", "\n  Sorry we have only "+stockQty+ " in Stock Try Again!!\n", "\x1b[0m\n");
          startPurchaseItem();
        }
      }
      else {
        console.log("\033[31m", "\n  Item not found.. Try Again!!", "\x1b[0m\n");
        startPurchaseItem();

      }
    }
  });
};

function updateProduct(itemid, stockQty, price, ordQty, productSales, product) {
  var stockBal = stockQty - ordQty;
  var sales_amount = price * ordQty;
  var total_sales = productSales + sales_amount;
  var query = connection.query(
    "UPDATE products SET ? WHERE ?",
    [
      {
        stock_quantity: stockBal,
        product_sale: total_sales
      },
      {
        product_id: itemid
      }
    ],
    function (err, res) {
      if (err) throw (err)
     
        showInvoice(sales_amount, product, ordQty, price)
    }
  );
};

function showInvoice(sales_amount, product, ordQty, price) {
  clrScr();
  console.log("\n  Invoice");
  console.log("  ---------------------------------------------------------\n", "\033[32m");
  console.log("  You purchased " + ordQty + " quantity of " + product + " for price " + price + " each");
  console.log("\n  Your total purchase is $" + sales_amount);
  console.log("  !!Thank you for your business", "\x1b[0m\n");
  confirmContinue();
};

function confirmContinue() {
  inquirer.prompt([
    {
      type: "confirm",
      message: "Would you like to purchase more?",
      name: "confirm",
      default: true
    }
  ]).then(function (continu) {

    if (continu.confirm) {
      clrScr();
      displayItems()
    }
    else {
      connection.endConnection();
    }
  });
}
