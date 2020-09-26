window.addEventListener('scroll', () => {
    // const scrollPx = window.scrollY;
    // console.log(scrollPx);

    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();
    console.log(ubicacion);

    if(ubicacion.top < 784 && ubicacion.top > -784) {
        console.log('Elemento visible');
    } else {
        console.log('No visible');
    }

})