
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
// making navbar items scroll smoothly and closing navbar on click
document.querySelectorAll('.hamburger-item').forEach(item => {
    item.addEventListener('click', () => {
        let menu = document.querySelector('.hamburger-menu');
        menu.classList.remove('menu-open-anim');
        menu.classList.add('menu-close-anim');
        isopen = false;
        document.querySelector(`#${item.classList[1]}`).scrollIntoView({
            behavior: 'smooth'
        })
    })
})

// making navbar items scroll smoothly on pc
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

// making youtube player  
    let index = 0;
    document.querySelectorAll('.playicon-anim').forEach(item => {
        if(index == 0) {
            setTimeout(() => {
            item.style.animation = 'playicon 3s linear infinite';
        }, 1500);
        index++;
        } else {
            item.style.animation = 'playicon 3s linear infinite';
        }
    })
document.querySelector('.play-icon').addEventListener('click', () => {
    document.querySelector('.yt-player').style.display = 'flex';
    document.body.style.overflow = 'hidden';
})
document.querySelector('.yt-close-button').addEventListener('click', () => {
    let element = document.querySelector('.yt-player')
    stopVideo(element);
    element.style.display = 'none';
    document.body.style.overflow = 'auto';
})

var stopVideo = function ( element ) {
	var iframe = element.querySelector( 'iframe');
	var video = element.querySelector( 'video' );
	if ( iframe ) {
		var iframeSrc = iframe.src;
		iframe.src = iframeSrc;
	}
	if ( video ) {
		video.pause();
	}
};