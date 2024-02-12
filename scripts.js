function generateNumber() {
    const min = parseInt(document.querySelector('.input-min').value);
    const max = parseInt(document.querySelector('.input-max').value);

    const result = Math.floor(Math.random() * (max - min + 1)) + min;


    console.log(result)

    document.querySelector('.caja').innerHTML = `<h1>${result}</h1>`;
    const resultContainer = document.querySelector('.result-container');
    resultContainer.textContent = `El número sorteado es: ${result}`;

    // Agregar clase para mostrar la animación
    resultContainer.classList.add('show');

    // Eliminar la clase después de un tiempo para reiniciar la animación
    setTimeout(() => {
        resultContainer.classList.remove('show');
    }, 1000); // Cambia 3000 por el tiempo que desees que dure la animación
}
