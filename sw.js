 const STATIC_CACHE = "static"

 const APP_SHELL = [

    "/",
    "index.html",
    "style.css",
    "app.js",
    "img/logo.jpg"

 ]
 
 self.addEventListener("install", e =>{

     const cacheStatic = caches
     .open(STATIC_CACHE)
     .then((caches) => caches.addAll(APP_SHELL)) 

     e.waitUntil(cacheStatic)//hacemos esperar a que el evento termine
 })


 //offline
 self.addEventListener("fetch", e => {

    //me parece que fecth es un evento del SW que trae toda la data de la aplicion desde donde tengas tu
    //domino o si esta en local pues desde localhost, fetch trae archivos html,css, imagenes todos
    //lo que tenga la pagina por si hay un cambio lo trae. Pero primero lo checa si esta en cache

    console.log("fetch", e.request)

    e.respondWith(

        caches.match(e.request)//busca si existe un request como el que te mandare ->compara si lo que esta solicitando ha cambiado con respecto a lo que tiene la cache
        .then( res => res || fetch(e.request))//devuelve de la cache si no devulve de la solicitud original que estabas haciendo
        .catch(console.log))

 })