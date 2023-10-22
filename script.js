document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('buyButton').addEventListener('click', function() {
        // Get selected size and color
        var pname = document.getElementById('pname').textContent;
        var selectedSize = document.getElementById('size').value;
        var selectedColor = document.getElementById('color').value;
        var price = document.getElementById('price').textContent; // Use textContent to get the price as a string

        // Create a JavaScript object representing the selected product
        var selectedProduct = {
            name: pname,
            size: selectedSize,
            color: selectedColor,
            price: price  // Use the 'price' variable to get the product price
        };

        // Add the selected product to the cart (this is a basic example without a backend or database)
        addToCart(selectedProduct);

        // Provide feedback to the user (this could be a modal, alert, or redirect to a shopping cart page)
        alert('Product added to cart!');
    });

    function addToCart(product) {
        // In a real application, you would send this product object to the server to be added to the user's cart
        // For this basic example, you can store the product in the browser's local storage
        var cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    document.getElementById('color').addEventListener('change', function() {
        var selectedColor = this.value;
        var newImagePath;
        if (selectedColor === 'white') {
            newImagePath = '1.jpg'; // Set the image path for white color
        } else if (selectedColor === 'blue') {
            newImagePath = '1blue.jpg';
        } else if (selectedColor === 'red') {
            newImagePath = '1red.jpg';
        }
        document.getElementById('productImage').src = newImagePath;
    });
});
