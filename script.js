// Array para guardar los productos del carrito
let carrito = [];

// Función para agregar productos
function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    actualizarBotonCarrito();
    alert(nombre + " agregado al carrito!");
}

// Función para actualizar el texto del botón del carrito en el header
function actualizarBotonCarrito() {
    const btnCarrito = document.querySelector('.btn-nav');
    btnCarrito.innerText = "Carrito (" + carrito.length + ")";
}

// Escuchar clics en todos los botones "Agregar al Carrito"
document.addEventListener('DOMContentLoaded', () => {
    const botones = document.querySelectorAll('.btn-add');
    
    botones.forEach(boton => {
        boton.addEventListener('click', (e) => {
            const card = e.target.closest('.producto-card');
            const nombre = card.querySelector('h3').innerText;
            const precio = card.querySelector('.precio').innerText;
            
            agregarAlCarrito(nombre, precio);
        });
    });
});
