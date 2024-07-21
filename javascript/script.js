

/*-------------scroll aos -----------------*/


AOS.init();



// --------------------------- music -------------------------------

document.addEventListener('DOMContentLoaded', function() {
  const playButton = document.getElementById('play');
  const pauseButton = document.getElementById('pause');
  const audio = document.querySelector('audio');
  const musicImg = document.querySelector('.music__img');

  // Ocultar el botón de pausa al inicio
  pauseButton.style.display = 'none';

  // Función para iniciar el spinner
  function startSpinner() {
    let rotation = 0;
    musicImg.style.transformOrigin = 'center center'; // Asegurar que el punto de origen esté centrado
    musicImg.dataset.rotating = 'true'; // Marcar que está girando
    
    // Función de animación
    function rotate() {
      if (musicImg.dataset.rotating !== 'true') return; // Salir si se detiene la rotación
      rotation += 2; // Ajustar velocidad de rotación (incremento de grados)
      musicImg.style.transform = `rotate(${rotation}deg)`; // Aplicar rotación
      requestAnimationFrame(rotate); // Siguiente frame de animación
    }
    
    // Iniciar la animación
    rotate();
  }

  // Función para detener el spinner
  function stopSpinner() {
    musicImg.dataset.rotating = 'false'; // Marcar que no está girando
  }

  playButton.addEventListener('click', function() {
    audio.play();
    playButton.style.display = 'none'; // Ocultar el botón de play
    pauseButton.style.display = 'inline-block'; // Mostrar el botón de pausa
    startSpinner(); // Iniciar el spinner cuando se inicie la música
  });

  pauseButton.addEventListener('click', function() {
    audio.pause();
    pauseButton.style.display = 'none'; // Ocultar el botón de pausa
    playButton.style.display = 'inline-block'; // Mostrar el botón de play
    stopSpinner(); // Detener el spinner cuando se pause la música
  });

  // Adelantar la canción
  document.getElementById('forward').addEventListener('click', function() {
    audio.currentTime += 10; // Adelantar 10 segundos (ajustable según necesidad)
  });

  // Rebobinar la canción
  document.getElementById('rewind').addEventListener('click', function() {
    audio.currentTime -= 10; // Rebobinar 10 segundos (ajustable según necesidad)
  });

});




document.addEventListener("DOMContentLoaded", function() {
  var scrollArrow = document.getElementById('scroll-arrow');

  // Mostrar u ocultar la flecha según el scroll
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) { // Cambia este valor según dónde quieres ocultar la flecha
      scrollArrow.classList.add('hidden');
    } else {
      scrollArrow.classList.remove('hidden');
    }
  });

  // Scroll hacia abajo cuando se hace clic en la flecha
  scrollArrow.addEventListener('click', function() {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  });
});
















// ---------------------- temporizador -------------------------
function updateTimer() {
  const targetDate = new Date("August 3, 2024 20:00:00").getTime();
  const currentDate = new Date().getTime();
  const timeRemaining = targetDate - currentDate;

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

updateTimer();
setInterval(updateTimer, 1000);

// --------------------------------fotos---------------------------------




document.addEventListener("DOMContentLoaded", function() {
  var swiper = new Swiper(".mySwiper", {
      effect: "cards",
      grabCursor: true,
  });

  // Inicializar Fancybox
  $(".fancybox").fancybox({
      buttons: [
          "zoom",
          "slideShow",
          "fullScreen",
          "thumbs",
          "close"
      ],
      loop: true,
      infobar: true,
      arrows: true,
      protect: true,
      animationEffect: "fade",
      transitionEffect: "slide",
      transitionDuration: 500,
      touch: {
          vertical: false,
      },
      autoFocus: false,
  });
});




  // --------------------------- dresscode-------------------------


const showImageBtn = document.getElementById("showImage");
const lightbox = document.getElementById("lightbox");
const closeButton = document.getElementById("closeButton");

showImageBtn.addEventListener("click", function() {
  lightbox.style.display = "flex";
});

closeButton.addEventListener("click", function() {
  lightbox.style.display = "none";
});

const boton = document.getElementById('mostrarBoton');
const textoDesplegable = document.getElementById('textoDesplegable');

boton.addEventListener('click', () => {
  textoDesplegable.classList.toggle('oculto');
});


// --------------------------------gift---------------------------------

document.addEventListener('DOMContentLoaded', function () {
  const boton = document.getElementById('mostrarBoton');
  const textoDesplegable = document.getElementById('textoDesplegable');

  boton.addEventListener('click', function () {
    textoDesplegable.classList.toggle('mostrar');
  });
});


function copyText() {
  var aliasText = document.getElementById('alias').innerText; // Obtener el texto del alias
  var tempInput = document.createElement('input');
  tempInput.value = aliasText;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);

  // Mostrar el mensaje de "¡Copiado!"
  var copyMessage = document.getElementById('copyMessage');
  copyMessage.style.display = 'block';
  setTimeout(function() {
      copyMessage.style.display = 'none';
  }, 1500); // Ocultar el mensaje después de 1.5 segundos
}



function copyCbuText() {
  const aliasText = document.getElementById('cbuAlias').textContent;
  const copyMessage = document.getElementById('copyCbuMessage');

  const textarea = document.createElement('textarea');
  textarea.value = aliasText;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);

  copyMessage.style.display = 'block';
  setTimeout(() => {
      copyMessage.style.display = 'none';
  }, 2000);
}


// --------------------------- playlist --------------------------------

document.getElementById('whatsappButton').addEventListener('click', function() {
  const phoneNumber = '543816497095';  // Tu número de teléfono en formato internacional sin el símbolo '+'
  const name = document.getElementById('userName').value;  // Obtiene el nombre del input
  const message = document.getElementById('whatsappMessage').value;  // Obtiene el mensaje del input

  if (name.trim() === '' || message.trim() === '') {
      alert('Por favor, completa ambos campos antes de enviar.');
      return;
  }

  const fullMessage = `*Nombre y Apellido:* ${name}\n\n*Tema recomendado:* ${message}`;
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;

  // Abre la URL de WhatsApp en una nueva pestaña
  window.open(whatsappURL, '_blank');

  // Mostrar mensaje de confirmación
  alert('Mensaje enviado');

  // Limpiar los campos de entrada
  document.getElementById('userName').value = '';
  document.getElementById('whatsappMessage').value = '';

  // Volver al bloque de formulario
  document.getElementById('playlist').scrollIntoView({ behavior: 'smooth' });
});


// --------------------------------Invitados---------------------------------


 // Función para buscar la mesa por nombre
function buscarMesa() {
  // Obtener el valor del nombre de la búsqueda y convertirlo a minúsculas
  var nombreBuscado = document.getElementById("nombreBusqueda").value.toLowerCase();

  // Validar si se ingresó un nombre
  if (nombreBuscado.trim() !== "") {
    // Simular una búsqueda (puedes ajustar esto según tu situación real)
    var mesaInfo = obtenerInformacionMesa(nombreBuscado);

    // Validar si se encontró la mesa
    if (mesaInfo !== null) {
      // Crear el texto a desplegar
      var texto = "¡Hola, " + nombreBuscado + "! " + mesaInfo.textoLibre;

      // Mostrar el texto en el div de resultado con transición suave
      var resultadoDiv = document.getElementById("resultado");
      resultadoDiv.innerText = texto;
      resultadoDiv.style.display = "block"; // Mostrar el div
      resultadoDiv.style.opacity = 1;

      // Limpiar el input de búsqueda
      document.getElementById("nombreBusqueda").value = "";
    } else {
      alert("Lo siento, no se encontró el nombre ingresado, prueba con mayúsculas o minúsculas");
    }
  } else {
    alert("Por favor, ingrese su nombre.");
  }
}

// Función de ejemplo para obtener la información de la mesa (puedes personalizar según tus necesidades)
function obtenerInformacionMesa(nombre) {
  // Simulamos una búsqueda, aquí deberías implementar la lógica real
  var invitados = [
    { nombre: "evo alvero", textoLibre: "Su invitación corresponde para 1 persona" },
    { nombre: "anna cerda", textoLibre: "Su invitación corresponde para 1 persona" },
    { nombre: "antonella indra", textoLibre: "Su invitación corresponde para 1 persona" },


  ];

  for (var i = 0; i < invitados.length; i++) {
    // Convertir los nombres a minúsculas para la comparación
    if (invitados[i].nombre.toLowerCase() === nombre) {
      return { textoLibre: invitados[i].textoLibre };
    }
  }

  return null; // Retornar null si no se encuentra el nombre
}

// --------------- confirmacion --------------------------------------


document.getElementById('sendButton').addEventListener('click', function() {
  const recipientNumber = '543816497095';  // Tu número de teléfono en formato internacional sin el símbolo '+'
  const userName = document.getElementById('userFullName').value;  // Obtiene el nombre del input
  const userMessage = document.getElementById('customMessage').value;  // Obtiene el mensaje del input
  const attendanceStatus = document.querySelector('input[name="attendanceOption"]:checked');  // Obtiene el valor del radio button seleccionado

  if (!attendanceStatus) {
      alert('Por favor, selecciona si asistirás o no.');
      return;
  }

  if (userName.trim() === '') {
      alert('Por favor, completa todos los campos antes de enviar.');
      return;
  }

  const finalMessage = `*Presencia:* ${attendanceStatus.value}\n*Nombre y Apellido:* ${userName}\n*Mensaje:* ${userMessage ? userMessage : 'N/A'}`;
  const whatsappLink = `https://wa.me/${recipientNumber}?text=${encodeURIComponent(finalMessage)}`;

  // Abre la URL de WhatsApp en una nueva pestaña
  window.open(whatsappLink, '_blank');

  // Mostrar mensaje de confirmación
  alert('Mensaje enviado');

  // Limpiar los campos de entrada
  document.getElementById('userFullName').value = '';
  document.getElementById('customMessage').value = '';
  document.querySelectorAll('input[name="attendanceOption"]').forEach(radio => radio.checked = false);

  // Volver al bloque de formulario
  document.getElementById('correo').scrollIntoView({ behavior: 'smooth' });
});










function descargarArchivo() {
  // Mostrar la alerta "Descargado" durante 1 segundo
  setTimeout(function() {
    alert('Descargado');
  }, 1000);
}