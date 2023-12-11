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
    // Apply promotions to each item in the array "cart"
    for (let i = 0; i < cart.length; i++) {
        var product = cart[i];

        // Check if the product has an offer and apply the discount
            if (product.offer) {
                if (product.offer.number >= 3 && product.name === 'cooking oil') {
                // Apply 20% discount for buying 3 or more oil products
                    product.subtotalWithDiscount = product.price * (1 - product.offer.percent / 100);
                } else if (product.offer.number >= 10 && product.name === 'Instant cupcake mixture') {
                // Apply 30% discount for buying 10 or more cupcake mixture products
                    product.subtotalWithDiscount = product.price * (1 - product.offer.percent / 100);
                } else {
                // No applicable offer, so set subtotalWithDiscount to the original price
                product.subtotalWithDiscount = product.price;   
                }
            }
        }
    }

// Exercise 5
var countProductElement = document.getElementById('count_product');
var totalPriceElement = document.getElementById('total_price');
var cartListElement = document.getElementById('cart_list');

function printCart() {
        // Clear previous content in the modal body
        cartListElement.innerHTML = '';

    // Fill the shopping cart modal manipulating the shopping cart dom


    // Check if the cart is not empty
    if (cart.length > 0) {
        var totalPrice = 0;

        for (let i = 0; i < cart.length; i++) {
            var product = cart[i];

            // Calculate total price for the product (with discount if applicable)
            var productTotal = product.subtotalWithDiscount !== undefined ? product.subtotalWithDiscount : product.price;
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


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {

}

function open_modal() {
    printCart();
}