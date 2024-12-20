const buttons = document.querySelectorAll('.discover__button');
const cards = document.querySelectorAll('.discover__cards');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach((button) => {
            button.classList.remove('active');
        });
        button.classList.add('active');
    });

});