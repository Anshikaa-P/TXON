


gsap.from("#small",{
    top: 15,
    opacity: 0,
    duration: 2,
    ease: Expo.easeInOut,
})
gsap.from(".line",{
    width: 0,
    opacity: 0,
    duration: 2,
    delay:0.5,
    ease: Expo.easeInOut,
})
gsap.from(".constance",{
    y: 50,
    opacity: 0,
    duration: 2,
    delay:1,
    stagger:0.1,
    ease: Expo.easeInOut
})
gsap.from(".box",{
    y: 50,
    opacity: 0,
    duration: 2,
    delay:2,
    ease: Expo.easeInOut
})
