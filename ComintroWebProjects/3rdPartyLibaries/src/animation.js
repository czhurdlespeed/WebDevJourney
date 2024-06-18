import { animate } from 'popmotion';
document.addEventListener("DOMContentLoaded", function() {
    const ball = document.querySelector(".ball");
    animate({
        from: "15vw",
        to: "75vw",
        repeat: Infinity,
        repeatType: "mirror",
        type: "spring",
        onUpdate(update) {
            ball.style.left = update;
        },
    });
});
