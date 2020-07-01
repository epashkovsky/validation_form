function checkValid(){
    let form = document.getElementById('form');
    let email = document.getElementById('email').value;
    let text = document.getElementById('text');
    let template = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(email.match(template)) {
        form.classList.add('valid');
        form.classList.remove('invalid');
        text.innerHTML = 'Your Address in Valid';
        text.style.color = '#00ff00';
    } 
    else
    {
        form.classList.remove('valid');
        form.classList.add('invalid');
        text.innerHTML = 'Please Enter Valid Address';
        text.style.color = '#ff0000';
    }
    if(email == '') {
        form.classList.remove('valid');
        form.classList.remove('invalid');
        text.innerHTML = '';
        text.style.color = '#00ff00';
    }  

}