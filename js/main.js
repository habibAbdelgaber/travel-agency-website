const menuItems = document.querySelector('.menu')
const menuItemsList = document.querySelector('.menu-items')

menuItems.addEventListener('click', function(){
    menuItemsList.classList.add('list-1').style.display = 'block'
})
