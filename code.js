
const allProducts = [
      {
        id: "Prod-1",
        img1: "/ecommerce/Images/dresses/first1.jpg",
        img2: "/ecommerce/Images/dresses/first2.jpg",
        img3: "/ecommerce/Images/dresses/first3.jpg",
        label: "Chiffon puff hand dress",
        price: "$130"
      },

      {
        id: "Prod-2",
        img1: "/ecommerce/Images/dresses/fold1.jpg",
        img2: "/ecommerce/Images/dresses/fold2.jpg",
        img3: "/ecommerce/Images/dresses/fold3.jpg",
        label: "Short folded dress",
        price: "$230"
      },
      {
        id: "Prod-3",
        img1: "/ecommerce/Images/dresses/net1.jpg",
        img2: "/ecommerce/Images/dresses/net2.jpg",
        img3: "/ecommerce/Images/dresses/net3.jpg",
        label: "Bridginton dress",
        price: "$400"
      },
      {
        id: "Prod-4",
        img1: "/ecommerce/Images/dresses/Red_dress2.jpg",
        img2: "/ecommerce/Images/dresses/Red_dress3.jpg",
        img3: "/ecommerce/Images/dresses/Red_dress4.jpg",
        label: "Red elegant dress",
        price: "$220"
      },
      {
        id: "Prod-5",
        img1: "/ecommerce/Images/dresses/classyred1.jpg",
        img2: "/ecommerce/Images/dresses/classyred2.jpg",
        img3: "/ecommerce/Images/dresses/classyred2.jpg",
        label: "Classy Red Dress",
        price: "$220"
      },
      {
        id: "Prod-6",
        img1: "/ecommerce/Images/dresses/Cocktail_dress1.jpeg",
        img2: "/ecommerce/Images/dresses/Cocktail_dress2.jpeg",
        img3: "/ecommerce/Images/dresses/Cocktail_dress3.jpeg",
        label: "Cocktail Flowered Dress",
        price: "$220"
      },
      {
        id: "Prod-7",
        img1: "/ecommerce/Images/dresses/Mermaid_dress1.jpeg",
        img2: "/ecommerce/Images/dresses/Mermaid_dress2.jpeg",
        img3: "/ecommerce/Images/dresses/Mermaid_dress3.jpeg",
        label: "Mermaid Dress",
        price: "$220"
      },
      {
        id: "Prod-8",
        img1: "/ecommerce/Images/dresses/slickv_dress1.jpeg",
        img2: "/ecommerce/Images/dresses/slickv_dress2.jpeg",
        img3: "/ecommerce/Images/dresses/slickv_dress3.jpeg",
        label: "Slick Dress",
        price: "$220"
      },
      {
        id: "Prod-9",
        img1: "/ecommerce/Images/dresses/sundress1.jpeg",
        img2: "/ecommerce/Images/dresses/sundress2.jpeg",
        img3: "/ecommerce/Images/dresses/sundress3.jpeg",
        label: "Short Sundress",
        price: "$220"
      },
      {
        id: "Prod-10",
        img1: "/ecommerce/Images/dresses/Elegant_dress1.jpeg",
        img2: "/ecommerce/Images/dresses/Elegant_dress2.jpeg",
        img3: "/ecommerce/Images/dresses/Elegant_dress3.jpeg",
        label: "Elegant dress",
        price: "$220"
      },
      {
        id: "Prod-11",
        img1: "/ecommerce/Images/dresses/baggyjorts1.jpeg",
        img2: "/ecommerce/Images/dresses/baggyjorts2.jpeg",
        img3: "/ecommerce/Images/dresses/baggyjorts3.jpeg",
        label: "Elegant dress",
        price: "$220"
      },
      {
        id: "Prod-12",
        img1: "/ecommerce/Images/dresses/bohoskirt1.jpeg",
        img2: "/ecommerce/Images/dresses/bohoskirt2.jpeg",
        img3: "/ecommerce/Images/dresses/bohoskirt3.jpeg",
        label: "Elegant dress",
        price: "$220"
      },
      {
        id: "Prod-13",
        img1: "/ecommerce/Images/dresses/Bumshort1.jpeg",
        img2: "/ecommerce/Images/dresses/Bumshort2.jpeg",
        img3: "/ecommerce/Images/dresses/Bumshort3.jpeg",
        label: "Elegant dress",
        price: "$220"
      },
      {
        id: "Prod-14",
        img1: "/ecommerce/Images/dresses/greencargo1.jpeg",
        img2: "/ecommerce/Images/dresses/greencargo2.jpeg",
        img3: "/ecommerce/Images/dresses/greencargo3.jpeg",
        label: "Elegant dress",
        price: "$220"
      },
      {
        id: "Prod-15",
        img1: "/ecommerce/Images/dresses/jersey1.jpeg",
        img2: "/ecommerce/Images/dresses/jersey2.jpeg",
        img3: "/ecommerce/Images/dresses/jersey3.jpeg",
        label: "Elegant dress",
        price: "$220"
      },
      {
        id: "Prod-16",
        img1: "/ecommerce/Images/dresses/Maxidress1.jpeg",
        img2: "/ecommerce/Images/dresses/Maxidress2.jpeg",
        img3: "/ecommerce/Images/dresses/Maxidress3.jpeg",
        label: "Elegant dress",
        price: "$220"
      },
      {
        id: "Prod-17",
        img1: "/ecommerce/Images/dresses/Maxiskirt1.jpeg",
        img2: "/ecommerce/Images/dresses/Maxiskirt2.jpeg",
        img3: "/ecommerce/Images/dresses/Maxiskirt3.jpeg",
        label: "Elegant dress",
        price: "$220"
      },
      {
        id: "Prod-18",
        img1: "/ecommerce/Images/dresses/miniskirt1.jpeg",
        img2: "/ecommerce/Images/dresses/miniskirt2.jpeg",
        img3: "/ecommerce/Images/dresses/miniskirt3.jpeg",
        label: "Elegant dress",
        price: "$220"
      },
      {
        id: "Prod-19",
        img1: "/ecommerce/Images/dresses/overalls1.jpeg",
        img2: "/ecommerce/Images/dresses/overalls2.jpeg",
        img3: "/ecommerce/Images/dresses/overalls3.jpeg",
        label: "Elegant dress",
        price: "$220"
      },
      {
        id: "Prod-20",
        img1: "/ecommerce/Images/dresses/Tennisskirt1.jpeg",
        img2: "/ecommerce/Images/dresses/Tennisskirt2.jpeg",
        img3: "/ecommerce/Images/dresses/Tennisskirt3.jpeg",
        label: "Elegant dress",
        price: "$220"
      },
      {
        id: "Prod-21",
        img1: "/ecommerce/Images/dresses/Vtop1.jpeg",
        img2: "/ecommerce/Images/dresses/Vtop2.jpeg",
        img3: "/ecommerce/Images/dresses/Vtop3.jpeg",
        label: "Elegant dress",
        price: "$220"
      },
      {
        id: "Prod-22",
        img1: "/ecommerce/Images/dresses/whiteshirt1.jpeg",
        img2: "/ecommerce/Images/dresses/whiteshirt2.jpeg",
        img3: "/ecommerce/Images/dresses/whiteshirt3.jpeg",
        label: "Elegant dress",
        price: "$220"
      },
      {
        id: "Prod-23",
        img1: "/ecommerce/Images/dresses/ankara_skirt1.jpeg",
        img2: "/ecommerce/Images/dresses/ankara_skirt2.jpeg",
        img3: "/ecommerce/Images/dresses/ankara_skirt3.jpeg",
        label: "Elegant dress",
        price: "$220"
      },
      {
        id: "Prod-24",
        img1: "/ecommerce/Images/dresses/ankara_top1.jpeg",
        img2: "/ecommerce/Images/dresses/ankara_top2.jpeg",
        img3: "/ecommerce/Images/dresses/ankara_top3.jpeg",
        label: "Elegant dress",
        price: "$220"
      },
      {
        id: "Prod-25",
        img1: "/ecommerce/Images/dresses/butterfly_sweater1.jpeg",
        img2: "/ecommerce/Images/dresses/butterfly_sweater2.jpeg",
        img3: "/ecommerce/Images/dresses/butterfly_sweater3.jpeg",
        label: "Elegant dress",
        price: "$220"
      },
      {
        id: "Prod-26",
        img1: "/ecommerce/Images/dresses/Chic_Crochet_shrug1.jpeg",
        img2: "/ecommerce/Images/dresses/Chic_Crochet_shrug2.jpeg",
        img3: "/ecommerce/Images/dresses/Chic_Crochet_shrug3.jpeg",
        label: "Elegant dress",
        price: "$220"
      },
      {
        id: "Prod-27",
        img1: "/ecommerce/Images/dresses/Crochet_cardigan1.jpeg",
        img2: "/ecommerce/Images/dresses/Crochet_cardigan2.jpeg",
        img3: "/ecommerce/Images/dresses/Crochet_cardigan3.jpeg",
        label: "Elegant dress",
        price: "$220"
      },
      {
        id: "Prod-28",
        img1: "/ecommerce/Images/dresses/daisy_dress1.jpeg",
        img2: "/ecommerce/Images/dresses/daisy_dress2.jpeg",
        img3: "/ecommerce/Images/dresses/daisy_dress3.jpeg",
        label: "Elegant dress",
        price: "$220"
      },
      {
        id: "Prod-29",
        img1: "/ecommerce/Images/dresses/flower_dress1.jpeg",
        img2: "/ecommerce/Images/dresses/flower_dress2.jpeg",
        img3: "/ecommerce/Images/dresses/flower_dress3.jpeg",
        label: "Elegant dress",
        price: "$220"
      },
      {
        id: "Prod-30",
        img1: "/ecommerce/Images/dresses/flower_long_dress1.jpeg",
        img2: "/ecommerce/Images/dresses/flower_long_dress2.jpeg",
        img3: "/ecommerce/Images/dresses/flower_long_dress3.jpeg",
        label: "Elegant dress",
        price: "$220"
      },
      {
        id: "Prod-31",
        img1: "/ecommerce/Images/dresses/hooded_dress1.jpeg",
        img2: "/ecommerce/Images/dresses/hooded_dress2.jpeg",
        img3: "/ecommerce/Images/dresses/hooded_dress3.jpeg",
        label: "Elegant dress",
        price: "$220"
      },
      {
        id: "Prod-32",
        img1: "/ecommerce/Images/dresses/light_top1.jpeg",
        img2: "/ecommerce/Images/dresses/light_top2.jpeg",
        img3: "/ecommerce/Images/dresses/light_top3.jpeg",
        label: "Elegant dress",
        price: "$220"
      },
      {
        id: "Prod-33",
        img1: "/ecommerce/Images/dresses/mini_pink_suit1.jpeg",
        img2: "/ecommerce/Images/dresses/mini_pink_suit2.jpeg",
        img3: "/ecommerce/Images/dresses/mini_pink_suit3.jpeg",
        label: "Elegant dress",
        price: "$220"
      },
      {
        id: "Prod-34",
        img1: "/ecommerce/Images/dresses/mini_suit1.jpeg",
        img2: "/ecommerce/Images/dresses/mini_suit2.jpeg",
        img3: "/ecommerce/Images/dresses/mini_suit3.jpeg",
        label: "Elegant dress",
        price: "$220"
      },
      {
        id: "Prod-35",
        img1: "/ecommerce/Images/dresses/mini_sweater_dress1.jpeg",
        img2: "/ecommerce/Images/dresses/mini_sweater_dress2.jpeg",
        img3: "/ecommerce/Images/dresses/mini_sweater_dress3.jpeg",
        label: "Elegant dress",
        price: "$220"
      },
      {
        id: "Prod-36",
        img1: "/ecommerce/Images/dresses/pink_cargo1.jpeg",
        img2: "/ecommerce/Images/dresses/pink_cargo2.jpeg",
        img3: "/ecommerce/Images/dresses/pink_cargo3.jpeg",
        label: "Elegant dress",
        price: "$220"
      },
      {
        id: "Prod-37",
        img1: "/ecommerce/Images/dresses/white_dress1.jpeg",
        img2: "/ecommerce/Images/dresses/white_dress2.jpeg",
        img3: "/ecommerce/Images/dresses/white_dress3.jpeg",
        label: "Elegant dress",
        price: "$220"
      },
      {
        id: "Prod-38",
        img1: "/ecommerce/Images/dresses/square_neck_top1.jpeg",
        img2: "/ecommerce/Images/dresses/square_neck_top2.jpeg",
        img3: "/ecommerce/Images/dresses/square_neck_top3.jpeg",
        label: "Elegant dress",
        price: "$220"
      },
      {
        id: "Prod-39",
        img1: "/ecommerce/Images/dresses/star_shrug1.jpeg",
        img2: "/ecommerce/Images/dresses/star_shrug2.jpeg",
        img3: "/ecommerce/Images/dresses/star_shrug3.jpeg",
        label: "Elegant dress",
        price: "$220"
      },
      {
        id: "Prod-40",
        img1: "/ecommerce/Images/dresses/sweater_dress1.jpeg",
        img2: "/ecommerce/Images/dresses/sweater_dress2.jpeg",
        img3: "/ecommerce/Images/dresses/sweater_dress3.jpeg",
        label: "Elegant dress",
        price: "$220"
      },
      {
        id: "prod-36",
        img1: "/ecommerce/Images/dresses/pink_cargo3.jpeg",
        label: "Pink Cargo",
        price: "$330"
      },
      {
        id: "best-2",
        img1: "/ecommerce/Images/footwear/redshoes.jpeg",
        label: "Red Shoes",
        price: "$530"
      },
      {
        id: "best-3",
        img1: "/ecommerce/Images/accesories/download (1).jpg",
        label: "Gold Earrings",
        price: "$230"
      },
      {
        id: "prod-16",
        img1: "/ecommerce/Images/dresses/Maxidress1.jpeg",
        label: "Maxi Dress",
        price: "$530"
      },
      {
        id: "best-5",
        img1: "/ecommerce/Images/footwear/Tom boy shoes.png",
        label: "Tom Boy Shoes",
        price: "$530"
      }
    ]
// Get selected product based on URL
const productId = new URLSearchParams(location.search).get("id");
const product = allProducts.find((p) => p.id === productId);

// Display Best Products (5 per section)
const sections = document.querySelectorAll(".best-products");
const best = [
  allProducts.find((p) => p.id === "Prod-36"),
  allProducts.find((p) => p.id === "best-2"),
  allProducts.find((p) => p.id === "best-3"),
  allProducts.find((p) => p.id === "prod-16"),
  allProducts.find((p) => p.id === "best-5"),
];
const perSection = 5;

sections.forEach((section, idx) => {
  const chunk = best.slice(idx * perSection, idx * perSection + perSection);

  chunk.forEach((product) => {
    const stars = Array.from({ length: 5 }, (_, i) => {
      const color = i < (product.rating || 4) ? "#ffad33" : "#838280";
      return `<iconify-icon icon="ic:round-star" style="color: ${color};"></iconify-icon>`;
    }).join("");

    const productCard = document.createElement("div");
    productCard.classList.add("best-product");
    productCard.innerHTML = `
      <div class="product-img">
        <img src="${product.img1}" alt="${product.label}">
      </div>
      <div class="best-tx">
        <div class="best-product-name">
          <p>${product.label}</p>
        </div>
        <div class="best-product-price">
          <p>${product.price}</p>
          <p><del>${product.oldPrice || ""}</del></p>
        </div>
        <div class="stars">
          ${stars}
          <div class="product-quan"><p>(${product.quantity || 0})</p></div>
        </div>
      </div>
    `;

    productCard.addEventListener("click", () => {
      window.location.href = `/ecommerce/Product/product.html?id=${product.id}`;
    });

    section.appendChild(productCard);
  });
});

// Swiper Slides - Display products in swiper containers
const swiperContainers = document.querySelectorAll(".myproductSwiper");
const chunkSize = 10;

swiperContainers.forEach((container, i) => {
  const productChunk = allProducts.slice(i * chunkSize, (i + 1) * chunkSize);

  productChunk.forEach((product) => {
    const slide = document.createElement("swiper-slide");
    slide.classList.add("product-slide");
    slide.innerHTML = `
      <div class="product">
        <div class="product-img">
          <img src="${product.img1}" alt="${product.label}">
        </div>
        <div class="product-info">
          <p class="product-name">${product.label}</p>
          <p class="product-price">${product.price} <del>$360</del></p>
          <div class="stars">
            <iconify-icon icon="ic:round-star" style="color: #ffad33;"></iconify-icon>
            <iconify-icon icon="ic:round-star" style="color: #ffad33;"></iconify-icon>
            <iconify-icon icon="ic:round-star" style="color: #ffad33;"></iconify-icon>
            <iconify-icon icon="ic:round-star" style="color: #ffad33;"></iconify-icon>
            <iconify-icon icon="ic:round-star" style="color: #838280;"></iconify-icon>
            <div class="product-quan"><p>(65)</p></div>
          </div>
        </div>
      </div>
    `;
    slide.querySelector(".product").addEventListener("click", () => {
      window.location.href = `/ecommerce/Product/product.html?id=${product.id}`;
    });
    container.appendChild(slide);
  });
});
