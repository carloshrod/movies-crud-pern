# Movies CRUD
Típica aplicación CRUD, donde se puede crear, visualizar, actualizar y eliminar datos (películas).

## Funciones Adicionales
* Subir poster para cada película y visualizarlo en el formulario.
* Filtrar las películas de la tabla por: Clasificación, idioma, o fecha de estreno.
* Paginación en la tabla.

## Tecnologías y librerías usadas
### Frontend:
* React
* React Router
* Bootstrap
* FontAwesome
### Backend:
* Node
* Express
* PostgreSQL (HerokuPostgres)
* Node-Postgres
* Cloudinary

## Ejecutar App
1. Clonar o descargar el proyecto en tu equipo.
2. Crear una base de datos **Postgres** local o en **HerokuPostgres**, con la estructura descrita en el archivo **db.sql** (backend).
3. Configurar una cuenta en [Cloudinary](https://cloudinary.com/). Habilitar el "unsigned uploading".
4. Configurar las variables de entorno descritas en el archivo **env-example.txt** (backend). Si la base de datos es local configurar el **pool** en **db.js** con **ssl: false**.
5. Ejecutar los comandos **npm install** y **npm run build** o sus equivalentes en **yarn**, desde la ruta del frontend **/movies-crud-pern/frontend**
6. Ejecutar los comandos **npm install** y **npm start** o sus equivalentes en **yarn**, desde la ruta raíz del proyecto **/movies-crud-pern**.
