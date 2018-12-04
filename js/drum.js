'use strict';

let drums = document.getElementsByClassName('drum-kit__drum');

function bang() {
  let currentSound = this.querySelector('audio');
  currentSound.play();
}

for (item of drums) {
 item.addEventListener('click', bang);
}