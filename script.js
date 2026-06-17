let carrito = [];

// Elementos del DOM
const modal = document.getElementById('carrito-modal');
const btnVerCarrito = document.querySelector('.btn-nav');
const btnCerrarModal = document.querySelector('.close-modal');
const contenedorItems = document.getElementById('carrito-items');
const txtTotal = document.getElementById('total-precio');

// Función para abrir/cerrar modal
btnVerCarrito.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarCarrito();
    modal.style.display = 'block';
});

btnCerrarModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Lógica para agregar al carrito
document.addEventListener('DOMContentLoaded', () => {
    const botones = document.querySelectorAll('.btn-add');
    botones.forEach(boton => {
        boton.addEventListener('click', (e) => {
            const card = e.target.closest('.producto-card');
            const nombre = card.querySelector('h3').innerText;
            const precioTexto = card.querySelector('.precio').innerText;
            
            // Convertir "$5,899 MXN" a un número puro (5899)
            const precioNumero = parseInt(precioTexto.replace(/[^0-9]/g, ''));

            carrito.push({ nombre, precio: precioNumero });
            actualizarHeader();
            alert(`⚾ ${nombre} agregado.`);
        });
    });
});

function actualizarHeader() {
    btnVerCarrito.innerText = `Carrito (${carrito.length})`;
}

// Dibujar los productos dentro de la ventana del carrito
function mostrarCarrito() {
    contenedorItems.innerHTML = '';
    
    if (carrito.length === 0) {
        contenedorItems.innerHTML = '<p class="carrito-vacio">Tu carrito está vacío.</p>';
        txtTotal.innerText = '$0 MXN';
        return;
    }

    let totalAcumulado = 0;

    carrito.forEach((producto) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item-carrito');
        itemDiv.innerHTML = `
            <span>${producto.nombre}</span>
            <strong>$${producto.precio.toLocaleString()} MXN</strong>
        `;
        contenedorItems.appendChild(itemDiv);
        totalAcumulado += producto.precio;
    });

    txtTotal.innerText = `$${totalAcumulado.toLocaleString()} MXN`;
}
