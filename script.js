document.addEventListener("DOMContentLoaded", () => {
    // Basket gomb kiszelektálása
    const addToBasketButton = document.querySelector(".button");

    // Az összes <a> elem kiválasztása, amelynek szövege "Basket (0)"-val kezdődik
    const basketLinks = document.querySelectorAll("a");

    // Szűrjük azokat az <a> elemeket, amelyek pontosan "Basket (" kezdetűek
    const basketElements = Array.from(basketLinks).filter(link => link.textContent.startsWith("Basket ("));

    // Ha az elemek nem léteznek, ne fusson tovább a script
    if (!addToBasketButton || basketElements.length === 0) return;

    // Kezdő érték beállítása a basket számára
    let basketCount = 0;

    // Frissítő függvény a kosár számához
    const updateBasketText = () => {
        basketElements.forEach(link => {
            link.textContent = `Basket (${basketCount})`;
        });
    };

    // Eseményfigyelő hozzáadása
    addToBasketButton.addEventListener("click", () => {
        // Incrementáljuk a számlálót
        basketCount++;
        // Frissítjük a Basket linkeket
        updateBasketText();
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
