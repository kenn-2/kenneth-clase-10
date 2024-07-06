function mostrarpag(pageid){
    const page = document.querySelectorAll('.pag');
    for (let i = 0; i < pages.length; i++){
        const page = pages[i];
        if (page.id === pageId){
            page.class.remove('active');

        }else{
            page.classList.remove('active');
        }


    }

}
function cerrar(){
    window.close
}
function mostrarPag(pagina) {
    document.querySelectorAll('.pag').forEach(p => p.classList.remove('active'));
    document.getElementById(pagina).classList.add('active');
}

function cerrar() {
    if (confirm("¿Estás seguro que deseas cerrar sesión?")) {
        window.close();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarPag('pagina1'); 
});
