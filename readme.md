# 🧶 Micha's Magic - Tienda de Amigurumis, Souvenirs y Centros de Mesa

Bienvenido a **Micha's Magic**, un emprendimiento artesanal especializado en la creación de amigurumis, souvenirs y centros de mesa hechos a mano con mucho cariño y dedicación.

---

## 🎯 Descripción General

**Micha's Magic** es una plataforma de e-commerce artesanal que permite a los clientes:

- ✅ Explorar un catálogo de amigurumis, souvenirs y centros de mesa únicos
- ✅ Realizar pedidos personalizados con diseños exclusivos
- ✅ Comprar productos listos para entregar
- ✅ Contactar directamente vía WhatsApp para coordinar detalles
- ✅ Registrar pedidos a través de la plataforma web

### 📦 Tipos de Productos

| Tipo | Descripción |
|------|-------------|
| **Amigurumis** 🧸 | Personajes adorables tejidos a mano con técnica amigurumi, relleno con vellón siliconado. Ideales para regalar o coleccionar. |
| **Souvenirs** 🎁 | Pequeños recuerdos tejidos con paciencia y cariño, perfectos como obsequios especiales. |
| **Centros de Mesa** 🌹 | Decoraciones tejidas para eventos como cumpleaños, baby showers, casamientos y celebraciones temáticas. |

---

## 🌟 Características Principales

### 🏪 Tienda Online
- Catálogo dinámico con productos organizados por categorías
- Búsqueda y filtrado de productos en tiempo real
- Vista previa de productos con detalles completos
- Indicador de productos nuevos (últimos 7 días)
- Estado de disponibilidad: "Listo para entregar" o "Bajo encargo"

### 🛒 Sistema de Pedidos
- **Pedidos de Tienda**: Selecciona productos disponibles y completa tu pedido
- **Pedidos Personalizados**: Solicita un diseño exclusivo con especificaciones propias
- Dos canales de compra:
  - 📱 **WhatsApp**: Contacto directo para coordinar detalles
  - 🌐 **Web**: Registro automático del pedido en el sistema

### 📊 Gestión de Inventario
- Control automático de stock
- Actualización en tiempo real de disponibilidad
- Notificaciones cuando el stock cambia

### 🎨 Diseño Responsivo
- Optimizado para desktop, tablet y móvil
- Interfaz intuitiva y atractiva
- Animaciones suaves y fluidas

### 📍 Información de Contacto
- Mapa interactivo con ubicación
- Teléfono directo
- Enlaces a redes sociales (Facebook, Instagram, WhatsApp)

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura semántica
- **CSS3 (SCSS)**: Estilos avanzados y responsivos
  - Bootstrap 5: Framework CSS para diseño responsivo
  - Font Awesome: Iconografía profesional
  - Owl Carousel: Carrousel de productos
- **JavaScript (Vanilla)**: Lógica de aplicación sin librerías externas complejas
- **jQuery 3.4.1**: Manipulación del DOM

### Backend & Base de Datos
- **Firebase**: Plataforma de Google
  - **Firestore Database**: Base de datos NoSQL en tiempo real
    - Colección "1": Catálogo de productos
    - Colección "2": Registro de pedidos (tienda y personalizados)
  - **Autenticación**: Configurada con API keys


### APIs Externas
- **WhatsApp API**: Integración para envío de mensajes
- **Google Maps API**: Mapa interactivo de ubicación
- **Axios**: Manejo de solicitudes HTTP (CDN)

---

## 📁 Estructura del Proyecto

```
Micha's Magic/
├── index.html                 # Página principal
├── db.js                      # Configuración de Firebase y carrusel principal
├── readme.md                  # Este archivo
├── firebase-debug.log         # Log de depuración de Firebase
│
├── Html/                      # Páginas adicionales
│   ├── shop.html             # Página de tienda
│   ├── about.html            # Página "Sobre nosotros"
│   ├── contact.html          # Página de contacto
│   └── images/               # Imágenes para las páginas
│       ├── p1.png a p8.png   # Productos catálogo
│       ├── c1.jpg a c3.jpg   # Imágenes de categorías
│       ├── hero-bg.png       # Fondo hero
│       └── ...
│
├── css/                       # Estilos
│   ├── style.css             # Estilos principales
│   ├── style.scss            # Estilos SCSS (fuente)
│   ├── style.css.map         # Source map
│   ├── bootstrap.css         # Bootstrap personalizado
│   ├── responsive.css        # Estilos responsivos
│   ├── shop.css              # Estilos de tienda
│   ├── components.css        # Estilos de componentes
│   ├── cardscarrousel.css    # Carrusel de tarjetas
│   └── font-awesome.min.css  # Font Awesome
│
├── js/                        # Scripts JavaScript
│   ├── custom.js             # Funciones personalizadas
│   ├── components.js         # Componentes reutilizables
│   ├── componentsabout.js    # Componentes de "Sobre nosotros"
│   ├── dbshop.js             # Lógica de tienda y Firestore
│   ├── bootstrap.js          # Bootstrap JS
│   └── jquery-3.4.1.min.js  # jQuery
│
└── fonts/                     # Fuentes
    ├── fontawesome-webfont.ttf
    ├── fontawesome-webfont.woff
    └── fontawesome-webfont.woff2
```

---

## ⚙️ Instalación y Configuración

### Requisitos Previos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexión a Internet (para Firebase y APIs externas)
- Servidor web (Apache, Nginx) o usar un servidor local

### Pasos de Instalación

1. **Clonar o descargar el proyecto**
   ```bash
   git clone https://github.com/IvanJ192520/michas-magic.git
   cd michas-magic
   ```

2. **Configurar servidor local** (ejemplo con Python)
   ```bash
   python -m http.server 8000
   ```
   Luego acceder a: `http://localhost:8000`

3. **Verificar conexión con Firebase**
   - Asegúrate de tener conexión a Internet activa
   - Los datos se cargarán automáticamente desde Firestore

4. **Optimización** (opcional)
   - Minificar CSS/JS para producción
   - Optimizar imágenes
   - Configurar CDN para mejor rendimiento

---

## 🚀 Cómo Usar

### Para Clientes

#### 1. Explorar Productos
- Ve a la página de **Tienda**
- Desplázate por el catálogo de productos
- Usa el buscador para encontrar productos específicos
- Filtra por categoría: Amigurumis, Centros de Mesa, Souvenirs

#### 2. Ver Detalles del Producto
- Haz clic en **"Encargar"** en la tarjeta del producto
- Se abrirá un modal con toda la información:
  - Imagen del producto
  - Descripción detallada
  - Precio
  - Tamaño
  - Cantidad disponible
  - Disponibilidad (Listo para entregar / Bajo encargo)

#### 3. Realizar un Pedido de Tienda
En el modal del producto:
- Completa tu nombre y apellido
- Ingresa tu teléfono (sin el +54 9, que se añade automáticamente)
- Selecciona método de pago (Efectivo o Transferencia)
- Elige la cantidad deseada
- Click en **"Encargar por WhatsApp"** o **"Encargar desde la web"**

#### 4. Realizar un Pedido Personalizado
- En la tienda, busca el botón **"Encargar diseño personalizado"**
- Completa el formulario con:
  - Nombre y apellido
  - Teléfono
  - Nombre del producto que deseas
  - Descripción del diseño
  - Tamaño (en cm)
  - Tipo: Amigurumi, Centro de mesa o Souvenir
  - Imagen de referencia (URL)
  - Cantidad
  - Método de pago
- Click en **"Encargar por WhatsApp"** o **"Encargar desde la web"**

#### 5. Métodos de Contacto
- **WhatsApp**: 📱 +54 9 381 5896617
- **Facebook**: 👍 Micha's Magic
- **Instagram**: 📸 @michas_.magic
- **Email**: Para consultas especiales

---

## 📲 Sistema de Pedidos

### Flujo de Pedido por WhatsApp
1. Completa el formulario en la tienda
2. Click en "Encargar por WhatsApp"
3. Se abrirá WhatsApp con un mensaje pre-llenado
4. El mensaje incluye:
   - Nombre del cliente
   - Teléfono
   - Método de pago
   - Detalles del producto/pedido
   - Imagen del producto
5. Envía el mensaje
6. Micha's Magic responderá para confirmar detalles y precio final

### Flujo de Pedido por Web
1. Completa el formulario
2. Click en "Encargar desde la web"
3. El pedido se registra automáticamente en Firestore (Colección "2")
4. Se actualiza automáticamente el inventario
5. Recibirás una confirmación en pantalla
6. Micha's Magic se contactará para confirmar los detalles

### Estados del Pedido

| Estado | Descripción |
|--------|-------------|
| **Listo para entregar** 📦 | El producto está disponible en stock para entrega inmediata |
| **Bajo encargo** 🧶 | El producto será elaborado según tu especificación |

---

## 🔧 Configuración de Firebase

### Inicialización
El proyecto utiliza Firebase con las siguientes credenciales (almacenadas en `db.js` y `dbshop.js`):

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyCrc2s6DQU_Y8J9RgSx9kselWv1oXzh81k",
  authDomain: "amigurbis-db.firebaseapp.com",
  projectId: "amigurbis-db",
  storageBucket: "amigurbis-db.appspot.com",
  messagingSenderId: "111169509634",
  appId: "1:111169509634:web:dfbad5cc43189ca5964a1b",
  measurementId: "G-17029DMZYM"
};
```

### Inicializar Firebase
```javascript
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
```

### Listener en Tiempo Real
```javascript
db.collection("1").onSnapshot((snapshot) => {
  // Actualiza productos en tiempo real
});
```

---


## 📱 Características de Responsive

La aplicación está optimizada para todos los dispositivos:

### Desktop 🖥️
- Ancho completo: 1920px y superior
- Catálogo de 3-4 productos por fila
- Navegación completa en header

### Tablet 📱
- Ancho: 768px - 1024px
- Catálogo de 2 productos por fila
- Menú adaptado

### Móvil 📱
- Ancho: 320px - 767px
- Catálogo de 1 producto por fila
- Menú hamburguesa
- Textos ajustados
- Botones optimizados para toque

### Media Queries Principales
```css
/* Tablet */
@media (max-width: 1024px) { ... }

/* Móvil */
@media (max-width: 768px) { ... }

/* Móvil pequeño */
@media (max-width: 510px) { ... }
```

---

### ¿Preguntas o Sugerencias?
Contacta directamente con Micha's Magic:

- **📱 WhatsApp**: [+54 9 381 5896617](https://wa.me/5493815896617)
- **📘 Facebook**: [Micha's Magic](https://www.facebook.com/share/15jeUuU1PB/)
- **📸 Instagram**: [@michas_.magic](https://www.instagram.com/michas_.magic)

---

### Métodos de Pago
- 💵 Efectivo
- 🏦 Transferencia bancaria
