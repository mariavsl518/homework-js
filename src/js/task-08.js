const form = document.querySelector('.login-form');


function handlerSubmit(e) { 
    e.preventDefault();
    const { email, password } = e.currentTarget.elements;
    
}

console.dir(form);

form.addEventListener('submit', handlerSubmit)

