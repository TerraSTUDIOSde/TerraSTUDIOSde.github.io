document.addEventListener("mousemove", MouseMove);

function MouseMove(e) {
    factor = 30;
    x = e.clientX / factor;
    y = e.clientY / factor;
    document.body.style.backgroundPosition = x + "px " + y + "px";
}