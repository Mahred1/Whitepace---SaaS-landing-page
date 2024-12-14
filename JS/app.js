// animatins for the burger menu
let burger =document.querySelector(".toggle-btn");
let burgerLines = document.querySelectorAll(".toggle-btn svg line");

burger.addEventListener("click",(e)=>{
    let line1 = burgerLines[0];
    let line2 = burgerLines[1];
    let line3 = burgerLines[2];
    const lineTl = gsap.timeline({
        defaults: {duration:0.8, ease:"power2.inout"}
    });
    if (!burger.classList.contains("burger-active")) {
        burger.classList.add("burger-active");
        lineTl.to(line1,{rotate: "45deg", y: "-50%",});
        lineTl.to(line2,{x: "100%"},"-=0.8");
        lineTl.to(line3,{rotate: "-45deg", y: "50%",},"-=0.8");
    }else{
        burger.classList.remove("burger-active");
        lineTl.to(line1,{rotate: "0deg", y: 0});
        lineTl.to(line2,{x: "0%"},"-=0.8");
        lineTl.to(line3,{rotate: "0deg", y: 0},"-=0.8");
    }
    
})