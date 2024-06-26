document.getElementById('flipToBack').addEventListener('click', function() {
    document.querySelector('.card').classList.add('card-flipped');
});

document.getElementById('flipToFront').addEventListener('click', function() {
    document.querySelector('.card').classList.remove('card-flipped');
});
