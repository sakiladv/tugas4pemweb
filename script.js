// Function to show the correct page when a navigation link is clicked
function showPage(pageId) {
    // Get all the sections (pages)
    const pages = document.querySelectorAll('.page');
    
    // Loop through pages and hide them all
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Show the clicked page
    const activePage = document.getElementById(pageId);
    activePage.classList.add('active');
}


