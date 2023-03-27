const navigationItems = document.querySelectorAll('.navigation-item');
const item = document.getElementById('.navitem');
const activeItem = document.querySelector('.active-item');

navigationItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove active class from all items
        navigationItems.forEach(item => {
            item.classList.remove('active');
        });
        const clickedChildItem = item.querySelector('#item');
        item.classList.add('active')
        // Add active class to clicked item
        item.classList.add('active');
        // Move active item to clicked item's position
        activeItem.style.top = `${item.offsetTop}px`;
    });
});
 