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
createSoundButton('CAMBIO DE PARTES', '0CIERRE.mp3', '0');
createSoundButton('ALARMA', '1ALARMACLOCK.mp3', '1');
createSoundButton('MENSAJE CELULAR', '2ESCRIBIRMENSAJES.mp3','2');
createSoundButton('NOTIFICACION', '3MESSENGER.mp3', '3');
createSoundButton('TIKTOK 1', '4TIKTOK1.mp3', '4');
createSoundButton('TIKTOK 2', '5TIKTOK2.mp3', '5');
createSoundButton('TIKTOK 3', '6TIKTOK3.mp3','6');
createSoundButton('RISA', '7RISA.mp3', '7');
createSoundButton('RELOJ', '8RELOJAPURADO.mp3', '8');
createSoundButton('MASTICAR', '9MASTICARRAPIDO.mp3', '9');
createSoundButton('DOLOR', '10QUEJADOLOR.mp3', 'q');
createSoundButton('PUERTA', '11PUERTA.mp3', 'w');
createSoundButton('PASOS', '12PASOS.mp3', 'e');
createSoundButton('RELOJ', '13RELOJAPURADO.mp3', 'r');
createSoundButton('TECLADO', '14TECLADOAPURADO.mp3', 't');
createSoundButton('JEFE', '15JEFEENFADADO.mp3', 'y');
createSoundButton('GOLPE MESA', '16GOLPEMESA.mp3', 'u');
createSoundButton('HOJA ROTA', '17HOJAROTA.mp3', 'i');
createSoundButton('SUSPIRO DE ESTRES', '18SUSPIROESTRES.mp3', 'o');
createSoundButton('TIENSA', '19TIENDA.mp3', 'p');
createSoundButton('REGISTRADORA', '20REGISTRADORA.mp3', 'a');
createSoundButton('PAGO CORRECTO', '21TARJETA.mp3', 's');
createSoundButton('PAGO DENEGADO', '22ERRORTARJETA.mp3', 'd');
createSoundButton('VIBRACION', '23VIBRACION.mp3', 'f');
createSoundButton('CONVERSACION CELULAR', '24CONVERSACION.mp3', 'g');
createSoundButton('PASOS', '25PASOS.mp3', 'h');
createSoundButton('TWITTER', '26TWITTER.mp3', 'i');
createSoundButton('NOTIFICACION', '27NOTIFICACION.mp3', 'j');
createSoundButton('RONQUIDO', '28RONQUIDO.mp3', 'k');
