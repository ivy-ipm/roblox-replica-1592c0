document.addEventListener('DOMContentLoaded', () => {
    // Simple script for active navigation link highlighting (client-side)
    const sidebarItems = document.querySelectorAll('.sidebar-item');

    sidebarItems.forEach(item => {
        item.addEventListener('click', (event) => {
            // Prevent default link behavior for demo, if applicable
            // event.preventDefault(); 

            sidebarItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // You could add dynamic content loading here, e.g.:
    // const mainContent = document.querySelector('.main-content');
    // function loadContent(url) {
    //     fetch(url)
    //         .then(response => response.text())
    //         .then(html => mainContent.innerHTML = html)
    //         .catch(error => console.error('Error loading content:', error));
    // }

    // Example of a fake play button alert
    const playButton = document.querySelector('.play-button');
    if (playButton) {
        playButton.addEventListener('click', () => {
            alert('Launching Roblox experience... (This is a replica)');
        });
    }
});
