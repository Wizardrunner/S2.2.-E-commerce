// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];
var countProductElement = document.getElementById('count_product');
var totalPriceElement = document.getElementById('total_price');
var cartListElement = document.getElementById('cart_list');

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
        for (var i = 0; i < products.length; i++) {
            if (products[i].id === id) {
            // 2. Add found product to the cart array
            cart.push(products[i]);

                // Update the count_product element
                countProductElement.innerText = cart.length;

            console.log(products[i].name + " added to cart.");
            return;
            }
        }
}

// Exercise 2     
function cleanCart() {
    cart = [];
    countProductElement.innerText = '0';

    console.log('Cart is cleaned.')

}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    var totalPrice = 0;

    for ( let i = 0; i < cart.length; i++) {
        totalPrice += cart[i].price;
    }
    return totalPrice;
}

// Exercise 4
function applyPromotionsCart() {
    for (var i = 0; i < cart.length; i++) {
        var product = cart[i];

        // Check if the product has an offer and apply the discount
        if (product.offer) {
            var quantity = cart.filter(item => item.id === product.id).length;

            if (quantity >= product.offer.number) {
                // Apply the discount to all items of this product in the cart
                for (var j = 0; j < cart.length; j++) {
                    if (cart[j].id === product.id) {
                        cart[j].subtotalWithDiscount = cart[j].price * (1 - product.offer.percent / 100);
                    }
                }
            } else {
                // No applicable offer, so set subtotalWithDiscount to the original price
                for (var k = 0; k < cart.length; k++) {
                    if (cart[k].id === product.id) {
                        cart[k].subtotalWithDiscount = undefined;
                    }
                }
            }
        } else {
            // No offer, so set subtotalWithDiscount to the original price
            product.subtotalWithDiscount = undefined;
        }
    }
}

// Exercise 5

function printCart() {
        // Clear previous content in the modal body
        cartListElement.innerHTML = '';

    // Fill the shopping cart modal manipulating the shopping cart dom


    // Check if the cart is not empty
    if (cart.length > 0) {
        var totalPrice = 0;
        var groupedCart = groupCartByProduct();

        for (var productID in groupedCart) {
                if (groupedCart.hasOwnProperty(productID)) {
                    var product = groupedCart[productID][0]; // Take the first item as they are the same product
                    var quantity = groupedCart[productID].length;
                }
            // Calculate total price for the product (with discount if applicable)
            var productTotal = product.subtotalWithDiscount !== undefined ? product.subtotalWithDiscount : product.price;
            productTotal *= quantity;
            totalPrice += productTotal;

            // Create a new row for each product in the cart_list tbody
            var row = cartListElement.insertRow();
            row.innerHTML = `
            <td>${product.name}</td>
            <td>$${product.price.toFixed(2)}</td>
            <td>${cart.filter(item => item.id === product.id).length}</td>
            <td>$${productTotal.toFixed(2)}</td>
            `;
        }
            // Update the total_price span
            totalPriceElement.innerText = totalPrice.toFixed(2);
    } else {
        // IF the cart is empty, display a message in the cart_list tbody
        var emptyRow = cartListElement.insertRow();
        var cell = emptyRow.insertCell(0);
        cell.colSpan = 4;
        cell.textContent = 'Your cart is empty.';
    }
}

function groupCartByProduct() {
    //Create a map to group cart items by product id
    var groupedCart = {};

    for (var i = 0; i < cart.length; i++) {
        var productID = cart[i].id;

        if(!groupedCart[productID]) {
            groupedCart[productID] = [];
        }
        groupedCart[productID].push(cart[i]);
    }
    return groupedCart;
}
// ** Nivell II **

// Exercise 7
function removeFromCart(id) {

}

function open_modal() {
    applyPromotionsCart(); // Apply promotions before printing the cart
    printCart(); // Print the cart in the modal
}
