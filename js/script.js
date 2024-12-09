document.addEventListener("DOMContentLoaded", function(){

    function changeColor() {
        const containers = document.getElementsByClassName("container");
        if (containers.length > 0) {
            const container = containers[0]; // Obtén el primer contenedor
            if (container.style.backgroundColor === "rgb(18, 50, 139)") { // Comparar el color
                container.style.backgroundColor = "#5172ca"; // Cambiar a blanco
            } else {
                container.style.backgroundColor = "rgb(18, 50, 139)"; // Cambiar al color deseado
            }
        }
    }
    
    
    function subir(){
        window.scrollTo({
            top:0,
            behavior:"smooth" /*para desplazarse suave */

        });
        
    }

    document.getElementById("subir-button").addEventListener("click", subir);
  
    document.getElementById("menu-imagen").addEventListener("click", changeColor);

});