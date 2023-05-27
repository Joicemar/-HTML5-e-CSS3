

const quantityInput = document.getElementById('quantia');
var quantia = quantityInput.innerHTML;

const menos = document.querySelector('.menos');
menos.addEventListener('click', function () {
    if(quantityInput.innerHTML > 0){
        quantia--;
        quantityInput.replaceChildren(quantia)
    }
});

const mais = document.querySelector('.mais');
mais.addEventListener('click', function () {
    quantia++;
    quantityInput.replaceChildren(quantia);
});
