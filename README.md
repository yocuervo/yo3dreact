En el proyecto instale las siguientes dependencias a fin de crear un servicio falso de Api para ir preparando el back.
faker (Crea un servicio ‘falso’ de datos para nuestra petición a la api)
json-server (Crea un falso puerto 3001 para la petición a la api)
npm-run-all (Se ejecuta todo)

En el archivo "package.json" modifique lo siguiente:
“start”: “npm-run-all -p client server”
Ejecuta todos los scripts a una

“server”: “json-server --port 3001 --watch server/db.json”,
Crea un servidor falso con un puerto 3001 y unos datos que busca la api en el archivo especificado.

“seed”: “node server/seed.js”,
Crea los datos falsos
