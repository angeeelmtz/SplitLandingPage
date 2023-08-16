const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

/*Se activa cuando el cursor del mouse entra en un elemento HTML, ya sea directamente o desde un elemento secundario*/
left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
right.addEventListener('mouseenter', () => container.classList.add('hover-right'))

/*Se desactiva cuando el cursor del mouse sale de un elemento HTML, ya sea directamente o hacia un elemento secundario*/
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))
