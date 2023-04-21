const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    h1.style.color = "blue";
}

// 마우스가 title 위에 올라갈 때 발생하는 이벤트: mouseenter
function handleMouseEnter() {
    h1.innerTexth = "Mouse is here!";
    console.log("mouse is here!");
}

// 마우스가 title 위에서 벗어났을 때 발생하는 이벤트 : mouseleave
function handleMouseLeave() {
    h1.innerText = "Mouse is leave!";
    console.log("mouse is leave!");
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copier!");
}

function handleWindowOffline() {
    alert("SOS no WiFi");
}

h1.addEventListener("click", handleTitleClick);
// title.onclick = handleTitleClick;

h1.addEventListener("mouseenter", handleMouseEnter);
// title.onmouseenter = handleMouseEnter;

h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);