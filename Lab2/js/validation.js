const inputEmail = document.getElementById("inputEmail");
const inputpassword = document.getElementById("inputpassword");
const errorExpression = document.getElementById("error");

let count;

document.getElementById("confirm").addEventListener('click',
    function(){
    let regularForEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/; 
        errorExpression.textContent = '';
        count = 0;
        if (regularForEmail.test(inputEmail.value) != true) {
            errorExpression.textContent += "invalid email";
            count++;
        }
        if (inputpassword.value.length < 3) {
            if (count > 0) {
                errorExpression.textContent += " and "
                count = 0;
            }
            errorExpression.textContent += "invalid password (no secure)";
            count++;
        }
        if (count == 0) {
            window.location.href= 'userprofile.html';
        }
    })