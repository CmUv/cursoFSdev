# Documentación de Selectores CSS en HTML
##**Carlos Ureña**

Esta documentación abarca tres ejemplos de archivos HTML que exploran diferentes tipos de **selectores CSS**. Cada archivo contiene reglas CSS que interactúan con los elementos HTML para modificar su estilo de manera selectiva.

---
## selectores1.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>selectores</title>
    <style>
        /* Selecciona todos los elementos y les aplica un color de fondo */
        * { 
          background: papayawhip; /* Color de fondo global */
        }

        /* Selecciona todos los elementos <div> */
        div {
          background: #eeeded; /* Fondo gris claro */
        }

        /* Selecciona los elementos con la clase 'titlle' */
        .titlle {
          color: blueviolet; /* Color azul violeta */
        }

        /* Selecciona el elemento con el ID 'titulo2' */
        #titulo2 {
          color: saddlebrown; /* Color marrón oscuro */
        }

        /* Selecciona los enlaces (<a>) que tienen el atributo href igual a "https://platzi.com/home" */
        a[href="https://platzi.com/home"] {
          color: blue; /* Color azul para el enlace que apunta a Platzi */
        }
    </style>
</head>
<body>
    <div class="titlle">Carlos practica</div> <!-- Texto en color azul violeta -->
    <div id="titulo2">Hola mundo div css</div> <!-- Texto en marrón oscuro -->
    <a href="https://platzi.com/home">Platzi.com</a> <!-- Enlace en azul que apunta a Platzi -->
</body>
</html>
```

### Explicación:
1. **`*`**: Selecciona todos los elementos de la página y les aplica un color de fondo global.
2. **`div`**: Selecciona todos los elementos `<div>` y les asigna un fondo gris claro.
3. **`.titlle`**: Selecciona los elementos con la clase `titlle` y aplica un color de texto azul violeta.
4. **`#titulo2`**: Selecciona el elemento con el ID `titulo2` y le aplica un color marrón oscuro.
5. **`a[href="https://platzi.com/home"]`**: Selecciona el enlace que apunta a Platzi y le aplica un color azul.

---

## selectores2.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>selectores2</title>

    <style>
        /* Selecciona todos los elementos <p> que están dentro de un <div> */
        div p {
          color: #158f15; /* Color verde */
        }

        /* Selecciona los elementos <div> que son hijos directos de otro <div> */
        div > div {
          background: rgb(246, 202, 210); /* Fondo rosa claro */
        }

        /* Selecciona los elementos con la clase 'es' */
        .es {
          background: rgb(196, 150, 150); /* Fondo rosa más oscuro */
        }

        /* Selecciona el <section> que viene inmediatamente después de un <div> */
        div + section {
          background: #f0becf; /* Fondo rosado */
        }

        /* Selecciona los elementos <p> que son hermanos posteriores de un <div> */
        div ~ p {
          color: #0ea167; /* Color verde */
        }
    </style>

</head>
<body>
    <div>
        <div>
          <p>Practica Carlos</p> <!-- Texto en verde por estar dentro de un <div> -->
          <div class="es">Es</div> <!-- Fondo rosa claro por ser hijo directo de un <div> -->
        </div>
    </div>
    <p>Clase de selectores 1</p> <!-- Texto en verde por ser hermano de un <div> -->
    <p>Clase de selectores 2</p> <!-- Texto en verde por la misma razón -->
    <section>
        Es lo mejor <!-- Fondo rosado porque está inmediatamente después de un <div> -->
    </section>
    <div>
        Master <!-- No es afectado por ningún selector -->
    </div>
</body>
</html>
```

### Explicación:
1. **`div p`**: Selecciona todos los elementos `<p>` que estén dentro de un `<div>` y les aplica un color verde.
2. **`div > div`**: Selecciona los elementos `<div>` que son hijos directos de otro `<div>` y les aplica un fondo rosa claro.
3. **`.es`**: Selecciona los elementos con la clase `es` y les aplica un fondo rosa más oscuro.
4. **`div + section`**: Selecciona el `<section>` que viene inmediatamente después de un `<div>` y le asigna un fondo rosado.
5. **`div ~ p`**: Selecciona todos los elementos `<p>` que son hermanos de un `<div>` y les aplica un color verde.

---

## selectores3.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>selectores3</title>

    <style>
        /* Selecciona todos los elementos <p> que están dentro de un <div> */
        div p {
          color: #158f15; /* Color verde */
        }

        /* Selecciona los elementos <div> que son hijos directos de otro <div> */
        div > div {
          background: rgb(246, 202, 210); /* Fondo rosa claro */
        }

        /* Selecciona los elementos con la clase 'es' */
        .es {
          background: rgb(196, 150, 150); /* Fondo rosa más oscuro */
        }

        /* Selecciona el <section> que viene inmediatamente después de un <div> */
        div + section {
          background: #f0becf; /* Fondo rosado */
        }

        /* Selecciona los elementos <p> que son hermanos posteriores de un <div> */
        div ~ p {
          color: #0ea167; /* Color verde */
        }
    </style>

</head>
<body>
    <div>
        <div>
          <p>Practica Carlos</p> <!-- Texto en verde por estar dentro de un <div> -->
          <div class="es">Es</div> <!-- Fondo rosa claro por ser hijo directo de un <div> -->
        </div>
    </div>
    <p>Clase de selectores 1</p> <!-- Texto en verde por ser hermano de un <div> -->
    <p>Clase de selectores 2</p> <!-- Texto en verde por la misma razón -->
    <section>
        Es lo mejor <!-- Fondo rosado porque está inmediatamente después de un <div> -->
    </section>
    <div>
        Master <!-- No es afectado por ningún selector -->
    </div>
</body>
</html>
```

### Explicación:
Este archivo es idéntico a **selectores2.html**, por lo tanto, se aplican las mismas reglas y explicación.

---

## Conclusión

Estos ejemplos de selectores CSS muestran cómo se pueden usar diferentes combinaciones de selectores (clases, IDs, descendientes, hijos directos, hermanos) para aplicar estilos de manera precisa a los elementos HTML. A través de estos selectores se puede mejorar el control y la personalización del diseño de una página web.