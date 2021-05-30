const menuItems = document.querySelector('.menu')
console.log(menuItems)
const menuItemsList = document.querySelector('.nav__list')
console.log(menuItemsList)

menuItems.addEventListener('click', function(){
    menuItemsList.classList.toggle('nav__list-1')
})
