
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

const form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let allFilled = true;
        Array.from(form.elements).forEach(input => {
            if (input.tagName === "INPUT" && input.type !== "button" && input.type !== "submit") {
                if (input.value.trim() === "") {
                    allFilled = false;
                    // Show error message
                    input.style.border = "1px solid red";
                    const originalPlaceholder = input.placeholder;
                    input.value = "";
                    input.placeholder = "*Please fill";
                    // Reset after 2 seconds
                    setTimeout(() => {
                        input.style.border = "";
                        input.placeholder = originalPlaceholder;
                    }, 2000);
                }
            }
        });
        if (allFilled) {
            showSuccessMessage("Saved successfully!");
        }
    });
    // Cancel button clears input values
    document.querySelector(".cancel-btn").addEventListener("click", function () {
        Array.from(form.elements).forEach(input => {
            if (input.tagName === "INPUT" && input.type !== "button" && input.type !== "submit") {
                input.value = "";
                input.style.border = "";
            }
        });
    });
    function showSuccessMessage(message) {
        const toast = document.createElement("div");
        toast.textContent = message;
        toast.style.position = "fixed";
        toast.style.top = "20px";
        toast.style.left = "50%";
        toast.style.transform = "translateX(-50%)";
        toast.style.backgroundColor = "#4CAF50";
        toast.style.color = "white";
        toast.style.padding = "12px 24px";
        toast.style.borderRadius = "6px";
        toast.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.2)";
        toast.style.zIndex = "9999";
        toast.style.opacity = "0";
        toast.style.transition = "opacity 0.4s ease";

        document.body.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = "1";
        }, 100);

        setTimeout(() => {
            toast.style.opacity = "0";
            setTimeout(() => document.body.removeChild(toast), 400);
        }, 3000);
    }


const productMen = [
    {
        menID: "men-1",
        menImg1: "/ecommerce/Images/men/Image 1.jpg",
        menImg2: "/ecommerce/Images/men/Image 2.jpg",
        menImg3: "/ecommerce/Images/men/Image 3.jpg",
        menLabel: "trijm",
        menPrice: "$489"
    },
    {
        menID: "men-2",
        menimg1: "/ecommerce/Images/men/Image 5.jpg",
        menImg2: "/ecommerce/Images/men/Image 6.jpg",
        menImg3: "/ecommerce/Images/men/Image 61.jpg",
        menLabel: "Senve",
        menPrice: "$350"
    },
   {
        menID: "men-3",
        menimg1: "/ecommerce/Image/men/Image 7.jpg",
        menImg2: "/ecommerce/Images/men/Image 8.jpg",
        menImg3: "/ecommerce/Images/men/Image 9-.jpg",
        menLabel: "Senv1",
        menPrice: "$250"
    },
   {
        menID: "men-4",
        menimg1: "/ecommerce/Images/men/Image 91.jpg",
        menImg2: "/ecommerce/Images/men/Image 92.jpg",
        menImg3: "/ecommerce/Images/men/Image 93.jpg",
        menLabel: "Senv1",
        menPrice: "$250"

    },
    {
        menID: "men-5",
        menimg1: "/ecommerce/Images/men/Image 94--2.jpg",
        menImg2: "/ecommerce/Images/men/Image 94--4.jpg",
        menImg3: "/ecommerce/Images/men/Image 94--1.jpg",
        menLabel: "Eqiste",
        menPrice: "$550"
    },
    {
        menID: "men-6",
        menimg1: "/ecommerce/Images/men/Image 94-1.jpg",
        menImg2: "/ecommerce/Images/men/Image 94-2.jpg",
        menImg3: "/ecommerce/Images/men/Image 94-3.jpg",
        menLabel: "Eqiste",
        menPrice: "$500"
    },
    {
        menID: "men-7",
        menimg1: "/ecommerce/Images/men/Image 900.jpg",
        menImg2: "/ecommerce/Images/men/Image 907.jpg",
        menImg3: "/ecommerce/Images/men/Image 908.jpg",
        menLabel: "Lemon",
        menPrice: "$400"
    },
    {
        menID: "men-8",
        menimg1: "/ecommerce/Images/men/Image 904.jpg",
        menImg2: "/ecommerce/Images/men/Image 905.jpg",
        menImg3: "/ecommerce/Images/men/Image 906.jpg",
        menLabel: "Squeeze",
        menPrice: "$400"
    },
    {
        menID: "men-9",
        menimg1: "/ecommerce/Images/men/Image 902.jpg",
        menImg2: "/ecommerce/Images/men/Image 903.jpg",
        menImg3: "/ecommerce/Images/men/Image 902.jpg",
        menLabel: "Lakers",
        menPrice: "$300"
    },
    {
        menID: "men-10",
        menimg1: "/ecommerce/Images/men/Image 921.jpg",
        menImg2: "/ecommerce/Images/men/Image 922.jpg",
        menImg3: "/ecommerce/Images/men/Image 923.jpg",
        menLabel: "Skaters",
        menPrice: "$350"  
    },
    {
        menID: "men-11",
        menimg1: "/ecommerce/Images/men/Image 931.jpg",
        menImg2: "/ecommerce/Images/men/Image 932.jpg",
        menImg3: "/ecommerce/Images/men/Image 931.jpg",
        menLabel: "Quakers",
        menPrice: "$355"  
    },
    {
        menID: "men-12",
        menimg1: "/ecommerce/Images/men/Image 941.jpg",
        menImg2: "/ecommerce/Images/men/Image 942.jpg",
        menImg3: "/ecommerce/Images/men/Image 943.jpg",
        menLabel: "Liars",
        menPrice: "$355" 
    },
    {
        menID: "men-13",
        menimg1: "/ecommerce/Images/men/Image 944.jpg",
        menImg2: "/ecommerce/Images/men/Image 945.jpg",
        menImg3: "/ecommerce/Images/men/Image 944.jpg",
        menLabel: "Exec",
        menPrice: "$355"
    },
    {
        menID: "men-14",
        menimg1: "/ecommerce/Images/men/Image 951.jpg",
        menImg2: "/ecommerce/Images/men/Image 952.jpg",
        menImg3: "/ecommerce/Images/men/Image 953.jpg",
        menLabel: "Freakers",
        menPrice: "$340"
    },
    {
        menID: "men-15",
        menimg1: "/ecommerce/Images/men/Image 961.jpg",
        menImg2: "/ecommerce/Images/men/Image 962.jpg",
        menImg3: "/ecommerce/Images/men/Image 961.jpg",
        menLabel: "Fliers",
        menPrice: "$340"
    },
    {
        menID: "men-16",
        menimg1: "/ecommerce/Images/men/Image 971.jpg",
        menImg2: "/ecommerce/Images/men/Image 972.jpg",
        menImg3: "/ecommerce/Images/men/Image 973.jpg",
        menLabel: "Singers",
        menPrice: "$345"
    },
    {
        menID: "men-17",
        menimg1: "/ecommerce/Images/men/Image 982.jpg",
        menImg2: "/ecommerce/Images/men/Image 983.jpg",
        menImg3: "/ecommerce/Images/men/Image 984.jpg",
        menLabel: "Singers",
        menPrice: "$345"
    },
    {
        menID: "men-18",
        menimg1: "/ecommerce/Images/men/Image 991.jpg",
        menImg2: "/ecommerce/Images/men/Image 992.jpg",
        menImg3: "/ecommerce/Images/men/Image 993.jpg",
        menLabel: "Criers",
        menPrice: "$145"
    },
    {
        menID: "men-19",
        menimg1: "/ecommerce/Images/men/Image 9111.jpg",
        menImg2: "/ecommerce/Images/men/Image 9112.jpg",
        menImg3: "/ecommerce/Images/men/Image 9113.jpg",
        menLabel: "Criers",
        menPrice: "$245"
    },
    {
        menID: "men-20",
        menimg1: "/ecommerce/Images/men/Image 980.jpg",
        menImg2: "/ecommerce/Images/men/Image 981.jpg",
        menImg3: "/ecommerce/Images/men/Image 980.jpg",
        menLabel: "Criers",
        menPrice: "$245"
    },


]
 const Productfootwear = [
    {
        
    }

]