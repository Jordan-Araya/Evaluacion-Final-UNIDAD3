#Mini aplicacion web interactiva: Sistema de registro.
Integrante: Jordan Araya
Carrera: Ingenieria en Informatica
Institucion: Instituto profesional Santo Tomas, Sede Iquique.
Materia: Programación web.

#Objetivo: Desarrollar una aplicacion web interactiva e intuitiva que permita capturar y validar datos, ademas de mantener la persistencia en la base de datos de estos mismos. Todo esto a traves de un formulario de registro mediante una arquitectura de cliente-servidor.
Este proyecto enfoca buenas practicas de HTML, CSS Y JAVASCRIPT, haciendo uso del DOM, un backend robusto junto a node.js con Express.

#Requerimientos completados
1: Separacion de responsabilidades haciendo uso de Index.hyml para la estructura ubicado en la carpeta Views, style.css y script.js los cuales estan ubicados en la carpeta public. Al hacer uso de estas 3 aplicamos buen uso para mostrar informacion, darle un diseño bonito pero sobre todo responsivo y finalmente controlar el comportamiento de los datos.
2: Una interfaz centralizada, usable y algo minimalista.
3: Se establecieron los 3 eventos distintos, tales como la implementacion para "submit" donde validamos datos, "input" lo cual se encarga de el feedback visual, y "keyup" para realizar monitoreo en consola.
4: Tenemos una generacion dinamica de los mensajes de error, es decir, se inyectan a traves del DOM usando "CreateElement" y "AppendChild", y finalmente estos se eliminan con ".remove()".
5: Una buena manipulacion del DOM, modificando clases y bordes en tiempo real segun la interaccion que el uusario le de.
6: Posee un formulario con prevenciones de envio (preventDefault()) para detener los envios si es que existen errores.

#Reglas implementadas
1: Requerido: Ningun campo puede estar vacio.
2: Formato: El email debe contener si o si "@" y ".".
3: Coincidencia: El asunto no puede ser igual que el nombre.
4: Longitud: El mensaje debe tener minimo 10 caracteres.
5: Adicional: Esta prohibida la palabra "Prueba" en el asunto

#Persistencia de la base de datos
Creamos un endpoint  encargado de recibir la informacion para la base de datos, utilizando express, aplicando un endpoint POST(/Guardar).
Se testeo con Mysql y funciona totalmente para guardar los datos.

#Instrucciones para ejecutar
1: Primero es ideal ejecutar el script en laragon o donde prefiera, usando el motor MySql.
2: Abrimos el proyecto e instalamos las dependencias necesarias, abriendo la terminal presionando "Ctrl + ñ", ejecutando: nmp install express mysql2.
3: Arrancamos el servidor desde la terminal ejecutando: node app.js.
4: Nos dirigimos al navegador y en direcciones ponemos localhost:3000 y abrimos nuestro formulario.
5: Rellenamos el formulario y le damos al boton. Si todo esta correcto, nos enviara a una pagina de exito. Si no, saldra avisos de que posible error tengas.

#Evidencias
1: Rutas del proyecto
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/85376003-e45b-4a08-8ecd-a737093d7eba" />

2: Interfaz del formulario
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/82853537-7ea7-42fc-9c90-cef2bc9ed271" />

3: Validaciones y posibles fallos
3.1: Campos vacios
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/66346a43-9f50-45d7-9477-de1c048804d1" />
3.2: Formato incorrecto del correo
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/61ce12ff-cef3-4a26-9c5b-9a63d86e7ac7" />
3.3: Asunto coincide con el nombre
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/de5ac7ae-9b06-45ea-8e5a-fc393f41e93a" />
3.4: Palabra prohibida
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/62c71ec5-9162-4ba5-9d6f-18e83bd3ee34" />
3.5: Caracteres minimos
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/0594b8c3-b477-45fe-88f2-f7fc117a0c6c" />

4:Mostrar confirmacion de que todo salio exitoso
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/83c9a180-95c6-4fb9-a742-a4ad08ad3746" />

5: Mostrar datos guardados en la base de datos
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/79528dd3-3f77-4dd7-8dca-d31d407e1514" />




