// This is the code that needs to be in your componentsabout.js file

// Firebase initialization and offline handling (as you provided)
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

window.addEventListener('load', () => {
  const pantalla = document.getElementById('pantallaCarga');
  setTimeout(() => {
    pantalla.style.opacity = '0';
    pantalla.style.visibility = 'hidden';
    pantalla.style.pointerEvents = 'none';
    setTimeout(() => pantalla.remove(), 700);
  }, 500);
});

const pantallaSinConexion = document.getElementById('pantallaSinConexion');
const mensajeConexion = document.getElementById('mensajeConexion');

const spinnerprocesando = document.getElementById('spinnerprocesando')
const enviarmensajeBtn = document.getElementById('enviarmensajeBtn')
const enviarBtn = document.getElementById("enviarBtn")


let reconectado = false;

function mostrarSinConexion() {
  reconectado = false;
  mensajeConexion.textContent = 'Sin conexión a Internet';
  pantallaSinConexion.style.opacity = '1';
  pantallaSinConexion.style.visibility = 'visible';
  pantallaSinConexion.style.pointerEvents = 'all';
}

function mostrarConexionRestablecida() {
  if (reconectado) return;

  reconectado = true;
  mensajeConexion.textContent = '¡Conexión restablecida!';

  setTimeout(() => {
    location.reload();
  }, 1200);
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

if (!navigator.onLine) {
  mostrarSinConexion();
}


// --- Your form submission and alert logic starts here ---
const db = firebase.firestore();

// Change this to select the form in the feedback section
// Your HTML has no ID for the form, so we'll use a class or tag name
const form = document.querySelector(".feedback_section form");
const alerta = document.getElementById("alertaFeedback");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  spinnerprocesando.style=''
  enviarmensajeBtn.innerHTML=`Enviando...`
  enviarBtn.style.pointerEvents='none'
  enviarBtn.style.opacity='70%'
  // enviarmensajeBtn.style.pointerEvents='none'
  // enviarmensajeBtn.style.opacity='50%'
  const nombre = form.querySelector('input[type="text"]').value.trim();
  const correo = form.querySelector('input[type="email"]').value.trim();
  const motivo = form.querySelector("select").value;
  const mensaje = form.querySelector("textarea").value.trim();

  if (!nombre || !correo || !motivo || !mensaje) {
    mostrarAlerta("Por favor, completá todos los campos.", false);
    return;
  }

  try {
    await db.collection("4").add({
      nombre,
      correo,
      motivo,
      mensaje,
      fecha: firebase.firestore.Timestamp.now()
    });
    form.reset();
    mostrarAlerta("Mensaje enviado correctamente. ¡Gracias por tu feedback!", true);
    spinnerprocesando.style.display = "none";
    enviarmensajeBtn.innerHTML = `Enviar mensaje`;
    enviarBtn.style.pointerEvents = "all";
    enviarBtn.style.opacity = "100%";
  } catch (error) {
    mostrarAlerta("Error al enviar el mensaje. Intentá de nuevo.", false);

    spinnerprocesando.style.display = "none";
    enviarmensajeBtn.innerHTML = `Enviar mensaje`;
    enviarBtn.style.pointerEvents = "all";
    enviarBtn.style.opacity = "100%";
  }
});

function mostrarAlerta(texto, exito) {
  alerta.textContent = texto;
  alerta.className = `alerta-feedback mostrar ${exito ? "exito" : "error"}`;
  
  setTimeout(() => {
    alerta.classList.remove("mostrar");
  }, 3000);
}



