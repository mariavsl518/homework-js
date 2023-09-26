const form = document.querySelector('.login-form');


function handlerSubmit(e) {
    e.preventDefault();

    const { email, password } = e.currentTarget.elements;
    const data = {
        email: email.value,
        password: password.value,
    }

    if (password.value === "" || email.value === "") {
        alert('All fields must be filled')
    }
    console.log(data);

    e.currentTarget.reset(); 
}


form.addEventListener('submit', handlerSubmit)

