const form = document.querySelector("form");
    // Save Changes
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
                    }, 5000);
                }
            }
        });
        if (allFilled) {
            showSuccessMessage("Successfully Sent!");
        }
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


