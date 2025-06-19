// PRODUCT PAGE
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


    const sizeButtons = document.querySelectorAll('.sizes button');
    sizeButtons.forEach(button => {
        button.addEventListener('click', () => {
            // First remove active state from all buttons
            sizeButtons.forEach(btn => btn.classList.remove('active-size'));
            // Then add it to the clicked one
            button.classList.add('active-size');
        });
    });


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
    document.querySelector('.thumb img[src="images/Red_dress.jpg"]').classList.add('active');

    

