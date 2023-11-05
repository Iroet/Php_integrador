const navBtn = document.querySelector(".nav-btn");
const navList = document.querySelector(".nav-list");
const links = document.querySelector(".nav-links");

navBtn.addEventListener("click", function () {
    //Show Nav list
    const linksheight = links.getBoundingClientRect().height;
    const containerHeight = navList.getBoundingClientRect().height;

    if (containerHeight === 0) {
        navList.style.height = `${linksheight}px`;
    }else {
        navList.style.height = 0;
    }
    
    //Navnbar Btn
    navBtn.classList.toggle("active");
})

//Tickets

const cantidad=document.getElementById('cantidad');
const descuento=document.getElementById('descuento');
const resultado=document.getElementById('resultado');
const submit=document.getElementById('submit');
const nombre=document.getElementById('nombre');
const apellido=document.getElementById('apellido');
const email=document.getElementById('email');

function calcular(){
    const precioUnidad=200.0;
    const precio=precioUnidad*parseInt(cantidad.value);
    const conDescuento=precio-precio*parseFloat(descuento.value);

    resultado.value=`Total a Pagar: $ ${conDescuento}`;
}

document.addEventListener('submit',(event)=>{
    event.preventDefault();
    event.stopPropagation();

    calcular();
});