const searchInput = document.querySelector(".search input");
const products = document.querySelectorAll(".product-card");

searchInput.addEventListener("input", function () {

    const searchText = searchInput.value.toLowerCase();

    products.forEach(function (product) {

        const productName = product.querySelector("h3").textContent.toLowerCase();

        if (productName.includes(searchText)) {
            product.style.display = "";
        } else {
            product.style.display = "none";
        }

    });

});