window.onload = function () {
    // Get reference to the container element
    var container = document.getElementById('container');

    // Array of HTML page paths
    var pagePaths = ['desktop-2.html', 'desktop-3.html', 'desktop-5.html', 'desktop-6.html', 'desktop-10.html', 'desktop-9.html'];

    // Loop through the array of page paths and load each page dynamically
    pagePaths.forEach(function (pagePath) {
        fetch(pagePath)
            .then(response => response.text())
            .then(html => {
                // Create a div element to hold the page content
                var pageDiv = document.createElement('div');
                pageDiv.innerHTML = html;

                // Append the page content to the container
                container.appendChild(pageDiv);
            })
            .catch(error => console.error('Error loading page:', error));
    });
};
