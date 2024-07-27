document.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.loader');
    const downloadingText = document.querySelector('.downloading-text');
    const completedText = document.querySelector('.completed-text');
    const checkmarkContainer = document.querySelector('.checkmark-container');

    downloadingText.classList.add('show');

    loader.addEventListener('animationend', (e) => {
        if (e.animationName === 'progress') {
            downloadingText.classList.remove('show');
            completedText.classList.add('show');
            checkmarkContainer.style.display = 'flex';
        }
    });
});