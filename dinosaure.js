const dino = document.querySelector('.dino')

window.addEventListener('keydown', (event)=>{
    if (event.key == ' ') {
        dino.classList.toogle('is_jumping')
        setTimeout(()=>{
            dino.classList.toogle('is_jumping')
        },400)
    }
})