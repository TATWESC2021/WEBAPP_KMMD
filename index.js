const images = ['img1', 'img2', 'img3', 'img4'];
const imgElem = document.querySelector('img');

function randomValueFromArray(array) {
  const randomNo = Math.floor(Math.random() * array.length);
  return array[randomNo];
}

setInterval(() => {
  const randomChoice = randomValueFromArray(images);
  imgElem.src = `images/${randomChoice}.jpg`;
}, 2000);


if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/WEBAPP_KMMD/sw.js')
    .then(() => { console.log('Service Worker Registered'); });
}

let deferredPrompt;
const addBtn = document.querySelector('.add-button');
addBtn.style.display = 'none';

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  addBtn.style.display = 'block';

  addBtn.addEventListener('click', () => {
    addBtn.style.display = 'none';
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('Mensaje aceptado por el usuario');
      } else {
        console.log('Mensaje descartado por el usuario');
      }
      deferredPrompt = null;
    }
                                  );
  }
                         );
}
                       );
