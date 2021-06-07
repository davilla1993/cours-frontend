const toggleButton = document.getElementById('toggle-button');
const sidebar = document.getElementById('side-bar');

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('active'); 
});


// REMOVE SIDEBAR IF CLICK ON THE MAIN CONTENT

const content = document.querySelector('.content');

content.addEventListener('click', () => {
    sidebar.classList.remove('active');
})