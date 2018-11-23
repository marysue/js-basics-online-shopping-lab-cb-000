var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 // Use that passed-in string to create a new object
 //representing the item. The object should consist of two
 //key-value pairs : { itemName: name of the item,
 //itemPrice: price of the item, }.
 //As more items are added, the cart should start to look
 //something like this: [ { itemName:"bananas", itemPrice: 17 },
 // { itemName:"pancake batter",itemPrice: 5 },
 // { itemName:"eggs", itemPrice: 49 }].

 //The price of each item should be a randomly-generated integer
 //between 1 and 100.
//HINT: Look into Math.random() and Math.floor().
//
  var min = 1;
  var max = 100;
  var random = Math.floor(Math.random() * (max - min) + min);

  var newObj = new Object( { itemName: item, itemPrice: random });

  return newObj;

}

function viewCart() {

  // write your code here
//The viewCart() function does not accept any arguments.
//It should loop over every item in your cart, returning
//the contents as one long, coherent statement in this format:
//In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.
//If the cart is empty, the function should instead return Your shopping cart is empty.
//Note: Pay close attention to the syntax above. The returned statement should be a single
//sentence that begins with In your cart, you have, terminates in a period, and can
//assume the following shapes according to how many items the cart contains:
//1 item — In your cart, you have bananas at $17.
//2 items — In your cart, you have bananas at $17, and pancake batter at $5.
//3+ items — In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.
//The total() function accepts no arguments, iterates through the cart array, and returns the current total value of the items in the cart.



  var cart = getCart();
  var retStr;

  if (cart.length === 0) {
    // empty cart
    retStr =  "Your shopping cart is empty."
  } else {
    for (let i=0; i < cart.length; i++){
      //first item in cart - i=0;
      if ((i === 0) && (cart.length === 1)) {
        retStr = `In your cart, you have ${cart[i].itemName} at \$${cart[i].itemPrice}.`
      } else if ((i === 0) && (cart.length > 1)) {
        retStr = `In your cart, you have ${cart[i].itemName} at \$${cart[i].itemPrice}, `
      } else if (i < cart.length - 1) {
        // mid string
        retStr += `${cart[i].itemName} at \$${cart[i].itemPrice}, `
      } else if (i === cart.length - 1) {
        // last string
        retStr += `and ${cart[i].itemName} at \$${cart[i].itemPrice}.`
      }  //end else if;
    }// end for
  } // end else
  return retStr;
}

function total() {
  // write your code here
  var cart = getCart();
  var total = 0;
  for (let i = 0; i < cart.length; i++)
  {
    total += cart[i].itemPrice;
  }
  return total;
}
cart[0] = new Object ( { itemName: "apples", itemPrice: 4 });
cart[1] = new Object ( { itemName: "oranges", itemPrice: 2 } );
cart[2] = new Object ( { itemName: "avocados", itemPrice: 3 } );
cart[3] = new Object ( { itemName: "bananas", itemPrice: 1 } );
cart[4] = new Object ( { itemName: "lettuce", itemPrice: 5 } ) ;

function removeFromCart(item) {
  // write your code here
  //The removeFromCart() function accepts one argument, the name of the item that should be removed.
//If the item is present in the cart, the function should remove the object from the cart and then return the updated cart.
//HINT: Check each object's itemName value key to see if it matches the parameter, then remove it if it matches. You might find Array.prototype.splice() to be useful.
//If the cart does not contain a matching item, the function should return That item is not in your cart.
  var cart = getCart();
  for (let i = 0; i < cart.length; i++)
  {
    if (cart[i].itemName === item)
    {
      cart.splice(i, 1);
      return cart;
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
  //The placeOrder() function accepts one argument, a credit card number.
//If no argument is received, the function should print out Sorry, we don't have a credit card on file for you..
//If a card number is received, the function should
//empty the cart array
//return Your total cost is $71, which will be charged to the card 83296759. (where 71 is the value returned by total() and 83296759 is the credit card number passed to placeOrder())



  if (cardNumber){
    var cart = getCart();
    var cartLen = cart.length;
    var total = 0;
    for (let i = cartLen-1; i >= 0; i--){
      total += cart[i].itemPrice;
      console.log(`Popping ${cart[i].itemName} (hopefully...)`);
      cart.pop();
    }
    return `Your total cost is \$${total}, which will be charged to the card ${cardNumber}.`
  } else {
    return "Sorry, we don't have a credit card on file for you."
  }

}

