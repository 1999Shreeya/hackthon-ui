document.addEventListener("DOMContentLoaded", function() {
    fetch('input.json')
        .then(response => response.json())
        .then(data => {
            const productsContainer = document.getElementById('product-container');
            data.products.forEach(product => {
                const productCard = `
                <div class="box">
                    <div class="product">
                        <img class="img-box" src="${product.image}" alt="${product.name}" />
                        <h3>${product.name}</h3>
                        <p>${product.description}</p>
                        <p>Price: ${product.price.toFixed(2)}</p>
                        <button>Add to Cart</button>
                    </div>
                    <div class="box">
          <a href="">
            <div class="new">
              <h5>
                New
              </h5>
            </div>
            <div class="img-box">
              <img src="images/slider-img.png" alt="">
            </div>
            <div class="detail-box">
              <h6 class="price">
                $100
              </h6>
              <h6>
                Chair
              </h6>
            </div>
          </a>
        </div>
                `;
                productsContainer.innerHTML += productCard;
            });
        })
        .catch(error => console.error('Error fetching products:', error));
});
