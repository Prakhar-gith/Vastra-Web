// const menuBtn = document.getElementById("menu-btn");
// const navLinks = document.getElementById("nav-links");
// const menuBtnIcon = menuBtn.querySelector("i");

// menuBtn.addEventListener("click", (e) => {
//   navLinks.classList.toggle("open");

//   const isOpen = navLinks.classList.contains("open");
//   menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
// });

// navLinks.addEventListener("click", (e) => {
//   navLinks.classList.remove("open");
//   menuBtnIcon.setAttribute("class", "ri-menu-line");
// });

// const scrollRevealOption = {
//   origin: "bottom",
//   distance: "50px",
//   duration: 1000,
// };

// ScrollReveal().reveal(".header__image img", {
//   ...scrollRevealOption,
//   origin: "right",
// });
// ScrollReveal().reveal(".header__content h1", {
//   ...scrollRevealOption,
//   delay: 500,
// });
// ScrollReveal().reveal(".header__content p", {
//   ...scrollRevealOption,
//   delay: 1000,
// });
// ScrollReveal().reveal(".header__btns", {
//   ...scrollRevealOption,
//   delay: 1500,
// });

// const banner = document.querySelector(".banner__container");

// const bannerContent = Array.from(banner.children);

// bannerContent.forEach((item) => {
//   const duplicateNode = item.cloneNode(true);
//   duplicateNode.setAttribute("aria-hidden", true);
//   banner.appendChild(duplicateNode);
// });

// ScrollReveal().reveal(".arrival__card", {
//   ...scrollRevealOption,
//   interval: 500,
// });

// ScrollReveal().reveal(".sale__image img", {
//   ...scrollRevealOption,
//   origin: "left",
// });
// ScrollReveal().reveal(".sale__content h2", {
//   ...scrollRevealOption,
//   delay: 500,
// });
// ScrollReveal().reveal(".sale__content p", {
//   ...scrollRevealOption,
//   delay: 1000,
// });
// ScrollReveal().reveal(".sale__content h4", {
//   ...scrollRevealOption,
//   delay: 1000,
// });
// ScrollReveal().reveal(".sale__btn", {
//   ...scrollRevealOption,
//   delay: 1500,
// });

// ScrollReveal().reveal(".favourite__card", {
//   ...scrollRevealOption,
//   interval: 500,
// });


// const productImg = document.getElementById("product-img");
// const imageModal = document.getElementById("imageModal");
// const modalClose = document.getElementById("modalClose");
// const modalImg = document.getElementById("modalImg");

// // When user clicks the product image, open the modal
// productImg.addEventListener("click", () => {
//   imageModal.style.display = "block";
//   modalImg.src = productImg.src; // same source as the product image
// });

// // When user clicks (X), close the modal
// modalClose.addEventListener("click", () => {
//   imageModal.style.display = "none";
// });

// // (Optional) close if user clicks outside the image
// imageModal.addEventListener("click", (e) => {
//   if (e.target === imageModal) {
//     imageModal.style.display = "none";
//   }
// });

// // Suppose after we've loaded "product", we do:
// const similarWrapper = document.getElementById("similarProductsWrapper");

// // A naive approach: show all products except the current one
// const similarProducts = productsData.filter(p => p.id !== productId);

// // Limit to, say, 4 items
// const displayedSimilar = similarProducts.slice(0, 4);


// // JavaScript (Optional: Generate Similar Products Dynamically)
// displayedSimilar.forEach(sp => {
//   const card = document.createElement("div");
//   card.classList.add("similar-product__card");
//   card.innerHTML = `
//     <img src="${sp.image}" alt="${sp.title}" />
//     <h4>${sp.title}</h4>
//     <a href="product.html?id=${sp.id}" class="btn">View Details</a>
//   `;
//   similarWrapper.appendChild(card);
// });



/*****************************************************
  MAIN.JS - Common Site Scripts
*****************************************************/

/*===============================================
  Mobile Navigation Toggle
  - Handles the opening/closing of the mobile nav menu.
  - Changes the menu icon based on the state.
================================================*/
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// Toggle mobile navigation when the menu button is clicked
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Close the mobile navigation when any link is clicked
navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});


/*===============================================
  ScrollReveal Animations
  - Applies reveal animations to elements on scroll.
================================================*/
const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

// Reveal header image from the right
ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});

// Reveal header text elements with delays
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});


/*===============================================
  Banner Duplication for Continuous Scroll
  - Duplicates banner children to achieve a looping effect.
================================================*/
const banner = document.querySelector(".banner__container");
if (banner) {
  const bannerContent = Array.from(banner.children);
  bannerContent.forEach((item) => {
    const duplicateNode = item.cloneNode(true);
    duplicateNode.setAttribute("aria-hidden", true);
    banner.appendChild(duplicateNode);
  });
}


/*===============================================
  Additional ScrollReveal Effects
  - Applies animations to arrival, sale, and favourite sections.
================================================*/
ScrollReveal().reveal(".arrival__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".sale__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".sale__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".sale__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".sale__content h4", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".sale__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".favourite__card", {
  ...scrollRevealOption,
  interval: 500,
});
