// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Welcome to Code2Craft!');

    // Load the navigation bar from the navigation.html file
    const navContainer = document.getElementById('nav-container');
    if (navContainer) {
        fetch('/html-assets/navigation.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to load navigation');
                }
                return response.text();
            })
            .then(data => {
                navContainer.innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading navigation:', error);
                navContainer.innerHTML = '<p>Error loading navigation bar.</p>';
            });
    }

    // Example: Add future JavaScript functionality here
    // This is where you can handle interactions such as click events,
    // fetching data, or animating elements.

    console.log('JavaScript is ready and running!');
});
