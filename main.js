let back_icon = document.getElementById('back-icon');
let next_icon = document.getElementById('next-icon');
let gallery = document.querySelector('.gallery');

back_icon.addEventListener('click', (e) => {
    gallery.style.scrollBehavior = 'smooth';
    gallery.scrollLeft  += '900';
});
next_icon.addEventListener('click', (e) => {
    gallery.style.scrollBehavior = 'smooth';
    gallery.scrollLeft  -= '900';
});