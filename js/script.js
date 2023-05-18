// // Establecer la fecha y hora objetivo (cuenta regresiva)
// var targetDate = new Date("August 18, 2023 00:00:00").getTime();

// // Actualizar el temporizador cada segundo
// var countdown = setInterval(function() {

//   // Obtener la fecha y hora actual
//   var currentDate = new Date().getTime();

//   // Calcular la diferencia entre la fecha y hora objetivo y la actual
//   var difference = targetDate - currentDate;

//   // Calcular los días, horas, minutos y segundos restantes
//   var days = Math.floor(difference / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((difference % (1000 * 60)) / 1000);

//   // Mostrar el temporizador en el elemento con el id "countdown"
//   document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";

//   // Si la cuenta regresiva termina, mostrar un mensaje
//   if (difference < 0) {
//     clearInterval(countdown);
//     document.getElementById("countdown").innerHTML = "¡Tiempo terminado!";
//   }
// }, 1000);
const $days = document.getElementById('days'),
$hours = document.getElementById('hours'),
$minutes = document.getElementById('minutes'),
$seconds = document.getElementById('seconds'),
$finalMessage = document.querySelector('.final-sms');

//Fecha a futuro
const countdownDate = new Date('08 18, 2023 17:30:00').getTime();

let interval = setInterval(function(){
    //Obtener fecha actual y milisegundos
    const now = new Date().getTime();

    //Obtener las distancias entre ambas fechas
    let distance = countdownDate - now;

    //Calculos a dias-horas-minutos-segundos
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60 )) / (1000));

    //Escribimos resultados
    $days.innerHTML = days;
    $hours.innerHTML = hours;
    $minutes.innerHTML = minutes;
    $seconds.innerHTML = ('0' + seconds).slice(-2);

    //Cuando llegue a 0
    if(distance < 0){
        clearInterval(interval);
        $finalMessage.style.transform = 'translateY(0)';
    }
}, 1000);