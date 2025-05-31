// making navbar open and close with animations
let menuButton = document.querySelector('.hamburger');
let isopen = false;
menuButton.addEventListener('click', () => {
    let menu = document.querySelector('.hamburger-menu');
    if (isopen) {
        menu.classList.remove('menu-open-anim');
        menu.classList.add('menu-close-anim');
        isopen = false;
    } else {
        menu.classList.remove('menu-close-anim');
        menu.classList.add('menu-open-anim');
        isopen = true;
    }
})

// clicking logo will redirect to index.html
document.querySelector('.logo').addEventListener('click', () => {
    location.href = 'index.html';
})

// making navbar items scroll smoothly on pc
document.querySelectorAll('.navbar-list a').forEach(item => {
    item.addEventListener('click', () => {
        location.href = 'index.html#' + item.classList[0];
    })
})

// making navbar items scroll smoothly and closing navbar on click
document.querySelectorAll('.hamburger-item').forEach(item => {
    item.addEventListener('click', () => {
        let menu = document.querySelector('.hamburger-menu');
        menu.classList.remove('menu-open-anim');
        menu.classList.add('menu-close-anim');
        isopen = false;
        location.href = 'index.html#' + item.classList[1];
    })
})