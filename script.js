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

document.querySelectorAll(".toggle").forEach(toggle => {
    toggle.addEventListener("click", function(){
        document.querySelector(".links").style.display = document.querySelector(".links").style.display === "none" ? "flex" : "none";
    });
});

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
    window.addEventListener("mousemove", function(dets){
        // console.log(dets.clientX, dets.clientY);
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`
    })   
}

// function circleChaptaKaro(){
//     window.addEventListener('mousemove', function(dets){

//     })  
// }




gsapAnime()
circleMouseFollower()
firstPageAnimation()

// document.querySelectorAll(".elem").forEach(function(elem){

//     var rotate = 0
//     var diffrot = 0

//     elem.addEventListener('mousemove', function(dets){



//         var diff = dets.clientY - elem.getBoundingClientRect().top
//         diffrot = dets.clientY - rotate
//         rotate = dets.clientX

//         gsap.to(elem.querySelector("img"),{
//             opacity: 1,
//             ease: "power1",
//             visibility: "visible",
//             top: diff,
//             left: dets.clientX,
//             rotate: gsap.utils.clamp(-20,20,diffrot)

         
           
//         });
//     });


//     elem.addEventListener('mouseleave', function(dets){



//         var diff = dets.clientY - elem.getBoundingClientRect().top
//         diffrot = dets.clientY - rotate
//         rotate = dets.clientX

//         gsap.to(elem.querySelector("img"),{
//             opacity: 0,
//             // top: -0
//         });
//     });
// });