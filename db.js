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

const carousel = document.getElementById("carousel");

db.collection("1").get().then(snapshot => {
  let docs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

  const max = 9;
  const shuffled = docs.sort(() => 0.5 - Math.random()).slice(0, max);
  const total = shuffled.length;

  const cardsToDisplay = total >= 1 ? [...shuffled, ...shuffled] : shuffled;

  carousel.classList.remove("crs-activo", "crs-estatico");

  if (total >= 1) {
    carousel.classList.add("crs-activo");
  } else {
    carousel.classList.add("crs-estatico");
  }

  cardsToDisplay.forEach(producto => {
    carousel.innerHTML += `
      <div class="crs-card">
        <img src="${producto.imagen}" alt="Producto" class="crs-img">
        <div class="crs-body">
          <h2 class="crs-title">${producto.nombre}</h2>
          <a href="./Html/shop.html"><button class="vermas" data-id="${producto.id}">Ver más </button></a>
        </div>
      </div>
    `;
  });
});
