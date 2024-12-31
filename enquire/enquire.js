// Open Popup
const openPopup = document.getElementById("open-popup");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("close-popup");

openPopup.addEventListener("click", () => {
    popup.style.display = "flex";
});

// Close Popup
closePopup.addEventListener("click", () => {
    popup.style.display = "none";
});

// Close Popup by Clicking Outside Content
popup.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
    }
});
