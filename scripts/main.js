'use strict'
const abrir = document.getElementById('abrir');
const modal_container = document.getElementById('modal-conteiner');
const cerrar = document.getElementById('cerrar');

abrir.addEventListener('click', () =>{
    modal_container.classList.add('mostrar');
});

cerrar.addEventListener('click', () =>{
    modal_container.classList.remove('mostrar');
});

//--------------------------------------------------------------------------------------------------------------------------------------//

const abrir_registrar = document.getElementById('abrir_registrar');
const modal_container_registrar = document.getElementById('modal-conteiner_registrar');
const cerrar_registrar = document.getElementById('cerrar_registrar');

abrir_registrar.addEventListener('click', () =>{
    modal_container_registrar.classList.add('mostrar');
});

cerrar_registrar.addEventListener('click', () =>{
    modal_container_registrar.classList.remove('mostrar');
});