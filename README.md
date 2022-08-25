# Front Crud Test

## Configuración

Versión de python utilizada: 3.8
Versión de pip utilizada: 22.2.2

* Colocarse dentro del directorio `front-crud-test`
* Usando consola del SO de preferencia instalar los componentes necesarios:
```
$ npm install
```
En caso de encontrarse a través de un proxy:
```
$ npm config set proxy http://<username>:<password>@<proxy_server>:<port>
$ npm install
```
* Editar `config.yml` con los datos de la BD de mongo

_**NOTA:** La base de datos utilizada es mongo, con una única colección. El id de los datos proporcionados, está en bd como \_id_ 

## Despliegue de la aplicación en modo desarrollo

### Consola
Encontradose dentro de `backend-crud-test` usando la configuración por defecto:
```
npm start
```

## Que no incluye el aplicativo
* Manejo de excepciones en las respuestas inesperadas del API.
* Comprobación de parámetros a insertar/actualizar (longitudes, tipo de dato, etc)
* Códigos de error específicos en las respuestas que tienen algún error.
* Implementación de protocolos de autenticación como OAuth2
* Protección contra inyección SQL en los campos
