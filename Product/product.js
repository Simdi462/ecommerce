const params = new URLSearchParams(window.location.search);
const cardId = params.get("id");

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
    let ShoppingCart = document.querySelector(".product-section")
    const displaySingleProduct = () => {
        let singleProduct = allProducts.find(product => product.id === cardId);

        if (!singleProduct) {
            console.error("Product not found");
        } else {
            // Populate the page with selectedProduct data
            console.log(singleProduct); // Debug to confirm
        }

        let { img1, img2, img3, label, price, id } = singleProduct
        ShoppingCart.innerHTML += `
        <div class="product-details">
            <div class="product-items">
                <div class="four-items">
                    <div class="item-one thumb">
                        <img src="${img1}" alt="">
                    </div>
                    <div class="item-two thumb">
                        <img src="${img2}" alt="">
                    </div>
                    <div class="item-three thumb">
                        <img src="${img3}" alt="">
                    </div>
                    </div>
                    <div class="item-main">
                        <img id="mainImage" src="${img1}" alt="">
                    </div>
                </div>
                
                <div class="product-details-tx">
                    <div class="details-info">
                        <p class="havic">${label}</p>
                        <div class="rating">
                            <div class="stars">
                                <div>
                                    <i class="fa-solid fa-star" style="color: #ffad33;"></i>
                                </div>
                                <div>
                                    <i class="fa-solid fa-star" style="color: #ffad33;"></i>
                                </div>
                                <div>
                                    <i class="fa-solid fa-star" style="color: #ffad33;"></i>
                                </div>
                                <div>
                                    <i class="fa-solid fa-star" style="color: #ffad33;"></i>
                                </div>
                                <div>
                                    <i class="fa-solid fa-star" style="color: #000; opacity:50%;"></i>
                                </div>
                            </div>
                            <div class="reviews">
                                <p>(150 Reviews)</p>
                            </div>
                            <div class="slash-rate">
                                <p>|</p>
                            </div>
                            <div class="stock">
                                <p>in Stock</p>
                            </div>
                        </div>
                            <div class="item-price">
                                <p>${price}</p>
                            </div>
                            <div class="item-details">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum iusto debitis labore blanditiis similique quam numquam nemo autem voluptate ad?</p>
                            </div>
                            <div class="line"></div>
                            <div class="item-colours">
                                <div class="item-colour-tx"><p>Colours:</p></div>
                                <div class="item-colour-opt">
                                    <div class="colour-blue"></div>
                                    <div class="colour-red"></div>
                                </div>
                            </div>
                            <div class="item-size">
                                <div class="item-size-tx"><p>Size:</p></div>
                                <div class="sizes">
                                    <button class="xs">XS</button>
                                    <button class="s">S</button>
                                    <button class="m">M</button>
                                    <button class="l">L</button>
                                    <button class="xl">XL</button>
                                </div>
                            </div>
                            <div class="item-quantity">
                                <div class="quantity">
                                    <button class="minus">-</button>
                                    <span class="two">2</span>
                                    <button class="plus">+</button>
                                </div>
    
                                <div class="buy"><button>Add to cart</button></div>
                                <div class="like"><i class="fa-regular fa-heart" style="color: #000;"></i></div>
                            </div>
                    </div>
                    <div class="delivery">
                        <div class="free">
                            <div class="free-logo">
                                <iconify-icon icon="material-symbols-light:delivery-truck-speed-outline" class="fast-icon"></iconify-icon>
                            </div>
                            <div class="free-del">
                                <div class="free-tx">
                                    <p>Free Delivery</p>
                                </div>
                                <div class="free-info-tx">
                                    <p><a href="">Enter your postal code for delivery availability</a></p>
                                </div>
                            </div>
                        </div>
                        <div class="return">
                            <div class="return-logo">
                                <iconify-icon icon="hugeicons:recycle-03" class="return-icon"></iconify-icon>
                            </div>
                            <div class="return-del">
                                <div class="return-tx">
                                    <p>Return Delivery</p>
                                </div>
                                <div class="return-info-tx">
                                    <p>Free 30 Days Delivery Returns. <a href="">Details</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    displaySingleProduct();



// Images
    const thumbnails = document.querySelectorAll('.thumb img');
    const mainImage = document.getElementById('mainImage');
    thumbnails.forEach(img => {
        img.addEventListener('click', () => {
            // Set main image to clicked one
            mainImage.src = img.src;
            // Remove active class from all thumbnails
            thumbnails.forEach(thumbnail => thumbnail.classList.remove('active'));
            // Add active class to the clicked thumbnail
            img.classList.add('active');
        });
    });
    // document.querySelector('.thumb img[src="images/Red_dress.jpg"]').classList.add('active');

    //Item sizes
    const sizeButtons = document.querySelectorAll('.sizes button');
    sizeButtons.forEach(button => {
        button.addEventListener('click', () => {
            // First remove active state from all buttons
            sizeButtons.forEach(btn => btn.classList.remove('active-size'));
            // Then add it to the clicked one
            button.classList.add('active-size');
        });
    });

    const minusBtn = document.querySelector(".minus");
    const plusBtn = document.querySelector(".plus");
    const quantityDisplay = document.querySelector(".two");
    let count = parseInt(quantityDisplay.textContent);
    plusBtn.addEventListener("click", () => {
        count++;
        quantityDisplay.textContent = count;
    });
    minusBtn.addEventListener("click", () => {
        if (count > 1) {
            count--;
            quantityDisplay.textContent = count;
        }
    });

    const addToCart = document.querySelector(".buy");

addToCart.addEventListener("click", () => {
  const productId = new URLSearchParams(location.search).get("id");
  addCart(productId);
  showSuccessMessage("Successfully added to cart!");
});

function showSuccessMessage(message) {
  const toast = document.createElement("div");
  toast.textContent = message;

  // Styling
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

  // Show it
  setTimeout(() => {
    toast.style.opacity = "1";
  }, 100);

  // Hide it
  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 400);
  }, 3000);
}

let cartNumber = document.querySelector(".zero")

const addCart = (id) => {
  let selectedItem = allProducts.find(product => product.id == id);
  let itemQuantity = parseInt(document.querySelector(".quantity").value);
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  console.log(itemQuantity);

  const existingItem = cart.find(product => product.id == id);
  if (existingItem){
    existingItem.qty += itemQuantity;
  } else{
    cart.push({
      ...selectedItem,
      qty: itemQuantity,
    })
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  console.log(cart)
  calculateLength()
}

const calculateLength = () => {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let total = cart.reduce((acc , item) => acc + item.qty , 0);
  console.log(total);
  cartNumber.innerHTML=total;
}
calculateLength()
document.addEventListener("DOMContentLoaded", () => {
  calculateLength()
})