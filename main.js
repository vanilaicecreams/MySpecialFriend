onload = () =>{
        document.body.classList.remove("container");
};

document.addEventListener("DOMContentLoaded", function() {
        setTimeout(function() {
            var heartEnvelope = document.getElementById('heartEnvelope');
            heartEnvelope.classList.remove('hidden');
            heartEnvelope.classList.add('show');
    
            heartEnvelope.addEventListener('click', function() {
                // Simulate page flip animation
                heartEnvelope.classList.remove('show');
                heartEnvelope.classList.add('flipping');
                
                // After a short delay, redirect to envelope.html
                setTimeout(function() {
                    window.location.href = 'envelope.html';
                }, 500); // Adjust delay as needed for the animation
            });
        }, 5000); // Show after 5 seconds
    });
    

    