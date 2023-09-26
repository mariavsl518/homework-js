const form = document.querySelector('.login-form');


function handlerSubmit(e) {
    e.preventDefault();

    const { email, password } = e.currentTarget.elements;
    
    const data = {
        email: email.value,
        password: password.value,
    }
    e.currentTarget.reset(); 

    if ( e.currentTarget.value === "") {
         alert('All fields must be filled') 
    } else { console.log(data)}

    
    // console.log(e.currentTarget.elements);
}


form.addEventListener('submit', handlerSubmit)

