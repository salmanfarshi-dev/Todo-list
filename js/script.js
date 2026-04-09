let carditems = document.querySelector(".card-items")
let post = document.querySelector(".post")
let textarea = document.querySelector(".text-area")
let input = document.querySelector(".inputone")
let ptag = document.querySelector(".ptag")
let ppost = document.querySelector(".p-post")
let number =document.querySelector(".number")
let h1 = document.querySelector("h1")



ptag.style.color = "red"
input.style.borderRadius = "5px"
textarea.style.borderRadius = "5px"
ptag.style.marginTop = "5px"
ptag.style.display = "none"
number.style.display = "none"
ppost.style.color = "red"
ppost.style.marginTop = "5px"
number.style.color = "red"
h1.style.fontSize = "60px"
h1.style.fontWeight = "600"
h1.style.textAlign = "center"



let arr =[]

post.addEventListener("click", ()=>{
    if(!input.value){
     ptag.style.display ="block"
     number.style.display = "none"
      ppost.innerHTML = ""

      

    }else if(!isNaN(input.value)){
         number.style.display ="block"
         ptag.style.display = "none"
           ppost.innerHTML = ""
      
       


    }else if(!textarea.value){
        ppost.innerHTML = "Please Enter Caption"
        ptag.style.display = "none"
         number.style.display = "none"


    }else{
        arr.push({
        input: input.value,
        textarea:textarea.value
    })
    ptag.style.display = "none"
    number.style.display = "none"
    ppost.innerHTML = ""
     carditems.innerHTML= ""
     input.value = ""
     textarea.value = ""
 display()

    }
})

function display(){
    arr.map(item=>{
  carditems.innerHTML += `  <div class="card" style="width: 18rem;">
      <div class="card-body">
     <h5 class="card-title">${item.input}</h5>
     <p class="card-text">${item.textarea}</p>
     <button  class="btn btn-danger">Delete</button>
     <button  class="btn btn-primary">Edit</button>
  </div>
             </div>  `
})
}



