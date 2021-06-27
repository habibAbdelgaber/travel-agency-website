const menuItems = document.querySelector('.menu')

console.log(menuItems)
const menuItemsList = document.querySelector('.nav__list')
console.log(menuItemsList)

menuItems.addEventListener('click', function(){
    menuItemsList.classList.toggle('nav__list-1')
    document.querySelectorAll('.menu__lines').forEach(item =>{
        item.classList.toggle('responsive-lines')
        menuItems.classList.toggle('menu-click')
    })
})

// console.log(document.querySelectorAll('.card-btn'))
// Array.from(document.querySelectorAll('.card-btn')).forEach((e) => {
//     console.log(e)
//     e.addEventListener('click', function(){
//         e.parentElement.parentElement.classList.toggle('change')
//         // e.parentElement.parentElement.classList.add('change')
//         // e.parentElement.parentElement.classList.remove('change')
//     })
// })

Array.from(document.querySelectorAll('.card-btn')).forEach(item => {
    console.log(item)
    item.onclick = () => {
        item.parentElement.parentElement.classList.toggle('change')
        // item.parentElement.parentElement.classList.add('change')
        // item.parentElement.parentElement.classList.remove('change')
    }
})


