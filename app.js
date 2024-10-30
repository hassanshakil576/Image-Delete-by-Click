const ul = document.querySelector(".images");

ul.addEventListener("click" , (event)=>{
    if(event.target.parentNode.tagName === "LI"){
        event.target.parentNode.remove();
    }
    console.log(event.target.parentNode);
    
})

