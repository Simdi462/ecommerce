const loadCart = () => {
    return JSON.parse(localStorage.getItem('cart')) || []
}
const saveCart = (cartItems) => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
}

let cartNumber = document.querySelector(".zero")
let cart = loadCart()

const calculateLength = () => {
    let total = cart.reduce((acc , item) => acc + item.qty , 0);
    console.log(total);
    cartNumber.textContent = total;
}

document.addEventListener("DOMContentLoaded", () => {
    calculateLength();
    displayCartItems(); // <== This is what actually renders the items on the screen!
  });
  


const displayCartItems = () => {
    const cartItems = loadCart();
    const cartContainer = document.querySelector(".cart-sec");
    const cartHeader = document.querySelector(".you");

    cartContainer.innerHTML = '';

    if (cartItems.length > 0) {
        cartHeader.textContent = "Shopping Cart";

        cartItems.forEach(item => {
            const cartItem = document.createElement('div');

            const priceValue = Number(item.price.replace("$", "").trim()) || 0;
            const quantity = Number(item.qty) || 1;
            const subtotal = priceValue * quantity;

            cartItem.innerHTML = `
        <table class="cart-table">
            <tbody>
                <tr>
                    <td class="product-info">
                        <div class="product-info-img">
                            <img src="${item.img1}">
                        </div>
                        <div class="product-info-tx">
                            <p>${item.label}</p>
                        </div>
                    </td>
                    <td>${item.price}</td>
                    <td>
                        <select>
                            <option ${item.qty == 1 ? "selected" : ""}>01</option>
                            <option ${item.qty == 2 ? "selected" : ""}>02</option>
                            <option ${item.qty == 3 ? "selected" : ""}>03</option>
                        </select>
                    </td>
                    <td class="sub-total">$${subtotal.toFixed(2)}</td>
                </tr>
            </tbody>
        </table>
            `;
            cartContainer.appendChild(cartItem);
        });
    }
};

const displayCartCount = () =>{
    const cartItems = loadCart();
    const cartCountElement = document.querySelector(".zero")

    if (cartItems.length > 0){
        const totalItems = cartItems.reduce((acc, item) => acc + item.qty, 0);
        cartCountElement.textContent = totalItems
        console.log(totalItems);
    } else{
        cartCountElement.textContent = "0"
    }
}
displayCartCount()

window.addEventListener("DOMContentLoaded", () => {
    displayCartCount();
    displayCartItems();
    calculateLength();
})
