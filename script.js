const horaSpan = document.getElementById("hora");
const minutosSpan = document.getElementById("minutos");
const segundosSpan = document.getElementById("segundos");
const amopmSpan = document.getElementById("amopm");

function cambiarHora ()
{
    const fecha = new Date();
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    let amopm ="";

    horaSpan.textContent = hora;
    minutosSpan.textContent = minutos;
    segundosSpan.textContent = segundos;
    if(hora<12)
    {
        amopm = "AM";
    }
    else
    {
        amopm = "PM";
    }

    amopmSpan.textContent = amopm;
}
setInterval (cambiarHora,1000);