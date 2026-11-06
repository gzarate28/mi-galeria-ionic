# Mi Galería - Ionic

Aplicación de galería de fotografías desarrollada con Ionic, Angular y Capacitor.

## Requisitos

- Node.js compatible con la versión de Angular indicada en `package.json` (Angular 22 requiere Node.js 22.22.3 o superior dentro de la rama 22, o una versión compatible de Node 24).
- npm.

## Ejecutar en el navegador

```bash
npm install
npm start
```

## Compilar

```bash
npm run build
```

## Funciones

- Selección de varias imágenes desde el dispositivo.
- Captura de fotografías con la cámara.
- Vista ampliada de cada imagen.
- Eliminación de fotografías de la colección actual.
- Diseño adaptable a celulares y pantallas grandes.

> Nota: en esta versión, las imágenes se mantienen en memoria mientras la aplicación está abierta. Al cerrar o reiniciar la aplicación, la colección se reinicia. Para conservarlas permanentemente se debe incorporar almacenamiento local persistente.

## Android / Capacitor

Después de compilar la aplicación web, sincronizá los cambios con Android:

```bash
npx cap sync android
```

Luego abrí Android Studio:

```bash
npx cap open android
```
