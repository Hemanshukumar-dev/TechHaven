const products = document.querySelectorAll(".product");

function filterCategory(category) {
    products.forEach(product => {
        if (category === "all" || product.dataset.category === category) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

function filterPrice(price) {
    products.forEach(product => {
        if (product.dataset.price === price) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}
