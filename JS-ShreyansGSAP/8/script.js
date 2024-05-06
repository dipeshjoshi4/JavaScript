var tl = gsap.timeline();

tl.from("nav h1, nav h4, nav button", {
    y: -30,
    duration: 0.6,
    delay: 0.7,
    opacity: 0,
    stagger: 0.2
})

tl.from(".center-part-1 h1", {
    x: -200,
    opacity: 0,
    duration: 0.4
})

tl.from(".center-part-1 p", {
    x: -100,
    opacity: 0,
    duration: 0.4
})

tl.from(".center-part-1 button", {
    opacity: 0,
    duration: 0.4
})

tl.from(".center-part-2 img", {
    opacity: 0,
    duration: 0.5
}, "-=0.3")

tl.from(".section1Bottom img", {
    y:30,
    opacity: 0,
    duration: 0.6,
    stagger:0.15
})