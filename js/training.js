let accordionsList = document.querySelectorAll(".accordion");

for (let accordion of accordionsList) {
    accordion.addEventListener("click", () => { 

        let plusIcon = accordion.children[1];
        plusIcon.classList.toggle("active");

        let panel = accordion.nextElementSibling;
        panel.style.padding = "0 20px";      

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.padding = "0 20px 20px";
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}