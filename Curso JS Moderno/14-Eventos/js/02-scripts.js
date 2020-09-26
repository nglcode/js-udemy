const nav = document.querySelector('.navegacion');

nav.addEventListener('mouseenter', () => {
    console.log('mouseenter en nav');
    nav.style.backgroundColor = 'white';
})

nav.addEventListener('mouseout', () => {
    console.log('mouseout en nav');
    nav.style.backgroundColor = 'transparent';
})


