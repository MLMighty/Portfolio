let accordingItemHeader = document.querySelectorAll(".according-item-header");
let accordingItemBody = document.querySelectorAll(".according-item-body");

accordingItemHeader.forEach(ItemHeader => {
    ItemHeader.addEventListener("click", ()=>{
        ItemHeader.classList.toggle("active");


    })
    
});