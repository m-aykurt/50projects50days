const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')
const ps = document.querySelectorAll("h1")[0];
const xbox = document.querySelectorAll("h1")[1];

left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener("mouseenter", ()=>{
    xbox.classList.add("newClass")
})
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))
left.addEventListener("mouseleave", ()=>{
    xbox.classList.remove("newClass")
})

right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener("mouseenter", ()=>{
    ps.classList.add("newClass")
})
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))
right.addEventListener("mouseleave", ()=>{
    ps.classList.remove("newClass")
})