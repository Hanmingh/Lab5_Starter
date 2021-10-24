// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    var synth = window.speechSynthesis;
    const face = document.querySelector('img');
    var voiceSelect = document.querySelector('select');
    var voices = [];

    function populateVoiceList() {
      voices = synth.getVoices();
      for(var i = 0; i < voices.length ; i++) {
        var option = document.createElement('option');
        option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
        if(voices[i].default) {
          option.textContent += ' -- DEFAULT';
        }
        option.setAttribute('data-lang', voices[i].lang);
        option.setAttribute('data-name', voices[i].name);
        voiceSelect.appendChild(option);
      }
    }

    function Mouth(){
      var amISpeaking = synth.speaking;
      if(amISpeaking == true){
        face.src = 'assets/images/smiling-open.png';
      }
      else{
        face.src = 'assets/images/smiling.png';
      }
    }

    setInterval(Mouth, 100);

    populateVoiceList();
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = populateVoiceList;
    }

    const input = document.querySelector('textarea');
    const log = document.getElementById('text-to-speak');
    input.addEventListener('input', updateValue);
    function updateValue(e) {
      log.textContent = e.target.value;
    }
  
    const button = document.querySelector('button');
    button.addEventListener('click', event => {
      var utterThis = new SpeechSynthesisUtterance(log.textContent);
      var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
      for(var i = 0; i < voices.length ; i++) {
        if(voices[i].name === selectedOption) {
          utterThis.voice = voices[i];
        }
      }
      synth.speak(utterThis);
    });
}



