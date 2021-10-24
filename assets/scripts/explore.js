// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    var synth = window.speechSynthesis;

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
    
    populateVoiceList();
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = populateVoiceList;
    }
}



