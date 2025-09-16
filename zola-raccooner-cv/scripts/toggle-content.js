document.querySelectorAll("[toggle-block]").forEach(button => {
    button.addEventListener("click", () => {
        const targetBlockID = button.getAttribute("toggle-block");
        const targetElmt = document.getElementById(targetBlockID);
        console.log("Clicked");
            if (!targetElmt) return;
            
            if (targetElmt.classList.contains("fade-in")) {
                // Switch to fade-out
                targetElmt.classList.remove("fade-in");
                targetElmt.classList.add("fade-out");

                // After fade-out ends, hide completely
                targetElmt.addEventListener("animationend", () => {
                targetElmt.style.display = "none";
                }, { once: true });
                
                // Update button
                button.textContent = "(+) More about this";

            } else {
                // Switch to fade-in
                targetElmt.style.display = "block";
                targetElmt.classList.remove("fade-out");
                targetElmt.classList.add("fade-in");
            
                // Update button
                button.textContent = "(-) Less about this";
            }
        });
});
