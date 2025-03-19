// product.js
document.addEventListener("DOMContentLoaded", () => {
    // --- Variables ---
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");
    const productImg = document.getElementById("product-img");
    const productTitle = document.getElementById("product-title");
    const productGeneralDetails = document.getElementById("product-general-details");
    const sizeSelect = document.getElementById("sizeSelect");
    const sizeTable = document.getElementById("sizeTable");
    const buyNowLink = document.getElementById("buy-now-link");
    const imageModal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const modalClose = document.getElementById("modalClose");
    const similarProductsWrapper = document.getElementById("similarProductsWrapper");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const scrollAmount = 200;
    let productsData = [];
  
    // --- Functions ---
  
    // Fetch product data from JSON file
    function fetchProductData() {
      fetch("products.json")
        .then(response => response.json())
        .then(data => {
          productsData = data.products;
          loadProduct();
          populateSimilarProducts();
        })
        .catch(err => console.error("Error loading products.json:", err));
    }
  
    // Load current product data and populate page
    function loadProduct() {
      const product = productsData.find(p => p.id === productId);
      if (!product) {
        productTitle.textContent = "Product Not Found";
        return;
      }
  
      // Populate image and title
      productImg.src = product.image;
      productTitle.textContent = product.title;
  
      // Populate general details
      productGeneralDetails.innerHTML = `
        <p><strong>Name:</strong> ${product.description.name}</p>
        <p><strong>Net Weight:</strong> ${product.description.netWeight}</p>
        <p><strong>Kurta Color:</strong> ${product.description.kurtaColor}</p>
        <p><strong>Length:</strong> ${product.description.length}</p>
        <p><strong>Neck:</strong> ${product.description.neck}</p>
        <p><strong>Pattern:</strong> ${product.description.pattern}</p>
        <p><strong>Stitch Type:</strong> ${product.description.stitchType}</p>
        <p><strong>Occasion:</strong> ${product.description.occasion}</p>
        <p><strong>Print Type:</strong> ${product.description.printType}</p>
      `;
  
      // Populate size dropdown
      product.description.sizes.forEach((sizeObj, index) => {
        const option = document.createElement("option");
        option.value = index;
        option.textContent = sizeObj.label;
        sizeSelect.appendChild(option);
      });
  
      // Set event listener for size change
      sizeSelect.addEventListener("change", () => updateSizeDetails(product));
  
      // Populate table for the first size by default
      updateSizeDetails(product);
  
      // Set Buy Now link
      buyNowLink.href = product.buyNowLink;
    }
  
    // Update size details table based on selected size
    function updateSizeDetails(product) {
      const selectedIndex = parseInt(sizeSelect.value, 10) || 0;
      const selectedSize = product.description.sizes[selectedIndex];
  
      let tableHTML = `
        <tr>
          <th>Size</th>
          <td>${selectedSize.label}</td>
        </tr>
        <tr>
          <th>Price To Sell On</th>
          <td>₹${selectedSize.price}</td>
        </tr>
        <tr>
          <th>Units In Stock</th>
          <td>${selectedSize.unitsInStock}</td>
        </tr>
        <tr>
          <th>Bust Size (Inch)</th>
          <td>${selectedSize.bust}</td>
        </tr>
        <tr>
          <th>Shoulder Size (Inch)</th>
          <td>${selectedSize.shoulder}</td>
        </tr>
        <tr>
          <th>Kurta Waist Size (Inch)</th>
          <td>${selectedSize.kurtaWaist}</td>
        </tr>
        <tr>
          <th>Kurta Length Size (Inch)</th>
          <td>${selectedSize.kurtaLength}</td>
        </tr>
        <tr>
          <th>Bottom Waist Size (Inch)</th>
          <td>${selectedSize.bottomWaist}</td>
        </tr>
        <tr>
          <th>Bottom Length Size (Inch)</th>
          <td>${selectedSize.bottomLength}</td>
        </tr>
        <tr>
          <th>Bottom Type</th>
          <td>${product.description.bottomType}</td>
        </tr>
        <tr>
          <th>Bottomwear Color</th>
          <td>${product.description.bottomColor}</td>
        </tr>
        <tr>
          <th>Bottomwear Fabric</th>
          <td>${product.description.bottomFabric}</td>
        </tr>
        <tr>
          <th>Dupatta Details</th>
          <td>${product.description.dupattaDetails}</td>
        </tr>
      `;
      sizeTable.innerHTML = tableHTML;
    }
  
    // Lightbox: Open modal when clicking product image
    function initImageModal() {
      productImg.addEventListener("click", () => {
        imageModal.style.display = "block";
        modalImg.src = productImg.src;
      });
      modalClose.addEventListener("click", () => {
        imageModal.style.display = "none";
      });
      imageModal.addEventListener("click", (e) => {
        if (e.target === imageModal) {
          imageModal.style.display = "none";
        }
      });
    }
  
    // Carousel: Arrow button functionality
    function initCarouselButtons() {
      prevBtn.addEventListener("click", () => {
        similarProductsWrapper.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      });
      nextBtn.addEventListener("click", () => {
        similarProductsWrapper.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
    }
  
    // Dynamically populate similar products carousel
    function populateSimilarProducts() {
      // Filter out the current product and limit to 4 items
      const similarProducts = productsData.filter(p => p.id !== productId);
      const displayedSimilar = similarProducts.slice(0, 4);
  
      displayedSimilar.forEach(sp => {
        const card = document.createElement("div");
        card.classList.add("similar-product__card");
        card.innerHTML = `
          <img src="${sp.image}" alt="${sp.title}" />
          <h4>${sp.title}</h4>
          <a href="product.html?id=${sp.id}" class="btn">View Details</a>
        `;
        similarProductsWrapper.appendChild(card);
      });
    }
  
    // --- Initialization ---
    fetchProductData();
    initImageModal();
    initCarouselButtons();
  });
  