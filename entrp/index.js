document.querySelectorAll('.perfume-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('.info-popup').style.display = 'block';
    });
    card.addEventListener('mouseleave', () => {
        card.querySelector('.info-popup').style.display = 'none';
    });
});


  
