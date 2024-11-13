function toggleImage() {
    const picture = document.getElementById('media-picture');
    const imageSrc = picture.querySelector('img').src;
    picture.querySelector('img').src = imageSrc.includes('image-small.jpg') ? 'image-large.jpg' : 'image-small.jpg';
}

function toggleAudio() {
    const audio = document.getElementById('media-audio');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
