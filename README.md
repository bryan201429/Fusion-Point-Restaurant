# Proyecto Restaurante Gastronómico - Fusion Point

Este es un proyecto de React que muestra una lista de productos aleatorios obtenidos de una API externa. Incluye un componente de barra de navegación (Navbar), una sección de productos y un pie de página (Footer).

## Tabla de Contenidos

- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Estilos](#estilos)
- [Dependencias](#dependencias)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Instalación

Para instalar y ejecutar este proyecto en tu máquina local, sigue estos pasos:

1. Clona el repositorio:

    ```bash
    git clone https://github.com/bryan201429/Fusion-Point-Restaurant.git
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd Fusion-Point-Restaurant
    ```

3. Instala las dependencias:

    ```bash
    npm install
    ```

4. Inicia la aplicación:

    ```bash
    npm run dev
    ```

## Uso

Una vez que la aplicación esté en funcionamiento, puedes navegar a `http://localhost:5173` en tu navegador web para ver la aplicación en acción.

## Estructura del Proyecto

```plaintext
src/
│
├── assets/
│   ├── backgrounds/
│   │   ├── blackWood.jpg
│   │   └── contactBack.jpg
│
├── components/
│   ├── NavBar/
│   │   └── Navbar.jsx
│   │   └── Navbar.css
│   ├── Footer/
│   │   └── Footer.jsx
│   │   └── Footer.css
│
├── views/
│   ├── Products/
│   │   ├── Products.jsx
│   │   └── Products.css
|   ├── Home/
│   │   ├── Products.jsx
│   │   └── Products.css
|   ├── Contacto/
│   │   ├── Contacto.jsx
│   │   └── Contacto.css
│
...