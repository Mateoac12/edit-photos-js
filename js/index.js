const dropZone = document.getElementById('dropZone')
const fileInput = document.getElementById('fileInput')
const miImagen = document.getElementById('miImagen')
const botonesEdicion = document.getElementById('botonesEdicion')

const botonEliminarEfecto = document.getElementById('botonEliminarEfecto')
const botonEfectoUno = document.getElementById('boton1')
const botonEfectoDos = document.getElementById('boton2')
const botonEfectoTres = document.getElementById('boton3')
const botonEfectoCuatro = document.getElementById('boton4')
const botonEfectoCinco = document.getElementById('boton5')

const botonDescargar = document.getElementById('botonDescargar')

//* ----------   FUNCIONALIDADES GRAFICAS   ----------

// cambia el estilo una vez pasemos un elemento arriba del div
dropZone.addEventListener('dragover', (e) => {
    e.preventDefault()
    dropZone.classList.add('dropZone--active')
})

// cambia el estilo una vez salgamos arriba del div
dropZone.addEventListener('dragleave', (e) => {
    e.preventDefault()
    dropZone.classList.remove('dropZone--active')
})

//* ----------   FUNCIONALIDADES   ----------

// abre el buscador de archivos cuando hag click
dropZone.addEventListener('click', () => {
    fileInput.click()
})

// guarda la informacion de la foto que pasamos cuando soltamos una imagen ahi
dropZone.addEventListener('drop', (e) => {
    e.preventDefault()
    dropZone.classList.remove('dropZone--active')
    fileInput.files = e.dataTransfer.files
    mostrarImagen(e.dataTransfer.files[0])
})

// cuando subirmos una imagen la muestra en la columna derecha
fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0]
    mostrarImagen(file)
})

// lee mi archivo pasandolo a una url y cuando se termina de cargar devuelve el resultado
const mostrarImagen = (file) => {
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.addEventListener('load', (e) => {
        miImagen.setAttribute('src', e.target.result)
        //!botonDescargar.setAttribute('href', e.target.result)
        miImagen.classList.remove('d-none')  // muestra la foto
        botonesEdicion.classList.remove('d-none')   // muesta los botones
        botonDescargar.classList.remove('d-none')   // muestra elboton de descargar
    })
}

botonesEdicion.addEventListener('click', (e) => {
    if (e.target.id == botonEliminarEfecto.id) eliminadorEfectos()
    if (e.target.id == botonEfectoUno.id) efectoUno()
    if (e.target.id == botonEfectoDos.id) efectoDos()
    if (e.target.id == botonEfectoTres.id) efectoTres()
    if (e.target.id == botonEfectoCuatro.id) efectoCuatro()
    if (e.target.id == botonEfectoCinco.id) efectoCinco()
})

let listaEfectos = ['efectoUno', 'efectoDos', 'efectoTres', 'efectoCuatro', 'efectoCinco']

// ----------   Efectos aplicados a fotos   ----------

const eliminadorEfectos = () => {
    for (const efecto of listaEfectos) {
        miImagen.classList.remove(efecto)
    }
}

const efectoUno = () => {
    eliminadorEfectos()
    miImagen.classList.add('efectoUno')
}

const efectoDos = () => {
    eliminadorEfectos()
    miImagen.classList.add('efectoDos')
}

const efectoTres = () => {
    eliminadorEfectos()
    miImagen.classList.add('efectoTres')
}
const efectoCuatro = () => {
    eliminadorEfectos()
    miImagen.classList.add('efectoCuatro')
}

const efectoCinco = () => {
    eliminadorEfectos()
    miImagen.classList.add('efectoCinco')
}

