document.addEventListener("DOMContentLoaded", function() {
    const envelope = document.getElementById('envelope');
    const envelopeClosed = document.getElementById('envelopeClosed');
    const modal = document.getElementById('valentineModal');
    const closeBtn = document.getElementsByClassName('close')[0];

    envelope.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
