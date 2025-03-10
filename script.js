const soundMap = {};

function createSoundButton(name, filename, keyCombination = null) {
  const container = document.createElement('div');
  container.classList.add('sound-container');

  const button = document.createElement('button');
  button.textContent = name;
  button.classList.add('button');
  button.onclick = () => playSound(name);

  const volumeControl = document.createElement('input');
  volumeControl.type = 'range';
  volumeControl.min = 0;
  volumeControl.max = 1;
  volumeControl.step = 0.01;
  volumeControl.value = 1;
  volumeControl.classList.add('volume-control');
  volumeControl.oninput = (e) => setVolume(name, e.target.value);

  const pauseButton = document.createElement('button');
  pauseButton.textContent = 'Pausa';
  pauseButton.classList.add('pause-button');
  pauseButton.onclick = () => pauseSound(name);

  const progressBar = document.createElement('progress');
  progressBar.classList.add('progress-bar');
  progressBar.value = 0;
  progressBar.max = 1;

  container.appendChild(button);
  container.appendChild(pauseButton);
  container.appendChild(volumeControl);
  container.appendChild(progressBar);

  if (keyCombination) {
    const shortcutLabel = document.createElement('div');
    shortcutLabel.textContent = keyCombination.toUpperCase();
    shortcutLabel.classList.add('shortcut');
    container.appendChild(shortcutLabel);

    document.addEventListener('keydown', (e) => {
      if (e.key === keyCombination) {
        playSound(name);
      }
    });
  }

  const buttonsContainer = document.getElementById('buttons-container');
  buttonsContainer.appendChild(container);

  const audio = createSound(name, filename);

  // Actualizar la barra de progreso
  audio.addEventListener('timeupdate', () => {
    progressBar.value = audio.currentTime / audio.duration;
  });
}

function createSound(name, filename) {
  const audio = new Audio(`sounds/${decodeURIComponent(filename)}`);
  soundMap[name] = audio;
  return audio;
}

function playSound(name) {
  const sound = soundMap[name];
  if (sound) {
    sound.currentTime = 0;
    sound.play();
  } else {
    console.error(`Sonido no encontrado: ${name}`);
  }
}

function pauseSound(name) {
  const sound = soundMap[name];
  if (sound) {
    sound.pause();
  } else {
    console.error(`Sonido no encontrado: ${name}`);
  }
}

function setVolume(name, volume) {
  const sound = soundMap[name];
  if (sound) {
    sound.volume = volume;
  } else {
    console.error(`Sonido no encontrado: ${name}`);
  }
}

// Ejemplo de cómo añadir botones, puedes personalizar estos según tus necesidades
createSoundButton('FONDO', '00FONDO.mp3', '0');
createSoundButton('CAMBIO DE PARTES', '0CIERRE.mp3', '1');
createSoundButton('ALARMA', '1ALARMACLOCK.mp3', '2');
createSoundButton('DESPERTAR', '1.1DESPERTAR.mp3', '3');
createSoundButton('MENSAJE CELULAR', '2ESCRIBIRMENSAJES.mp3','4');
createSoundButton('NOTIFICACION', '3MESSENGER.mp3', '5');
createSoundButton('TIKTOK 1', '4TIKTOK1.mp3', '6');
createSoundButton('TIKTOK 2', '5TIKTOK2.mp3', '7');
createSoundButton('TIKTOK 3', '6TIKTOK3.mp3','8');
createSoundButton('RISA', '7RISA.mp3', '9');
createSoundButton('SORPRESA', '7.1SORPRESA.mp3', 'q');
createSoundButton('BOING', '7.2BOING.mp3', 'w');
createSoundButton('RELOJ', '8RELOJAPURADO.mp3', 'e');
createSoundButton('BEBER', '8.1AGUA.mp3');
createSoundButton('MASTICAR', '9MASTICARRAPIDO.mp3', 'r');
createSoundButton('DOLOR', '10QUEJADOLOR.mp3', 't');
createSoundButton('PUERTA', '11PUERTA.mp3', 'y');
createSoundButton('PASOS', '12PASOS.mp3', 'u');
createSoundButton('RELOJ', '13RELOJAPURADO.mp3', 'i');
createSoundButton('TECLADO', '14TECLADORAPIDO.mp3', 'o');
createSoundButton('JEFE', '15JEFEENFADADO.mp3', 'p');
createSoundButton('GOLPE MESA', '16GOLPEMESA.mp3', 'a');
createSoundButton('HOJA ROTA', '17HOJAROTA.mp3', 's');
createSoundButton('SUSPIRO DE ESTRES', '18SUSPIROESTRES.mp3', 'd');
createSoundButton('TIENDA', '19TIENDA.mp3', 'f');
createSoundButton('SUPERMERCADO', '19.1SUPERMERCADO.mp3', 'g');
createSoundButton('REGISTRADORA', '20REGISTRADORA.mp3', 'h');
createSoundButton('PAGO CORRECTO', '21TARJETA.mp3', 'j');
createSoundButton('PAGO DENEGADO', '22ERRORTARJETA.mp3', 'k');
createSoundButton('SALUDO', '22.1SALUDO.mp3', 'l');
createSoundButton('VIBRACION', '23VIBRACION.mp3', 'z');
createSoundButton('CONVERSACION CELULAR', '24CONVERSACION.mp3', 'x');
createSoundButton('LLAMADA', '24.1HABLARLLAMADA.mp3', 'c');
createSoundButton('TRISTE', '24.1SAD.mp3', 'v');
createSoundButton('PASOS', '25PASOS.mp3', 'b');
createSoundButton('TWITTER', '26TWITTER.mp3', 'n');
createSoundButton('NOTIFICACION', '27NOTIFICACION.mp3', 'm');
createSoundButton('RONQUIDO', '28RONQUIDO.mp3');
