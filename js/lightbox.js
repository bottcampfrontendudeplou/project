const imagenes = document.querySelectorAll('.img-platillos')
const imagenLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light')
const closeLight = document.querySelector('.close');

//console.log(imagenes)
//console.log(imagenLight)
//console.log(contenedorLight)


imagenes.forEach(imagen => {
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'))
    })
})

contenedorLight.addEventListener('click',(e)=>{
    if(e.target !== imagenLight){
        contenedorLight.classList.toggle('show')
        imagenLight.classList.toggle('showImage')
        iconomenu.style.opacity = '1'
    }
})


const aparecerImagen = (imagen)=>{
    imagenLight.src = imagen
    contenedorLight.classList.toggle('show')
    imagenLight.classList.toggle('showImage')
    iconomenu.style.opacity = '0'
}