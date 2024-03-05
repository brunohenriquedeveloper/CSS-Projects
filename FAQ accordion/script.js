const plus = document.querySelectorAll('plus');
const minus = document.querySelectorAll('minus-hidden');
const para = document.querySelectorAll('para-hidden');


document.addEventListener('DOMContentLoaded', function() {
    const plus = document.querySelectorAll('.plus');
    const minus = document.querySelectorAll('.minus-hidden');
    const para = document.querySelectorAll('.para-hidden');

    for (let i = 0; i < plus.length; i++) {
        plus[i].addEventListener('click', function() {
            plus[i].classList.toggle("hidden");
            minus[i].classList.toggle("hidden");
            para[i].classList.toggle("hidden");
        });

        minus[i].addEventListener('click', function() {
            plus[i].classList.toggle("hidden");
            minus[i].classList.toggle("hidden");
            para[i].classList.toggle("hidden");
        });
    }
});
