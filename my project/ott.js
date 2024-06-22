document.addEventListener('DOMContentLoaded', function() {
    const detailButtons = document.querySelectorAll('.details-btn');
    const modal = document.getElementById('movie-modal');
    const closeModalButton = document.querySelector('.close-btn');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');

    const movieData = {
        1: {
            title: 'Movie Title 1',
            description: 'Description for Movie 1 goes here.'
        },
        2: {
            title: 'Movie Title 2',
            description: 'Description for Movie 2 goes here.'
        }
     
    };

    detailButtons.forEach(button => {
        button.addEventListener('click', function() {
            const movieId = this.parentElement.getAttribute('data-movie-id');
            const movie = movieData[movieId];

            modalTitle.textContent = movie.title;
            modalDescription.textContent = movie.description;
            modal.style.display = 'block';
        });
    });

    closeModalButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
