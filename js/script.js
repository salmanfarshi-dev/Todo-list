let carditems = document.querySelector(".card-items")
let post = document.querySelector(".post")
let textarea = document.querySelector(".text-area")
let input = document.querySelector(".inputone")
let ptag = document.querySelector(".ptag")
let ppost = document.querySelector(".p-post")
let number =document.querySelector(".number")
let h1 = document.querySelector("h1")
let update = document.querySelector(".update")



ptag.style.color = "red"
input.style.borderRadius = "5px"
textarea.style.borderRadius = "5px"
ptag.style.marginTop = "5px"
ptag.style.display = "none"
number.style.display = "none"
ppost.style.color = "red"
ppost.style.marginTop = "5px"
number.style.color = "red"
h1.style.fontWeight = "600"
h1.style.textAlign = "center"



let arr =[]
let arrayindex;

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

update.addEventListener("click", ()=>{
    arr[arrayindex].input = input.value
    arr[arrayindex].textarea = textarea.value
    carditems.innerHTML = ""
    display()

    input.value = ""
    textarea.value = ""
    update.style.display = "none"
    post.style.display = "block"


     let allButtons = document.querySelectorAll(".edited, .deleted");
  allButtons.forEach((btn) => (btn.style.pointerEvents = "auto")); 
  allButtons.forEach((btn) => (btn.style.opacity = "1"));
})

function display(){
    arr.map(item=>{
  carditems.innerHTML += `   <div class="card">
              <div class="card-body d-flex justify-content-between">
                <div class="content">
                  <h5 class="card-title">${item.input}</h5>
                <p class="card-text">${item.textarea}</p>
                </div>
                <div class="icons">
                  <i class="fa-solid fa-pen-clip edited"></i>
                  <i class="fa-solid fa-trash-can deleted"></i>
                </div>
              </div>
            </div>  `
})



let deleted = document.querySelectorAll(".deleted")
let deletebtn = Array.from(deleted)
deletebtn.map((item,index)=>{
    item.addEventListener("click", ()=>{
        arr.splice(index,1)
       

          carditems.innerHTML= ""
        display()
    } )

})


let edited = document.querySelectorAll(".edited")
let editbtn = Array.from(edited)
editbtn.map((item,index) =>{
    item.addEventListener("click", ()=>{
        input.value = arr[index].input
        textarea.value = arr[index].textarea

        // carditems.innerHTML = ""

       deletebtn.forEach(btn => btn.disabled = true)

        arrayindex = index

    update.style.display = "block"
    post.style.display = "none"


      let allButtons = document.querySelectorAll(".edited, .deleted");
      allButtons.forEach((item) => (item.style.pointerEvents = "none")); 
      allButtons.forEach((item) => (item.style.opacity = "0.5")); 


    })
})

}




























