const upButton = document.querySelector(".up-button");

window.addEventListener("scroll", () => {
    console.log({ scrollY });

    if (scrollY > 100) {
        upButton.style.display = 'block'
    } else {
        upButton.style.display = 'none'
    }
})

upButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});