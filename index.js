document.querySelectorAll(".custommodaltrigger").forEach((button) => {
    button.addEventListener("click", (e) => {
        document.body.classList.add("overflow-hidden")
        document
            .getElementById(e.currentTarget.dataset.target)
            .classList.remove("d-none");
    });
});