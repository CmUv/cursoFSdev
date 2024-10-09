# Documentación de la Tienda Online

Esta es la documentación para una tienda online desarrollada como parte de un curso de Frontend Developer. El proyecto incluye varias secciones y funcionalidades, utilizando HTML y CSS para la creación de una interfaz de usuario atractiva y responsiva.

## Índice

- [Documentación de la Tienda Online](#documentación-de-la-tienda-online)
  - [Índice](#índice)
  - [Descripción del Proyecto](#descripción-del-proyecto)
  - [Estructura del Proyecto](#estructura-del-proyecto)
  - [Tecnologías Utilizadas](#tecnologías-utilizadas)
  - [Componentes del Proyecto](#componentes-del-proyecto)
    - [1. Barra de Navegación](#1-barra-de-navegación)

## Descripción del Proyecto

Este proyecto es una tienda online que permite a los usuarios navegar por diferentes categorías de productos, ver detalles de los productos, agregar productos a su carrito de compras y gestionar sus órdenes. El diseño es responsivo, lo que permite una experiencia óptima en dispositivos móviles y de escritorio.

## Estructura del Proyecto

El proyecto está organizado en varias secciones, cada una representando una funcionalidad específica de la tienda. Las siguientes son las secciones principales:

- Barra de navegación superior
- Página de productos
- Detalles del producto
- Carrito de compras
- Página de órdenes

## Tecnologías Utilizadas

- HTML5
- CSS3
- Fuentes de Google (Quicksand)

## Componentes del Proyecto

### 1. Barra de Navegación

La barra de navegación se encuentra en la parte superior de la página y permite a los usuarios acceder a diferentes secciones de la tienda. Utiliza una estructura flexible que se adapta a diferentes tamaños de pantalla.

```html
<nav>
    <img src="./icons/icon_menu.svg" alt="menu" class="menu">
    <div class="navbar-left">
        <img src="./logos/logo_yard_sale.svg" alt="logo" class="logo">
        <ul>
            <li><a href="/">All</a></li>
            <li><a href="/">Clothes</a></li>
            <li><a href="/">Electronics</a></li>
            <li><a href="/">Furnitures</a></li>
            <li><a href="/">Toys</a></li>
            <li><a href="/">Others</a></li>
        </ul>
    </div>
    <div class="navbar-right">
        <ul>
            <li class="navbar-email">carlos@ejemplo.com.pa</li>
            <li class="navbar-shopping-cart">
                <img src="./icons/icon_shopping_cart.svg" alt="shopping cart">
                <div>2</div>
            </li>
        </ul>
    </div>
</nav>
