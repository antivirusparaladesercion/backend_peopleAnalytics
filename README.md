# Carga de archivos

Este backend creado en NodeJS permite la carga de archivos csv a un Bucket de S3, esto para iniciar el flujo de trabajo en AWS

## Comenzando 🚀

Mira **Despliegue** para conocer como desplegar el proyecto.


### Pre-requisitos 📋
El proyecto fué creado usando NodeJS en su versión 12, para ejecutar el proyecto se recomienda usar esta versión o una superior. Node se puede descargar de la página: https://nodejs.org/es/


### Instalación 🔧
* Luego de clonar este repositorio, ejecuta la instrucción ``` npm install ``` en el directorio del proyecto para instalar las dependencias necesarias para su funcionamiento

* Configurar en un archivo .env en la raíz del proyecto las siguientes variables de entorno: S3_BUCKET, AWS_ACCESS_KEY_ID y AWS_SECRET_ACCESS_KEY con sus respectivos valores. Ejemplo: AWS_ACCESS_KEY_ID="clavedeprueba2345"

* Una vez finalizada la instalación y configuradas las variables de entorno, ejecuta el comando ``` npm start ``` para ejecutar el proyecto. Si todo es satisfactorio, se obtendrá un mensaje como el siguiente en la consola: **Server is running on port 8080**

## Probando el endpoint

Puedes probarlo en la consola de tu equipo con este código curl y colocando la ruta del archivo en la última fila, luego del @/ del atributo form

```
curl --location --request POST 'http://localhost:8080/api/v1/data-upload' \
--header 'enctype: multipart/form-data' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--form 'data=@/C:/Users/Diego/Downloads/validation.csv'
```

## Documentación de la API

Está disponible en el siguiente enlace:
* [Documentación de la API](https://documenter.getpostman.com/view/5707571/TVev5R4M)

## Despliegue 📦

_Agrega notas adicionales sobre como hacer deploy_

## Construido con 🛠️

* [NODEJS](https://nodejs.org/es/) - Es un entorno de ejecución para Javascript
* [AWS-SDK](https://aws.amazon.com/es/sdk-for-node-js/) - Es el sdk oficial de Amazon para Javascript.
* [CORS](https://github.com/expressjs/cors#readme) - Nos servirá para habilitar el filtro cors en nuestro proyecto, y así poderle hacer peticiones desde un Frontend.
* [DOTENV](https://www.npmjs.com/package/dotenv) - Es una dependencia para crear variables de entorno facilmente, esta dependencia lee las variables definidas en un archivo .env ubicado en el directorio raíz.
* [EXPRESS](http://expressjs.com/) - Nos permite crear una infraestructura web rápida y sencilla con NodeJS.
* [MULTER](https://github.com/expressjs/multer#readme) - Es un middleware que facilita la carga de archivos
* [MULTER-S3](https://github.com/badunk/multer-s3#readme): - Motor de almacenamiento de transmisión múltiple para AWS S3.


## Autores ✒️

* **Diego Chavarría** - *Desarrollo - Documentación* - [dialcha](https://github.com/Dialcha)
* **Equipo Antivirus para la deserción**

También puedes mirar la lista de todos los [contribuyentes](https://github.com/antivirusparaladesercion/backend_peopleAnalytics/network/dependencies) quíenes han participado en este proyecto. 


