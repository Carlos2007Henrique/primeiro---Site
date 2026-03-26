// Updated innerHTML manipulation for improved security and performance

function updateContent() {
    const contentElement = document.getElementById('content');
    // Using textContent to prevent XSS vulnerabilities
    contentElement.textContent = 'New content loaded securely.';
}

// Call the updateContent function on page load
document.addEventListener('DOMContentLoaded', updateContent);