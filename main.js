const nav = document.querySelector("nav")
document.querySelector("#menu").onclick = () => {
nav.classList.toggle("active");};

const clouse = document.querySelector("span")
clouse.onclick = ()=>{
    nav.classList.remove("active")}

const scrollElem = document.querySelector(".items")

    window.addEventListener("scroll", () =>{
        if (scrollElem.getBoundingClientRect().top < 430) {
          scrollElem.style.opacity="1";
    }
    else{ scrollElem.style.opacity="0"}
})


const elem = document.querySelector(".section_3")
const img = document.querySelector(".section_3>div>img")


window.addEventListener("scroll", () =>{
    if (elem.getBoundingClientRect().top < 655) {
      img.style.top="-20%"
  }
  else{
       img.style.top="30%"
  }
})
const elem_2 = document.querySelector(".section_3>.item2")
const item = document.querySelector(".section_3>.item2>.item")
const elem_3 = document.querySelector(".section_3>.item1>p")
window.addEventListener("scroll", () =>{
    if (elem_2.getBoundingClientRect().top < 355) {
      item.style.top ="40%"
      elem_3.style.top="50%"
      elem_3.style.opacity="1"
  }
  else{
    item.style.top ="0%"
    elem_3.style.top="120%"
    elem_3.style.opacity="0"
  }})

  const elem4 = document.querySelector(".section_4")
  const item1 =  document.querySelector(".section_4>.item1")
  window.addEventListener("scroll", () =>{
  if(elem4.getBoundingClientRect().top < 312){
    item1.style.left="0%"
  }else{
    item1.style.left="-50%"
  }
  })

  const people = document.querySelector(".section_6>.people")
  const elem5 = document.querySelector(".section_6")
 

  window.addEventListener("scroll", () =>{
    if(elem5.getBoundingClientRect().top < 263){
      people.style.opacity="1"
    }else{
      people.style.opacity="0"
    }
    })
    
    const img_1 = document.querySelector(".section_8>img")
    window.addEventListener("scroll", () =>
    {if(img_1.getBoundingClientRect().top < 700){
      img_1.style.top ="80px"
    }else{
     img_1.style.top = "-300px"
    }})
  const section_10 = document.querySelector(".section_10");
  form_2 = document.querySelector(".section_10>.form_2")
  console.log(form_2);
  window.addEventListener("scroll", () =>
  {if(img_1.getBoundingClientRect().top < 428){
    form_2.style.opacity="1"
  form_2.style.top= "-10px"

  }else{
    form_2.style.top= "500px"
   form_2.style.opacity="0"
  }})
// console.log(Math.round(form_2.getBoundingClientRect().top));

   

