
let a1=document.getElementById("v1")
let b1=document.getElementById("v2")
let c1=document.getElementById("v3")
b1.addEventListener("click",()=>{
    b1.style.border="4px solid black"
    a1.style.border="none"
    c1.style.border="none"
})
a1.addEventListener("click",()=>{
    a1.style.border="4px solid black"
    b1.style.border="none"
    c1.style.border="none"
})
c1.addEventListener("click",()=>{
    c1.style.border="4px solid black"
    b1.style.border="none"
    a1.style.border="none"
})