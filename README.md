# bibliotecas-frontend

Frontend del sistema de bibliotecas y libros. Angular 22.

Permite registrar bibliotecas (nombre, dirección y ciudad) y muestra una tabla con los libros y su biblioteca. Los datos se obtienen de `GET /bibliotecas` del backend.

## Requisitos

- Node `^22.22.3`, `^24.15.0` o `>=26.0.0`
- El backend `bibliotecas-backend` corriendo en http://localhost:8080

## Ejecutar

```bash
npm install
npm start
```

Abre http://localhost:4200. El archivo `proxy.conf.json` envía las peticiones a `/bibliotecas` al backend en http://localhost:8080.
