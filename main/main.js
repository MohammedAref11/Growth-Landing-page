const hamBtn = document.getElementById('ham-btn');

hamBtn.addEventListener("click", (e) => {
    const el = e.currentTarget; 
    el.classList.toggle("clicked");
    el.classList.toggle("gap-2"); 
})

