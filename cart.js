document.addEventListener('DOMContentLoaded', function() {
    // Retrieve cart items from local storage
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    var cartList = document.getElementById('cart-items');
    var clearCartButton = document.getElementById('clear-cart-button');

    // Function to clear the cart items
    function clearCart() {
        // Clear the cart items in local storage and on the page
        localStorage.removeItem('cart');
        cartList.innerHTML = ''; // Clear the cart items displayed on the page
    }

    // Attach click event listener to the clear cart button
    clearCartButton.addEventListener('click', function() {
        clearCart();
    });

    // Iterate through cart items and display them on the page
    cartItems.forEach(function(item) {
        var listItem = document.createElement('li');
        listItem.textContent = `${item.name} - Size: ${item.size}, Color: ${item.color}, Price: Rs${(item.price / 100).toFixed(2)}`;
        cartList.appendChild(listItem);
    });
});
