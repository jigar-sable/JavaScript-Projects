const closeface = document.querySelector('.closed');
const openface = document.querySelector('.open');

//event listener
closeface.addEventListener('click', () => {
    if(openface.classList.contains('open')){
        openface.classList.add('active');
        closeface.classList.remove('active');
    }
});

openface.addEventListener('click', () => {
    if(closeface.classList.contains('closed')){
        closeface.classList.add('active');
        openface.classList.remove('active');
    }
});