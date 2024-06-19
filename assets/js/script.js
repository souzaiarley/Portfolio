function menu() {
    let links = document.querySelector('.links-mobile');
    if (links.classList.contains('open')){
        links.classList.remove('open');
    } else {
        links.classList.add('open');
    }
}