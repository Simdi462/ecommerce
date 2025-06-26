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