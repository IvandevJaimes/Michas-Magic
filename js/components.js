// Pantalla de carga - se oculta luego de 5s
window.addEventListener('load', () => {
  const pantalla = document.getElementById('pantallaCarga');
  setTimeout(() => {
    pantalla.style.opacity = '0';
    pantalla.style.visibility = 'hidden';
    pantalla.style.pointerEvents = 'none';
    setTimeout(() => pantalla.remove(), 700);
  }, 2100);
});

const pantallaSinConexion = document.getElementById('pantallaSinConexion');
const mensajeConexion = document.getElementById('mensajeConexion');

let reconectado = false; // Variable para controlar si ya mostramos reconexión

function mostrarSinConexion() {
  reconectado = false;
  mensajeConexion.textContent = 'Sin conexión a Internet';
  pantallaSinConexion.style.opacity = '1';
  pantallaSinConexion.style.visibility = 'visible';
  pantallaSinConexion.style.pointerEvents = 'all';
}

function mostrarConexionRestablecida() {
  if (reconectado) return; // Si ya mostramos reconexión, no hacer nada más

  reconectado = true;
  mensajeConexion.textContent = '¡Conexión restablecida!';

  // Esperar 3 segundos y recargar página
  setTimeout(() => {
    location.reload();
  }, 1200);
}

function ocultarPantalla() {
  pantallaSinConexion.style.opacity = '0';
  pantallaSinConexion.style.visibility = 'hidden';
  pantallaSinConexion.style.pointerEvents = 'none';
}

function actualizarEstadoConexion() {
  if (navigator.onLine) {
    mostrarConexionRestablecida();
  } else {
    mostrarSinConexion();
  }
}

window.addEventListener('online', actualizarEstadoConexion);
window.addEventListener('offline', actualizarEstadoConexion);

// Chequeo inicial
if (!navigator.onLine) {
  mostrarSinConexion();
}



const modal = document.getElementById('modalcustom');
const cerrarModal = document.getElementById('cerrarModalcustom');

// Botón fijo para abrir el modal
const abrirModalFijo = document.getElementById('abrirModalcustom');

// Botón flotante que también abre el modal (sin cambiar su ID porque se usa en otro lado)
const botonflotante = document.getElementById('botonFlotante');

abrirModalFijo.addEventListener('click', () => {
  modal.style.display = 'flex';
  document.body.style.overflow='hidden' 
});

botonflotante.addEventListener('click', () => {
  modal.style.display = 'flex';
  document.body.style.overflow='hidden' 
});

cerrarModal.onclick = () => {
  modal.style.display = 'none';
  document.body.style.overflow='' 
}

window.onclick = e => {
  if (e.target === modal) {
    modal.style.display = 'none';
    document.body.style.overflow='' 
  }

};


const sumar = document.getElementById('sumarModalcustom');
const restar = document.getElementById('restarModalcustom');
const cantidadInput = document.getElementById('cantidadModalcustom');

const MIN = 1;
const MAX = 99;

// Variable interna que almacena la cantidad real
let cantidad = 1;

function actualizarInput() {
  cantidadInput.value = cantidad;
}

sumar.onclick = () => {
  if (cantidad < MAX) {
    cantidad++;
    actualizarInput();
  }
};

restar.onclick = () => {
  if (cantidad > MIN) {
    cantidad--;
    actualizarInput();
  }
};

// Si alguien cambia el input (aunque está readonly, por seguridad)
cantidadInput.addEventListener('input', () => {
  let val = Number(cantidadInput.value);
  if (isNaN(val) || val < MIN) val = MIN;
  if (val > MAX) val = MAX;
  cantidad = val;
  actualizarInput();
});

// Inicializa el input al cargar la página o modal
actualizarInput();





