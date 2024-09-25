### **Tarea: Práctica de Comandos Básicos de Linux**

**Objetivo**: Aprender y practicar el uso de comandos básicos en la terminal de Linux, asegurando que cada comando se ejecute correctamente con diferentes parámetros.

**Estudiante: Carlos Ureña**

**Instrucciones**:

Utiliza la terminal de Linux (o WSL si estás en Windows) para ejecutar cada uno de los comandos listados a continuación:

## 1\. `ls` - Listar el contenido de un directorio

- **Ejemplo 1:** `ls -l` - Muestra los archivos en formato largo, con detalles como permisos, propietario, tamaño, y fecha de modificación.
- **Ejemplo 2:** `ls -a` - Lista todos los archivos, incluidos los archivos ocultos (los que comienzan con un punto `.`).
- **Ejemplo 3:** `ls -lh` - Muestra los archivos en formato largo, pero el tamaño de los archivos se muestra en unidades legibles para humanos (KB, MB, GB).

## 2\. `cd` - Cambiar de directorio

- **Ejemplo 1:** `cd /home/user/Documentos` - Cambia al directorio "Documentos" dentro del directorio "user".
- **Ejemplo 2:** `cd ..` - Sube un nivel en la jerarquía de directorios (del directorio actual al padre).
- **Ejemplo 3:** `cd -` - Cambia al último directorio en el que estabas anteriormente.

## 3\. `pwd` - Mostrar el directorio actual

- **Ejemplo 1:** `pwd` - Muestra la ruta completa del directorio en el que te encuentras actualmente.
- **Ejemplo 2:** `pwd -P` - Muestra la ruta física, sin enlaces simbólicos.
- **Ejemplo 3:** `pwd --help` - Muestra la ayuda del comando `pwd`, con todas las opciones disponibles.

## 4\. `cp` - Copiar archivos o directorios

- **Ejemplo 1:** `cp archivo.txt /home/user/Documentos/` - Copia `archivo.txt` al directorio "Documentos".
- **Ejemplo 2:** `cp -r /home/user/Documentos /home/user/Backup` - Copia recursivamente el directorio "Documentos" y su contenido al directorio "Backup".
- **Ejemplo 3:** `cp archivo1.txt archivo2.txt /home/user/Documentos/` - Copia múltiples archivos (`archivo1.txt` y `archivo2.txt`) al directorio "Documentos".

## 5\. `mv` - Mover o renombrar archivos o directorios

- **Ejemplo 1:** `mv archivo.txt /home/user/Documentos/` - Mueve `archivo.txt` al directorio "Documentos".
- **Ejemplo 2:** `mv archivo_viejo.txt archivo_nuevo.txt` - Renombra `archivo_viejo.txt` a `archivo_nuevo.txt`.
- **Ejemplo 3:** `mv -i archivo.txt /home/user/Documentos/` - Mueve el archivo pero te pide confirmación si ya existe un archivo con el mismo nombre en el destino.

## 6\. `rm` - Eliminar archivos o directorios

- **Ejemplo 1:** `rm archivo.txt` - Elimina `archivo.txt`.
- **Ejemplo 2:** `rm -r /home/user/Documentos` - Elimina de forma recursiva el directorio "Documentos" y todo su contenido.
- **Ejemplo 3:** `rm -i archivo.txt` - Te solicita confirmación antes de eliminar el archivo `archivo.txt`.

## 7\. `mkdir` - Crear un directorio

- **Ejemplo 1:** `mkdir CarpetaNueva` - Crea un directorio llamado "CarpetaNueva".
- **Ejemplo 2:** `mkdir -p /home/user/Documentos/Proyectos/NuevoProyecto` - Crea un nuevo directorio y todas las subcarpetas necesarias si no existen.
- **Ejemplo 3:** `mkdir Carpeta1 Carpeta2` - Crea múltiples directorios a la vez ("Carpeta1" y "Carpeta2").

## 8\. `rmdir` - Eliminar un directorio vacío

- **Ejemplo 1:** `rmdir CarpetaVacia` - Elimina el directorio "CarpetaVacia" si está vacío.
- **Ejemplo 2:** `rmdir -p /home/user/Documentos/NuevaCarpeta/SubCarpeta` - Elimina la subcarpeta y el directorio superior si ambos están vacíos.
- **Ejemplo 3:** `rmdir --ignore-fail-on-non-empty Carpeta1` - Ignora el error si la carpeta no está vacía.

## 9\. `cat` - Mostrar el contenido de un archivo

- **Ejemplo 1:** `cat archivo.txt` - Muestra el contenido completo de `archivo.txt`.
- **Ejemplo 2:** `cat archivo1.txt archivo2.txt` - Muestra el contenido de ambos archivos concatenados.
- **Ejemplo 3:** `cat archivo.txt | less` - Usa `less` para paginar el contenido de `archivo.txt` si es muy largo.

## 10\. `grep` - Buscar patrones dentro de archivos

- **Ejemplo 1:** `grep "error" archivo.log` - Busca la palabra "error" dentro del archivo `archivo.log`.
- **Ejemplo 2:** `grep -i "warning" archivo.log` - Busca "warning" sin importar mayúsculas o minúsculas.
- **Ejemplo 3:** `grep -r "TODO" /home/user/Proyectos` - Busca recursivamente la palabra "TODO" en todos los archivos de la carpeta "Proyectos".

## 11\. `chmod` - Cambiar permisos de archivos

- **Ejemplo 1:** `chmod 755 script.sh` - Da permisos de lectura, escritura y ejecución al propietario, y permisos de lectura y ejecución a los demás usuarios.
- **Ejemplo 2:** `chmod +x archivo.sh` - Añade el permiso de ejecución a un archivo.
- **Ejemplo 3:** `chmod -R 644 /home/user/Documentos` - Cambia los permisos de todos los archivos en el directorio "Documentos" recursivamente, permitiendo lectura y escritura solo al propietario.

## 12\. `tar` - Comprimir o descomprimir archivos

- **Ejemplo 1:** `tar -cvf archivo.tar /home/user/Documentos` - Crea un archivo `.tar` con los contenidos del directorio "Documentos".
- **Ejemplo 2:** `tar -xvf archivo.tar` - Extrae los contenidos del archivo `.tar`.
- **Ejemplo 3:** `tar -czvf archivo.tar.gz /home/user/Documentos` - Crea un archivo comprimido en formato `.tar.gz` de la carpeta "Documentos".

## 13\. `ps` - Ver los procesos activos

- **Ejemplo 1:** `ps aux` - Muestra una lista detallada de todos los procesos que están corriendo en el sistema.
- **Ejemplo 2:** `ps -u user` - Muestra los procesos que pertenecen a un usuario específico.
- **Ejemplo 3:** `ps -ef | grep firefox` - Muestra información de los procesos que contienen la palabra "firefox".

## 14\. `kill` - Terminar un proceso

- **Ejemplo 1:** `kill 1234` - Mata el proceso con el ID 1234.
- **Ejemplo 2:** `kill -9 1234` - Fuerza la terminación inmediata del proceso con el ID 1234.
- **Ejemplo 3:** `kill -SIGSTOP 1234` - Suspende temporalmente el proceso con el ID 1234.

## 15\. `top` - Monitorear procesos en tiempo real

- **Ejemplo 1:** `top` - Muestra una lista en tiempo real de los procesos que más recursos consumen.
- **Ejemplo 2:** `top -u root` - Muestra solo los procesos que pertenecen al usuario root.
- **Ejemplo 3:** `top -p 1234` - Muestra información en tiempo real sobre un proceso específico, identificado por su ID.
