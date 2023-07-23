const openBtn = document.querySelector('.open-nav');
const displayedList = document.querySelector('.ul-list');

// displayedList.style.display = 'none';
openBtn.addEventListener('click', function () {
    // displayedList.classList.toggle('active')
    // if (displayedList.style.display == 'none') {
    //     displayedList.style.display = 'flex';
    // } else {
    //     displayedList.style.display = 'none'; 
    // }
    displayedList.classList.toggle('active');
    
    
    
});