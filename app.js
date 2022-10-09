//Configurar SW
let swLocation = "sw.js"

if(navigator.serviceWorker){

    //valida si esta en localhost
   /* if(window.location.href.includes("localhost")){

        swLocation = "/sw.js"//varia segun el host

    }*/

    navigator.serviceWorker.register(swLocation)

}


//Logica de la app
const $button = document.querySelector("button")
const $div = document.querySelector("div") 

$button.addEventListener("click", ()=>{

    const $message = document.createElement("P")
    $message.textContent = "Hello World in PWA !"
    $div.append($message)

})

