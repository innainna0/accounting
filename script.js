const searchInput = document.querySelector('.form-control');
const divs = document.querySelectorAll('.lead');
const consultation = document.querySelector("#book, #bookTwo");
const consultationTwo = document.querySelector("#bookTwo");


searchInput.addEventListener("keyup",function(event){
    const word = event.target.value.toLowerCase();
    divs.forEach(item =>{
        item.querySelector("p").textContent.toLowerCase().includes(word) ? (item.getElementsByClassName.display='block'):(item.style.display='none');
    })
})
consultation.addEventListener("click", function(){
window.open("https://calendly.com/innai197965/30min", "_blank");
}) 
consultationTwo.addEventListener("click", function(){
    window.open("https://calendly.com/innai197965/30min", "_blank");
    }) 


gsap.registerPlugin(ScrollTrigger);
gsap.from(".container-fluid",{
    scrollTrigger: {
    trigger:".container-fluid",
    start:"top center",
    end: "buttom",
    toggleActions:"restart pause resume pause"
    },
    y:20,
    duration:1,
    delay:0.1,
    opacity: 0,
})
gsap.from(".carousel",{
    scrollTrigger: {
    trigger:".carousel",
    start:"top 99%",
    end: "buttom",
    toggleActions:"restart pause resume pause"
    },
    y:20,
    duration:1,
    delay:0.1,
    opacity: 0,
})
gsap.from(".preparation",{
    scrollTrigger: {
    trigger:"#preparation",
    start:"top 99%",
    end: "buttom",
    toggleActions:"restart pause resume pause"
    },
    y:20,
    duration:1,
    delay:0.1,
    opacity: 0,
})
gsap.from(".accounting",{
    scrollTrigger: {
    trigger:"#accounting",
    start:"top 99%",
    end: "buttom",
    toggleActions:"restart none resume pause"
    },
    y:20,
    duration:1,
    delay:0.1,
    opacity: 0,
    scrub:1,
})
gsap.from(".planning",{
    scrollTrigger: {
    trigger:".planning",
    start:"top 99%",
    end: "buttom",
    toggleActions:"restart pause resume pause"
    },
    y:20,
    duration:1,
    delay:0.1,
    opacity: 0,
})
gsap.from(".investing",{
    scrollTrigger: {
    trigger:".investing",
    start:"top 99%",
    end: "buttom",
    toggleActions:"restart pause resume pause"
    },
    y:20,
    duration:1,
    delay:0.1,
    opacity: 0,
})

gsap.from(".aboutus, .aboutus",{
    scrollTrigger: {
    trigger:".aboutus",
    start:"top 99%",
    end: "buttom",
    toggleActions:"restart none resume pause"
    },
    y:20,
    duration:1,
    delay:0.1,
    opacity: 0,
    scrub:1,
})
gsap.from(".protected, form",{
    scrollTrigger: {
    trigger:".protected",
    start:"top 99%",
    end: "buttom",
    toggleActions:"restart none resume pause"
    },
    y:20,
    duration:1,
    delay:0.1,
    opacity: 0,
    scrub:1,
})

gsap.from(".consultation",{
    scrollTrigger: {
    trigger:".consultation",
    start:"top 99%",
    end: "buttom",
    toggleActions:"restart none resume pause"
    },
    y:50,
    duration:1,
    delay:0.1,
    opacity: 0,
    scrub:1,
})

