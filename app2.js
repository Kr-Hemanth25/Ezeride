let a=document.querySelector(".button")
a.addEventListener("click",async()=>{
    let a=document.querySelector("#place1").value
    let b=document.querySelector("#place2").value

   let url="https://api.distancematrix.ai/maps/api/distancematrix/json?"+`origins=${a}`+`&destinations=${b}`+"&key=ZX7gTnTjaUsfBxTxRyBCWyvrVkKckoqZ8NLVtKYgitivE03MQuIfZtCTZ1NDo4Jz"
   let udata=await fetch(url)
   let data=await udata.json()
   let origin=data.rows[0].elements[0].origin
   let dest=data.rows[0].elements[0].destination
   let dist=data.rows[0].elements[0].distance.text
   let dur=data.rows[0].elements[0].duration.text
   console.log(origin,dest,dist,dur)

   let v1=Math.floor(Math.random()*12)+8
   let v2=Math.floor(Math.random()*15)+13
   let v3=Math.floor(Math.random()*21)+15
   let v4=Math.floor(Math.random()*10)+3
   let v5=Math.floor(Math.random()*12)+4
   let v6=Math.floor(Math.random()*13)+4



   let d1=document.getElementById("p1")
   let d2=document.getElementById("p2")
   let d3=document.getElementById("p3")
   let d4=document.getElementById("ride2")
   let t1=document.getElementById("t1")
   let t2=document.getElementById("t2")
   let t3=document.getElementById("t3")



   t1.innerHTML=v4+" mins away"
   t2.innerHTML=v5+" mins away"
   t3.innerHTML=v6+" mins away"





   d1.innerHTML="₹"+parseInt(parseInt(dist)*v1+parseFloat(dist)/2*v1+parseFloat(dist)/4*v1)
   d2.innerHTML="₹"+parseInt(parseInt(dist)*v2+parseFloat(dist)/2*v2+parseFloat(dist)/4*v2)
   d3.innerHTML="₹"+parseInt(parseInt(dist)*v3+parseFloat(dist)/2*v3+parseFloat(dist)/4*v3)
   d4.style.visibility="visible"


})