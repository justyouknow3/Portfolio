const certificateCards = document.querySelectorAll('.certificate-card');

certificateCards.forEach(card => {

    card.addEventListener('click', () => {

        card.classList.toggle('active');

    });

});