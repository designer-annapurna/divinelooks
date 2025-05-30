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