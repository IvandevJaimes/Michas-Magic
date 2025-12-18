const firebaseConfig = {
  apiKey: "AIzaSyCrc2s6DQU_Y8J9RgSx9kselWv1oXzh81k",
  authDomain: "amigurbis-db.firebaseapp.com",
  projectId: "amigurbis-db",
  storageBucket: "amigurbis-db.appspot.com",
  messagingSenderId: "111169509634",
  appId: "1:111169509634:web:dfbad5cc43189ca5964a1b",
  measurementId: "G-17029DMZYM"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();



const carrouselNuevos = document.getElementById("carrouselNuevos");
const contAmigurumis = document.getElementById("amigurumis");
const contCentros = document.getElementById("centrosMesa");
const contSouvenirs = document.getElementById("souvenirs");

const buscador = document.getElementById("buscador");
const filtroCategoria = document.getElementById("filtroCategoria");
const btnLimpiarBusqueda = document.getElementById("limpiarBusqueda");

const seccionNuevos = document.getElementById("seccionNuevos");
const seccionAmigurumis = document.getElementById("seccionAmigurumis");
const seccionCentros = document.getElementById("seccionCentros");
const seccionSouvenirs = document.getElementById("seccionSouvenirs");
const spannuevo = document.getElementById("spannuevo");
const spannuevo2 = document.getElementById("spannuevo2");
const dipsponibleInfo = document.getElementById('disponibleInfo');
const bodyscroll= document.getElementById('bodyscroll')

function mostrarErrorServidor() {
  const pantallaError = document.getElementById('errorServidor');
  pantallaError.style.display = 'flex';
}

function activarEnvioConCarga() {

  const btnprocesando = document.getElementById("enviarweb");

  const spinnerprocesando = document.getElementById('spinnerprocesando')

  const texto = document.getElementById('textprocesando')


  texto.textContent='Procesando Solicitúd...'

  btnprocesando.style.pointerEvents='none'
  btnprocesando.style.backgroundColor='blue'

  spinnerprocesando.classList.remove("hidden");


  setTimeout(() => {
    texto.textContent='Encargar desde la web'

    btnprocesando.style.pointerEvents='auto'
    btnprocesando.style.backgroundColor=''

    spinnerprocesando.classList.add("hidden");

  
    
  }, 3000);
}
function activarEnvioConCarga2(){


  const btnprocesando1 = document.getElementById("enviarweb1");

  const spinnerprocesando1 = document.getElementById('spinnerprocesando1')

  const texto1 = document.getElementById('textprocesando1')


  texto1.textContent='Procesando Solicitúd...'

  btnprocesando1.style.pointerEvents='none'
  btnprocesando1.style.backgroundColor='blue'

  spinnerprocesando1.classList.remove("hidden");


  setTimeout(() => {

    texto1.textContent='Encargar desde la web'

    btnprocesando1.style.pointerEvents='auto'
    btnprocesando1.style.backgroundColor=''

    spinnerprocesando1.classList.add("hidden");
  
    
  }, 3000);

}
function mostrarErrorsoli() {
  const toast = document.getElementById("errorToast")
  toast.classList.add("show")
  setTimeout(() => {
    toast.classList.remove("show")
  }, 5000)
}

let productosGlobal = [];
let productoEnModalID = null;

function mensajeActualizar() {
  const mensajecarga = document.getElementById('mensaje-carga');
  setTimeout(() => {
    mensajecarga.style.display="flex"
    mensajecarga.classList.remove('-translate-y-full');
    mensajecarga.classList.add('translate-y-4');
  }, 100); // pequeña espera para forzar animación
  
  setTimeout(() => {
     mensajecarga.style.display="none"
    mensajecarga.classList.remove('translate-y-4');
    mensajecarga.classList.add('-translate-y-full');
  }, 4000); // ocultar luego de 4 segundos
}

function mostrarProductos() {
  carrouselNuevos.innerHTML = "";
  contAmigurumis.innerHTML = "";
  contCentros.innerHTML = "";
  contSouvenirs.innerHTML = "";

  const busqueda = buscador.value.toLowerCase();
  const filtro = filtroCategoria.value;
  const hoy = new Date();

  let hayResultados = false;
  let hayNuevos = false;
  let hayAmi = false;
  let hayCentros = false;
  let haySouvenirs = false;

  productosGlobal.forEach(p => {
    const coincideBusqueda = p.nombre.toLowerCase().includes(busqueda);
    const coincideFiltro = !filtro || p.tipo === filtro;

    if (!coincideBusqueda || !coincideFiltro) return;

    hayResultados = true;
    const fecha = p.fecha ? new Date(p.fecha) : null;
    const esNuevo = fecha && (hoy - fecha < 1000 * 60 * 60 * 24 * 7);

    const cardHTML = `
    <div class="cardinicioshop animate-entry" >
      <div style="position: relative">
        <span class="spannuevo" style="display:${esNuevo ? "flex" : "none"};">
          <h3>NUEVO</h3>
        </span>
        <span class="spandisp" style="display:${p.cantidadDisponible ? "flex" : "none"};">
          <p>ENTREGA LISTA</p>
        </span>
        <img src="${p.imagen}" alt="${p.nombre}" class="cardimgshop">
         
      </div>
     
      <div class="icardbodyshop">
        <h2 class="cardtitleshop">${p.nombre}</h2>
        <h3 class="cardtitleshop">$${p.precio}</h3>
        <button class="vermas" data-id="${p.id}">Encargar</button>
      </div>
    </div>
  `;
  

    if (esNuevo) {
      carrouselNuevos.innerHTML += cardHTML;
      hayNuevos = true;
      
    }

    if (p.tipo === "Amigurumi") {
      contAmigurumis.innerHTML += cardHTML;
      hayAmi = true;
    }
    if (p.tipo === "Centro de mesa") {
      contCentros.innerHTML += cardHTML;
      hayCentros = true;
    }
    if (p.tipo === "Souvenir") {
      contSouvenirs.innerHTML += cardHTML;
      haySouvenirs = true;
    }
  });

    // Ocultar la sección "Nuevos" si hay texto en el buscador o filtro aplicado
  const hayBusquedaOFiltro = buscador.value.trim() !== "" || (filtro && filtro !== "");
  if (hayBusquedaOFiltro) {
    seccionNuevos.style.display = "none";
  } else {
    seccionNuevos.style.display = hayNuevos ? "block" : "none";
  }

  seccionAmigurumis.style.display = hayAmi ? "block" : "none";
  seccionCentros.style.display = hayCentros ? "block" : "none";
  seccionSouvenirs.style.display = haySouvenirs ? "block" : "none";

  const pantallaSinResultados = document.getElementById("pantallaSinResultados");

  if (!hayResultados && buscador.value.trim() !== "") {
    pantallaSinResultados.classList.remove("hidden");
    contAmigurumis.innerHTML = "";
    contCentros.innerHTML = "";
    contSouvenirs.innerHTML = "";
    seccionAmigurumis.style.display = "none";
    seccionCentros.style.display = "none";
    seccionSouvenirs.style.display = "none";
  } else {
    pantallaSinResultados.classList.add("hidden");
  }
  
  const hoy2 = new Date();

  const sumar = document.getElementById('sumarModalcustom2');
  const restar = document.getElementById('restarModalcustom2');
  const cantidadInput = document.getElementById('cantidadModalcustom2');

  const sinstock = document.getElementById('sinstock');


  setTimeout(() => {
    document.querySelectorAll(".vermas").forEach(btn => {
      btn.addEventListener("click", e => {
        
        document.body.style.overflow='hidden' 
        const id = e.currentTarget.dataset.id;
        const producto = productosGlobal.find(p => p.id === id);
        
        productoEnModalID = id;  // <-- guardamos el id
        if (!producto) return;

        const fecha2 = producto.fecha ? new Date(producto.fecha) : null;
        const esNuevo2 = fecha2 && (hoy2 - fecha2 < 1000 * 60 * 60 * 24 * 7);

        document.getElementById("modalImagen").src = producto.imagen;
        document.getElementById("modalNombre").textContent = producto.nombre;
        document.getElementById("modalDescripcion").textContent = producto.descripcion || "Sin descripción.";
        document.getElementById("modalPrecio").textContent = `$${producto.precio}` || "Consultar";
        document.getElementById("modalTipo").textContent = producto.tipo || "-";
        document.getElementById("modalTamano").textContent = `${producto.tamano} cm` || "-";
        document.getElementById("modalCantidadDisponible").textContent = producto.cantidadDisponible ?? "-";
        document.getElementById("modalDisponible").textContent = producto.cantidadDisponible ? "Listo para entregar" : "Disponible bajo encargo";

        document.getElementById("btnEncargar").dataset.id = id;

        modalProducto.classList.remove("hidden");

        if (esNuevo2) {
          spannuevo2.style.display = "flex";
        } else {
          spannuevo2.style.display = "none";
        }

        const dispo = document.getElementById("modalDisponible");
        let MIN = 1;
        let MAX = 99;

        if (!producto.cantidadDisponible) {
          sinstock.style.display = 'block';
          dispo.style.color = "rgb(17, 71, 141)";
          dipsponibleInfo.innerHTML = `🧶 ¡Disponible bajo encargo!, el tiempo estimado de confección y entrega será informado al confirmar el pedido.`;
        } else {
          sinstock.style.display = 'none';
          MAX = producto.cantidadDisponible;
          dispo.style.color = "rgb(14, 197, 14)";
          dipsponibleInfo.innerHTML = `📦 ¡El producto está disponible para entrega inmediata!, podrás coordinar el retiro en el momento`;
        }

        dispo.style.fontWeight = "bold";

        if (producto.cantidadDisponible === 1) {
          restar.style.pointerEvents = "none";
          sumar.style.pointerEvents = "none";
          restar.style.opacity = "50%";
          sumar.style.opacity = "50%";
          cantidadInput.style.opacity = "50%";
        } else {
          restar.style.pointerEvents = "auto";
          sumar.style.pointerEvents = "auto";
          restar.style.opacity = "100%";
          sumar.style.opacity = "100%";
          cantidadInput.style.opacity = "100%";
        }

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

        cantidadInput.addEventListener('input', () => {
          let val = Number(cantidadInput.value);
          if (isNaN(val) || val < MIN) val = MIN;
          if (val > MAX) val = MAX;
          cantidad = val;
          actualizarInput();
        });

        actualizarInput();
      });
    });
  }, 0);

  
  
  
 
   
  
}

function buscarProductoPorId(id) {
  return productosGlobal.find(p => p.id === id);
}

document.getElementById("cerrarProducto").addEventListener("click", () => {
  modalProducto.classList.add("hidden");
  document.body.style.overflow=''

});

window.addEventListener("click", e => {
  if (e.target === modalProducto) {
    modalProducto.classList.add("hidden");
    
    document.body.style.overflow=''
  }

});



function buscarProductoPorId(id) {
  return productosGlobal.find(p => p.id === id);
}






buscador.addEventListener("input", mostrarProductos);
btnLimpiarBusqueda.addEventListener("click", () => {
  buscador.value = "";
  mostrarProductos();
});

// ✅ Select personalizado funcional
const selectedFiltro = filtroCategoria.querySelector(".selected");
const opcionesFiltro = filtroCategoria.querySelector(".options");

filtroCategoria.addEventListener("click", (e) => {
  if (!e.target.classList.contains("option")) {
    opcionesFiltro.classList.toggle("hidden");
  }
});

opcionesFiltro.querySelectorAll(".option").forEach(op => {
  op.addEventListener("click", e => {
    e.stopPropagation(); // ✅ evita doble toggle

    const valor = e.target.dataset.value;
    selectedFiltro.textContent = e.target.textContent;
    selectedFiltro.setAttribute("data-value", valor);
    opcionesFiltro.classList.add("hidden");

    mostrarProductos();
  });
});

Object.defineProperty(filtroCategoria, "value", {
  get() {
    return selectedFiltro.getAttribute("data-value") || "";
  }
});

document.addEventListener("click", (e) => {
  if (!filtroCategoria.contains(e.target)) {
    opcionesFiltro.classList.add("hidden");
  }
});


// Función para cargar datos
function cargarDatosDeFirebase() {
  const db = firebase.database();
  return db.ref('productos').once('value').then(snapshot => {
    if (snapshot.exists()) {
      const productos = snapshot.val();
      console.log(productos);
      // Procesá y mostrálos acá
    } else {
      console.log("No hay datos disponibles");
    }
  }).catch(error => {
    console.error(error);
     mostrarErrorServidor();
  });
}

const botonFlotante = document.getElementById('botonFlotante');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if (scrollY > 195) {
    botonFlotante.classList.remove('hidden');
    botonFlotante.classList.add('show');
  } else {
    
    botonFlotante.classList.add('hidden');
  }
});


function mostrarMensaje(mensajeConfir) {
  const mensaje = document.getElementById('mensajeFlotante');
  mensaje.innerHTML=`${mensajeConfir}`;
  mensaje.classList.remove('hidden');

  setTimeout(() => {
    mensaje.classList.add('hidden');
  }, 5200); 
}


const formEncargo = document.getElementById("formEncargo");
const btnWeb = document.getElementById("enviarweb1");
function calcularNuevaCantidad(stockActual, cantidadPedida) {
  const pedida = parseInt(cantidadPedida, 10);
  if (isNaN(pedida) || pedida <= 0) return stockActual;
  if (!stockActual || stockActual <= 0) return stockActual;
  return Math.max(0, stockActual - pedida);
}

formEncargo.addEventListener("submit", function (e) {
  e.preventDefault();

  const botonPresionado = e.submitter;
  const id = document.getElementById("btnEncargar").dataset.id;
  const producto = productosGlobal.find(p => p.id === id);
  if (!producto) return;

  const nombreApellido = document.getElementById("inputNombreApellido").value.trim();
  const telefono = document.getElementById("inputTelefono").value.trim();
  const metodoPago = document.getElementById("inputMetodoPago").value;
  const cantidad = document.getElementById("cantidadModalcustom2").value.trim();

  if (!nombreApellido || !telefono || !metodoPago) return;

  const hora = new Date().getHours();
  let saludo = '👋 ¡Hola!';
  if (hora >= 6 && hora < 12) saludo = '🌞 ¡Buenos días!';
  else if (hora >= 12 && hora < 20) saludo = '🌤️ ¡Buenas tardes!';
  else saludo = '🌙 ¡Buenas noches!';

  let mensaje = `${saludo} Me gustaría hacer un pedido en Micha's Magic\n\n`;
  mensaje += `*TIPO DE PEDIDO: COMUN DESDE LA TIENDA*;\n`
  mensaje += `*Pedido a nombre de:* ${nombreApellido}\n`;
  mensaje += `*Teléfono:* +549${telefono}\n`;
  mensaje += `*Método de pago:* ${metodoPago}\n`;
  mensaje += `*Fecha del pedido:* ${new Date().toLocaleString()}\n`;
  mensaje += `-------------------------------\n\n`;
  mensaje += `PRODUCTO SELECCIONADO\n`;
  mensaje += `- *NOMBRE:* ${producto.nombre}\n`;
  mensaje += `- *CANTIDAD:* ${cantidad} (Unidades)\n`;
  mensaje += `- *TIPO:* ${producto.tipo || "-"}\n`;
  mensaje += `- *TAMAÑO:* ${producto.tamano || "-"} cm\n`;
  mensaje += `- *DISPONIBILIDAD:* ${producto.cantidadDisponible ? 'Entrega inmediata' : 'Bajo encargo'}\n\n`;
  mensaje += `-------------------------------\n\n`;
  mensaje += `- *COSTO:* $${producto.precio}\n`;
  if (producto.imagen) {
    mensaje += `🖼️ Imagen del producto: ${producto.imagen}`;
  }

  // Si el botón fue el de WhatsApp
  if (botonPresionado.id === "btnEncargar") {
    const url = "https://api.whatsapp.com/send?phone=5493815896617&text=" + encodeURIComponent(mensaje);
    window.open(url, '_blank');

    formEncargo.reset();
    modalProducto.classList.add("hidden");
    const nuevaCantidad = calcularNuevaCantidad(producto.cantidadDisponible, cantidad);

    try {
      
        db.collection("1").doc(producto.id).update({
          cantidadDisponible: nuevaCantidad
          
        }).then(() => {
          // Actualizar el producto en memoria
          producto.cantidadDisponible = nuevaCantidad;
          mostrarProductos(); // Refresca la vista sin recargar
       
          formEncargo.reset();
          modalProducto.classList.add("hidden");
          const mensajeConfir = `
          <img src="https://cdn-icons-png.flaticon.com/512/845/845646.png" alt="Check" />
          <p>Tu pedido está listo para enviarse por Whatsapp. Nos contactaremos con vos en breve.</p>`

          mostrarMensaje(mensajeConfir);
        });
      
    } catch (error) {
      console.log(error)
    }
  }

  // Si el botón fue el de encargar desde la web
  if (botonPresionado.id === "enviarweb1") {
    const pedido = {
      productoID: id,
      nombreProducto: producto.nombre,
      precio: producto.precio,
      tipo: producto.tipo,
      tamano: producto.tamano,
      cantidadDisponible: producto.cantidadDisponible,
      disponibilidad: producto.cantidadDisponible ? "Entrega inmediata" : "Bajo encargo",
      imagen: producto.imagen || "",
      cantidadSeleccionada: cantidad,
      comprador: {
        nombreApellido,
        telefono: `+549${telefono}`,
        metodoPago
      },
      fecha: new Date().toLocaleString(),
      tipoPedido: "comun"
    };

  
    const nuevaCantidad = calcularNuevaCantidad(producto.cantidadDisponible, cantidad);
    activarEnvioConCarga2()
      db.collection("2").add(pedido)
      .then(() => {
        return db.collection("1").doc(producto.id).update({
          cantidadDisponible: nuevaCantidad
        });
      })
      .then(() => { // Este .then() se ejecuta si el pedido y la actualización de stock fueron exitosos
        producto.cantidadDisponible = nuevaCantidad;
        formEncargo.reset();
        modalProducto.classList.add("hidden");
        const mensajeConfir = `
          <img src="https://cdn-icons-png.flaticon.com/512/845/845646.png" alt="Check" />
          <p>Tu pedido se ha registrado correctamente. Nos contactaremos con vos en breve.</p>`;
        mostrarMensaje(mensajeConfir);
        mostrarProductos(); // Ahora se refresca justo después del update
      })
      .catch((error) => { // ✅ CAPTURAMOS ERRORES DE CUALQUIERA DE LAS PROMESAS AQUÍ
        console.error("Error al registrar el pedido o actualizar stock:", error);
        mostrarErrorsoli();
      });
  }
  
  
});


const form = document.getElementById('formModalcustom');
const enviarwp = document.getElementById('enviarwp');
const enviarweb = document.getElementById('enviarweb');

let botonPresionado = null;

enviarwp.addEventListener('click', () => {
  botonPresionado = 'whatsapp';
});
enviarweb.addEventListener('click', () => {
  botonPresionado = 'web';
});

function obtenerValoresFormulario() {
  const telefonosinarea = document.getElementById('telefono')?.value.trim();
  const nombre = document.getElementById('nombre')?.value.trim()
  const apellido = document.getElementById('apellido')?.value.trim()
  const metodoPago= document.getElementById('pago')?.value.trim()
  return {
    comprador:{
      nombreApellido:`${nombre} ${apellido}`,
      metodoPago,
      telefono: `+549${telefonosinarea}`
    },
    nombreProducto: document.getElementById('nombreproducto')?.value.trim(),
    descripcion: document.getElementById('descripcion')?.value.trim(),
    tamano: document.getElementById('tamano')?.value.trim(),
    tipo: document.getElementById('tipo')?.value.trim(),
    cantidad: document.getElementById('cantidadModalcustom')?.value.trim(),
    urlImagen: document.getElementById('urlImagen')?.value.trim(),
  
  };
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const datos = obtenerValoresFormulario();

  const hora = new Date().getHours();
  let saludo = '👋 ¡Hola!';
  if (hora >= 6 && hora < 12) saludo = '🌞 ¡Buenos días!';
  else if (hora >= 12 && hora < 20) saludo = '🌤️ ¡Buenas tardes!';
  else saludo = '🌙 ¡Buenas noches!';

  if (botonPresionado === 'whatsapp') {
    let mensaje = `${saludo} Me gustaría hacer un pedido personalizado en Micha's Magic\n\n`;
    mensaje += `*TIPO DE PEDIDO: PERSONALIZADO*;\n`
    mensaje += `*Pedido a nombre de:* ${datos.comprador.nombreApellido}\n`;
    mensaje += `*Telefono:* ${datos.comprador.telefono}\n`;
    mensaje += `*Método de pago:* ${datos.comprador.metodoPago}\n`;
    mensaje += `*Fecha del pedido:* ${new Date().toLocaleString()}\n`;
    mensaje += `-------------------------------\n\n`;
    mensaje += `*PRODUCTO A ENCARGAR*\n`;
    mensaje += `- *NOMBRE:* ${datos.nombreProducto}\n`;
    mensaje += `- *CANTIDAD:* ${datos.cantidad} (Unidades)\n`;
    mensaje += `- *TIPO:* ${datos.tipo}\n`;
    mensaje += `- *TAMAÑO:* ${datos.tamano}cm\n`;
    mensaje += `*DESCRIPCIÓN:* ${datos.descripcion || '...'}\n\n`;
    mensaje += `-------------------------------\n\n`;
    if (datos.urlImagen) mensaje += `\n\n Imagen de referencia: ${datos.urlImagen}`;

    const url = "https://api.whatsapp.com/send?phone=5493815896617&text=" + encodeURIComponent(mensaje);
    window.open(url, '_blank');


    const mensajeConfir = `
      <img src="https://cdn-icons-png.flaticon.com/512/845/845646.png" alt="Check" />
      <p>Tu pedido está listo para enviarse por Whatsapp. Nos contactaremos con vos en breve.</p>`;
    mostrarMensaje(mensajeConfir);
    form.reset();
  }

  if (botonPresionado === 'web') {
    const datosPedido = {
      ...datos,
      fecha: new Date().toLocaleString(),
      tipoPedido: "personalizado"
    };
    activarEnvioConCarga()
    db.collection("2").add(datosPedido)
      
      .then(() => {
  
        const mensajeConfir = `
          <img src="https://cdn-icons-png.flaticon.com/512/845/845646.png" alt="Check" />
          <p>Tu pedido se ha registrado correctamente. Nos contactaremos con vos en breve.</p>`;
        mostrarMensaje(mensajeConfir);
        mostrarProductos();
        form.reset();
      })
      .catch(() => {
        mostrarErrorsoli()
      });
  }

  botonPresionado = null;
});

function mostrarMensajeActualizado() {
  const el = document.getElementById("mensajeActualizado");
  if (el) {
    el.classList.remove("hidden"); // Ensure it's not display: none
    // Force reflow to ensure transition plays from initial state
    void el.offsetWidth; // This is a trick to force reflow
    el.classList.add("show"); // Trigger the entry animation
    el.classList.remove("hide"); // Ensure no conflicting hide class
    setTimeout(() => {
      // After animation, if you want it to hide automatically
      el.classList.remove("show");
      el.classList.add("hide"); // Trigger the exit animation
      el.addEventListener('transitionend', function handler() {
        el.classList.add("hidden"); // Remove from flow after animation
        el.removeEventListener('transitionend', handler); // Clean up
      });
    }, 5000); // Display for 4 seconds
  }
}

function mostrarOverlayEliminado() {
  const el = document.getElementById("overlayEliminado");
  if (el) el.classList.remove("hidden");
}

function ocultarOverlayEliminado() {
  const el = document.getElementById("overlayEliminado");
  if (el) el.classList.add("hidden");
}

let primeraCarga = true;

firebase.firestore().collection("1").onSnapshot((snapshot) => {
  const productosAnteriores = [...productosGlobal];
  productosGlobal = [];

  snapshot.forEach((doc) => {
    const producto = doc.data();
    producto.id = doc.id;
    productosGlobal.push(producto);
  });

  // If the modal is open and a product is being displayed...
  if (!modalProducto.classList.contains("hidden") && productoEnModalID) {
    const productoActualizado = productosGlobal.find(p => p.id === productoEnModalID);

    if (productoActualizado) {
      const cantidadInput = document.getElementById('cantidadModalcustom2');
      const sumarBtn = document.getElementById('sumarModalcustom2'); // Get these elements
      const restarBtn = document.getElementById('restarModalcustom2'); // directly here

      // Check if there was an update
      if (!primeraCarga) {
        const productoAntes = productosAnteriores.find(p => p.id === productoEnModalID);
        if (productoAntes && JSON.stringify(productoAntes) !== JSON.stringify(productoActualizado)) {
          mostrarMensajeActualizado(); // Show "updated" message
        }
      }

      // --- CRITICAL PART: RE-EVALUATE AND CLAMP QUANTITY ---
      let MIN_current = 1;
      let MAX_current = productoActualizado.cantidadDisponible || 99; // If 0, assume high for custom order
      if (productoActualizado.cantidadDisponible === 0) {
        // If product is only available "bajo encargo", you might want to set a default or allow higher quantities
        // For simplicity, let's keep it at 99 if 0 for custom orders, or 1 if you want to limit to single custom order.
        // If you want to force 1 when quantityDisponible is 0, uncomment the next line:
        // MAX_current = 1;
      }


      // Get the current value from the input.
      let currentInputQuantity = parseInt(cantidadInput.value, 10);
      // Ensure the current input value is within the new bounds
      if (isNaN(currentInputQuantity) || currentInputQuantity < MIN_current) {
        currentInputQuantity = MIN_current;
      }
      if (currentInputQuantity > MAX_current) {
        currentInputQuantity = MAX_current;
      }
      cantidadInput.value = currentInputQuantity; // Set the input to the clamped value


      // --- Update Modal Content (Existing Logic) ---
      document.getElementById("modalImagen").src = productoActualizado.imagen;
      document.getElementById("modalNombre").textContent = productoActualizado.nombre;
      document.getElementById("modalDescripcion").textContent = productoActualizado.descripcion || "Sin descripción.";
      document.getElementById("modalPrecio").textContent = `$${productoActualizado.precio}` || "Consultar";
      document.getElementById("modalTipo").textContent = productoActualizado.tipo || "-";
      document.getElementById("modalTamano").textContent = `${productoActualizado.tamano} cm` || "-";
      document.getElementById("modalCantidadDisponible").textContent = productoActualizado.cantidadDisponible ?? "-";
      document.getElementById("modalDisponible").textContent = productoActualizado.cantidadDisponible ? "Listo para entregar" : "Disponible bajo encargo";

      const hoy = new Date();
      const fecha = productoActualizado.fecha ? new Date(productoActualizado.fecha) : null;
      const esNuevo = fecha && (hoy - fecha < 1000 * 60 * 60 * 24 * 7);
      spannuevo2.style.display = esNuevo ? "flex" : "none";

      const dispo = document.getElementById("modalDisponible");
      if (!productoActualizado.cantidadDisponible) {
        sinstock.style.display = 'block';
        dispo.style.color = "rgb(17, 71, 141)";
        dipsponibleInfo.innerHTML = `🧶 ¡Disponible bajo encargo!, el tiempo estimado de confección y entrega será informado al confirmar el pedido.`;
      } else {
        sinstock.style.display = 'none';
        dispo.style.color = "rgb(14, 197, 14)";
        dipsponibleInfo.innerHTML = `📦 ¡El producto está disponible para entrega inmediata!, podrás coordinar el retiro en el momento`;
      }
      dispo.style.fontWeight = "bold";

      // --- Re-bind Event Listeners to Use Current MAX_current ---
      // This is crucial to ensure the click handlers use the latest MAX.
      sumarBtn.onclick = () => {
        let currentVal = parseInt(cantidadInput.value, 10);
        if (isNaN(currentVal)) currentVal = MIN_current; // Fallback
        if (currentVal < MAX_current) {
          cantidadInput.value = currentVal + 1;
        }
      };

      restarBtn.onclick = () => {
        let currentVal = parseInt(cantidadInput.value, 10);
        if (isNaN(currentVal)) currentVal = MIN_current; // Fallback
        if (currentVal > MIN_current) {
          cantidadInput.value = currentVal - 1;
        }
      };

      cantidadInput.oninput = () => {
        let val = Number(cantidadInput.value);
        if (isNaN(val) || val < MIN_current) val = MIN_current;
        if (val > MAX_current) val = MAX_current;
        cantidadInput.value = val;
      };

      // Ensure button states are correct based on new MAX_current
      if (MAX_current === 1) { // If only 1 unit is available
        restarBtn.style.pointerEvents = "none";
        sumarBtn.style.pointerEvents = "none";
        restarBtn.style.opacity = "50%";
        sumarBtn.style.opacity = "50%";
        cantidadInput.style.opacity = "50%";
      } else {
        restarBtn.style.pointerEvents = "auto";
        sumarBtn.style.pointerEvents = "auto";
        restarBtn.style.opacity = "100%";
        sumarBtn.style.opacity = "100%";
        cantidadInput.style.opacity = "100%";
      }

      // Hide the "deleted" overlay if product is found
      ocultarOverlayEliminado();
    } else {
      mostrarOverlayEliminado();
      const modalconten = document.getElementById("cuerpomodalcont")

      // Deshabilitar interacción durante esos segundos si querés
      modalconten.style.pointerEvents = "none";
      
      setTimeout(() => {
        ocultarOverlayEliminado();
        modalProducto.classList.add("hidden");
        mostrarProductos();

        modalconten.style.pointerEvents = "auto";
      }, 5500);
      
    }
    
    
  }

  // General update messages for the page, not related to modal specific issue
  if (!primeraCarga) {
    if (!document.getElementById("overlayEliminado")?.classList.contains("hidden")) return;
    mensajeActualizar();
  } else {
    primeraCarga = false;
  }

  // Refresh the main product display
  mostrarProductos();

}, (error) => {
  console.error("Error al escuchar cambios:", error);
  const errorDiv = document.getElementById("errorConexion");
  if (errorDiv) errorDiv.classList.remove("hidden");
  mostrarErrorServidor();
});



