const topMenuToggle = document.getElementById('ct-top-toggle-menu')
const topMenu = document.getElementById('ct-top-menu')

document.addEventListener('click', (e) => {
    if (topMenuToggle.contains(e.target)) {
        topMenu.classList.toggle('ct-top-menu-expanded')
        topMenu.classList.toggle('hidden')
    } else {
        if (topMenu.classList.contains('ct-top-menu-expanded')) {
            topMenu.classList.remove('ct-top-menu-expanded')
            topMenu.classList.add('hidden')
        }
    }
})