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

    console.log("fetch", e.request)

    e.respondWith(

        caches.match(e.request)//busca si existe un request como el que te mandare
        .then( res => res || fetch(e.request))//devuelve de la cache si no devulve de la solicitud original que estabas haciendo
        .catch(console.log))

 })