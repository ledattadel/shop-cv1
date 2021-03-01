let marker = document.querySelector('.marker')
let items = document.querySelectorAll('nav__menu li')

function indicator(event) {
    marker.style.left = event.offsetLeft+"px";
    marker.style.width = event.offsetWidth+"px";
}
items.forEach(link=>{
    link.addEventListener('click',(e)=>{
        indicator(e.target);
    })
})