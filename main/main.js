const hamBtn = document.getElementById('ham-btn');
const mainNav = document.getElementById("main-nav")
hamBtn.addEventListener("click", (e) => {
    const el = e.currentTarget; 
    el.classList.toggle("clicked");
    el.classList.toggle("gap-2"); 
    mainNav.classList.toggle("clicked")
})

