let menuButton = document.querySelector('.hamburger');
let isopen = false;
menuButton.addEventListener('click', () => {
    let menu = document.querySelector('.hamburger-menu');
    if (isopen) {
        menu.style.display = 'none';
        isopen = false;
    } else {
        menu.style.display = 'block';
        isopen = true;
    }
})

document.querySelectorAll('.hamburger-item').forEach(item => {
    item.addEventListener('click', () => {
        let menu = document.querySelector('.hamburger-menu');
        menu.style.display = 'none';
        isopen = false;
        
        document.querySelector(`#${item.classList[1]}`).scrollIntoView({
            behavior: 'smooth'
        })
    })
})

document.querySelectorAll('.navbar-list a').forEach(item => {
    item.addEventListener('click', () => {
        let menu = document.querySelector('.hamburger-menu');
        
        document.querySelector(`#${item.classList[0]}`).scrollIntoView({
            behavior: 'smooth'
        })
    })
})

document.querySelectorAll('.banner-button-container button').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector(`#${item.classList[1]}`).scrollIntoView({
            behavior: 'smooth'
        })
    })
});