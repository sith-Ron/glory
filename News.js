document.querySelectorAll('.cr a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default link behavior
        const destination = this.getAttribute('href');
        window.location.href = destination; // Redirect to the specified destination
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    const allArticles = document.querySelectorAll('.col-md-4');
    const form = document.querySelector('form');

    const performSearch = function () {
        const searchTerm = searchInput.value.toLowerCase().trim();
        if (searchTerm) {
            allArticles.forEach(article => {
                const articleText = article.textContent.toLowerCase();
                const articleDate = article.querySelector('.s3').textContent.toLowerCase();
                if (articleText.includes(searchTerm) || articleDate.includes(searchTerm)) {
                    article.style.display = 'block';
                } else {
                    article.style.display = 'none';
                }
            });
        } else {
            allArticles.forEach(article => {
                article.style.display = 'block';
            });
        }
    };

    searchButton.addEventListener('click', performSearch);

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        performSearch();
    });

    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            performSearch();
        }
    });
});