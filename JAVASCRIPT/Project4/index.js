const button = document.querySelectorAll(`button`);
const body = document.body;

button.forEach((button) => {
    button.addEventListener(`click`, function () {
        body.style.backgroundColor = button.id;
       
    })
})  