# Don Bosco de Esmeraldas — sitio web Astro

## 1. Requisitos
- Node.js 20 o superior
- VS Code

## 2. Instalar y ejecutar
Abre esta carpeta en VS Code y ejecuta:

```bash
npm install
npm run dev
```

Luego abre la dirección que Astro muestre, normalmente `http://localhost:4321`.

Para crear la versión final:
```bash
npm run build
```

## 3. Estructura
- `src/pages/` → cada carpeta es una página independiente.
- `src/components/` → partes reutilizables: menú, hero, noticias, pie de página.
- `src/layouts/Layout.astro` → estructura general.
- `src/styles/global.css` → todos los estilos.
- `public/images/` → imágenes del sitio.

## 4. Cómo cambiar imágenes
Reemplaza los archivos dentro de `public/images/` conservando el mismo nombre, o cambia la ruta en el archivo `.astro`.

Ejemplo:
```astro
<img src="/images/mi-foto.jpg" alt="Mi foto" />
```

## 5. Cómo agregar una noticia
En `src/pages/noticias/index.astro`, agrega otro objeto al arreglo `news`:

```js
["28 de septiembre de 2026", "Mi nueva noticia", "Descripción de la noticia.", "/images/mi-noticia.jpg"]
```

## 6. Cómo agregar una página
Crea una carpeta dentro de `src/pages/`. Por ejemplo:

`src/pages/mi-pagina/index.astro`

Después agrega el enlace en `src/components/Header.astro`.

## 7. Botones e interactividad
Ya incluye:
- menú responsive para celular;
- buscador visual;
- carrusel automático en la portada;
- botones anterior/siguiente y puntos del carrusel;
- galería con ventana emergente;
- formulario de contacto con validación básica;
- navegación real entre páginas.

El formulario actualmente funciona en el navegador, pero no envía correos. Para recibir mensajes reales puedes conectarlo después a Formspree, Netlify Forms o un backend propio.

## 8. Personalización
Los textos de ejemplo, nombres de autoridades, teléfonos, correos, noticias y fotos son editables. Busca esos datos en los archivos de `src/pages/`.

## 9. Importante
Las imágenes SVG incluidas son ilustraciones editables de reemplazo para que el proyecto funcione sin depender de imágenes externas. Sustitúyelas por las fotografías y el logo reales de la institución.
