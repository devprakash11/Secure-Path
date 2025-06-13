function toggleAccordion(element) {
    const content = element.nextElementSibling;
    const sign = element.querySelector('.sign');
    
    if (content.style.display === "block") {
        content.style.display = "none";
        sign.textContent = "+";
        element.classList.remove("active"); // Remove active class
    } else {
        content.style.display = "block";
        sign.textContent = "-";
        element.classList.add("active"); // Add active class
    }
}

