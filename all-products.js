document.addEventListener("DOMContentLoaded", () => {
    const productsGrid = document.getElementById("productsGrid");
  
    // Fetch the JSON file containing all products
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => {
        const products = data.products;
        products.forEach((product) => {
          // Create a card container and wrap it in an anchor (<a>) for redirection
          const cardLink = document.createElement("a");
          cardLink.href = `product.html?id=${product.id}`;
          cardLink.classList.add("product-card");
  
          // Create and append the product image
          const img = document.createElement("img");
          img.src = product.image;
          img.alt = product.title;
          cardLink.appendChild(img);
  
          // Create a div to hold product info
          const infoDiv = document.createElement("div");
          infoDiv.classList.add("product-info");
  
          // Create and append product title
          const title = document.createElement("h4");
          title.textContent = product.title;
          infoDiv.appendChild(title);
  
          // Optionally add a "View Details" button or similar
          const btn = document.createElement("span");
          btn.textContent = "View Details";
          btn.classList.add("btn");
          infoDiv.appendChild(btn);
  
          cardLink.appendChild(infoDiv);
          productsGrid.appendChild(cardLink);
        });
      })
      .catch((err) => console.error("Error loading products.json:", err));
  });
  