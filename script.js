document.addEventListener("DOMContentLoaded", () => {
    // Basket gomb kiszelektálása
    const addToBasketButton = document.querySelector(".button");
    // A gomb melletti szám kiszelektálása
    const basketLink = document.querySelector(".header ul li:last-child a");

    // Ha az elemek nem léteznek, ne fusson tovább a script
    if (!addToBasketButton || !basketLink) return;

    // Eltároljuk a számlálót
    let basketCount = 0;

    // Eseményfigyelő hozzáadása
    addToBasketButton.addEventListener("click", () => {
        // Incrementáljuk a számlálót
        basketCount++;
        // Frissítjük a feliratot
        basketLink.textContent = `Basket (${basketCount})`;
        // Alert
        alert("Item added to the basket!");
    });

    // Képek kiválasztása
    const galleryImages = document.querySelectorAll(".gallery img");
    const mainImage = document.querySelector(".itemImg");

    // Ha nincs fő kép, ne folytassa
    if (!mainImage) return;

    // Bármelyik képre kattintva lefut a függvény
    galleryImages.forEach((img) => {
        img.addEventListener("click", (event) => {
            // Megjeleníti azt a képet, amire kattintottunk
            mainImage.src = event.target.src;
        });
    });

    // Egér esemény hozzáadása
    galleryImages.forEach((img) => {
        img.addEventListener("mouseover", () => {
            img.style.border = "2px solid #48C7C1"; // Zöld keret hozzáadása
        });
        img.addEventListener("mouseout", () => {
            img.style.border = "none"; // Zöld keret eltávolítása
        });
    });
});
