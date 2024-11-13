let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

let currentAudio;

next.addEventListener('click', function(){
    pauseCurrentAudio();
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    pauseCurrentAudio();
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])
})

const playAudioButtons = document.querySelectorAll('.play-audio');

playAudioButtons.forEach(button => {
  button.addEventListener('click', () => {
    pauseCurrentAudio();
    const audioSrc = button.getAttribute('data-audio-src');
    const audioElement = document.querySelector(`audio[src="${audioSrc}"]`);
    currentAudio = audioElement;
    audioElement.play();
  });
});


function pauseCurrentAudio() {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0; 
    }
}


const seeMoreButtons = document.querySelectorAll('.see-more');



