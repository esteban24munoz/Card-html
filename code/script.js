document.getElementById('showInfo').addEventListener('click', function() {
    document.querySelector('.card').classList.add('show-info');
});

document.getElementById('hideInfo').addEventListener('click', function() {
    document.querySelector('.card').classList.remove('show-info');
});
