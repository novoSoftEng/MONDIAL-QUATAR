function hoverM() {
    let elements = document.getElementsByClassName("ele");
    for (const element of elements) {
        (function () {
            element.addEventListener("mouseover", () => {
                if (element.value == "Acceuil") {
                    
                }
            });
        }());
    }
}