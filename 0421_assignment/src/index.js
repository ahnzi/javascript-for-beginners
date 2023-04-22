const colors = ["#3498db", "#9b59b6", "#eebc11"];

function handleWindowResize() {
    if (window.innerWidth >= 500 && window.innerWidth <= 1000) {
        document.body.style.backgroundColor = colors[1]; 
    } else if (window.innerWidth > 1000) {
        document.body.style.backgroundColor = colors[2];
    } else {
        document.body.style.backgroundColor = colors[0];
    }
}

window.addEventListener("resize", handleWindowResize);