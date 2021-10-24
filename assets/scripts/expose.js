// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const allImg = document.querySelectorAll('img');
  var vChoose = document.getElementById('volume');
  var sound = document.querySelector("audio");

  vChoose.addEventListener('change', (event) => {
    const v = Number(event.target.value);
    var vImg = allImg[1];
    if(v === 0){
      vImg.src = 'assets/icons/volume-level-0.svg';
    }
    else if(v < 33){
      vImg.src = 'assets/icons/volume-level-1.svg';
    }
    else if(v < 67){
      vImg.src = 'assets/icons/volume-level-2.svg';
    }
    else{
      vImg.src = 'assets/icons/volume-level-3.svg';
    }
    sound.volume = v/100;
  });

  const selectHornElement = document.getElementById('horn-select');
  selectHornElement.addEventListener('change', (event) => {
    var image = document.querySelector('img');
    if(`${event.target.value}` == 'air-horn'){
      image.setAttribute('src', 'assets/images/air-horn.svg');
    }else if(`${event.target.value}` == 'car-horn'){
      image.setAttribute('src', 'assets/images/car-horn.svg');
    }else{
      image.setAttribute('src', 'assets/images/party-horn.svg');
    }
  });
}

