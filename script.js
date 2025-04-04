// Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

document.querySelectorAll(".project-item").forEach((item) => {
    const video = item.querySelector("video");

    item.addEventListener("mouseenter", () => {
        video.muted = true; // Ensure autoplay works
        video.play();
    });

    item.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0; // Reset video when mouse leaves
    });
});

function toggleClass(){

    let elem = document.querySelector(".links")
    if(elem){
        elem.classList.toggle("hide")
    }
}


function gsapAnime(){
    const tl = gsap.timeline()

    tl.from("#nav", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })

}


function firstPageAnimation(){
    var tl = gsap.timeline()
    tl.from("#nav", {
        y: -10,
        opacity: 0,
        ease: Expo
    })
        .to(".boundinglem", {
            y: 0,
            duration: 2,
            delay:-1,
            ease: Expo.easeInOut,
            stagger: .2
        })
        .from("#herofooter", {
            y: -10,
            opacity: 0,
            duration: 1.5,
            delay:-1,
            ease: Expo.easeInOut,
            stagger: .2
        })
 
}

function circleMouseFollower(){


   if(window.innerWidth > 768){

   
    window.addEventListener("mousemove", function(dets){
        console.log(dets.clientX, dets.clientY);
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`

        if(dets.clientY <= 5){
            document.querySelector("#minicircle").style.display = "none"
        }
        else{
            document.querySelector("#minicircle").style.display = "block"
        }

    })   
}

}




gsapAnime()
circleMouseFollower()
firstPageAnimation()
scrollMiniCircle()

