let hiddenGifAdded = false;

document.getElementById('partyButton').addEventListener('click', function() {
    const container = document.querySelector('.container');
    const body = document.body;

    if (!hiddenGifAdded) {
        const hiddenGif = document.querySelector('.hidden-gif');
        hiddenGif.style.width = '200px';
        hiddenGif.style.height = '200px';
        hiddenGif.style.opacity = '1';
        hiddenGifAdded = true;
        body.style.backgroundImage = 'url("https://c.tenor.com/-9lHctoXbJkAAAAC/tenor.gif")';
    } else {
        body.style.backgroundImage = 'none';
        hiddenGifAdded = false;
    }

    const bgColor = getRandomColor();
    body.style.backgroundColor = bgColor;
    document.getElementById('partyButton').style.backgroundColor = getRandomColor();
    triggerConfetti();
});

function getRandomColor() {
    return '#' + Math.random().toString(16).substr(2, 6);
}

function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}
