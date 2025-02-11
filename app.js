const languageSelect = document.querySelector('.Languages-btns');

languageSelect.addEventListener('change', () => {
    if (languageSelect.value === 'pt') {
        window.location.href = 'pt.html'; // Redirect to Portuguese page
    } else if (languageSelect.value === 'en') {
        window.location.href = 'index.html'; // Redirect to English page (if needed)
    }
});
