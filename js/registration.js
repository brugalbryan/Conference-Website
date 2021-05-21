var typeofUser = "";
var promotionalCode = "Lehman College";
var totalAmount = 0;
var userType = document.getElementsByName("newuserType");

function formValidation() {
    let fullName = document.getElementById("fullName");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let passwordConfirm = document.getElementById("passwordConfirm");

    let organization = document.getElementById("organization");
    let country = document.getElementById("country");
    let phone = document.getElementById("phone");

    let discountValidation = document.getElementById("promotionalCode").value;

    let blockError = document.getElementById('formErrors');
    let errors = {
        fullName: '',
        email: '',
        password: '',
        // passwordConfirm: '',
        organization: '',
        country: '',
        phone:'',
    }

    if(fullName.value.length < 1){
        errors.fullName = 'Missing your full name';
        fullName.classList.add('input_invalid');
    }else{
        fullName.classList.remove('input_invalid');
    }
 
    if(!(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/.test(email.value))){
        errors.email = 'Invalid or missing email address'
        email.classList.add('input_invalid');
    }else{
        email.classList.remove('input_invalid');
    }
    
 
    if(password.value.length < 10 || password.value.length > 20){
        errors.password = 'Password must be between 10 and 20 characters'
        password.classList.add('input_invalid');
    }else if(!(/^(?=.*\d)/.test(password.value))){
        errors.password = 'Password must contain at least one lowercase character'
        password.classList.add('input_invalid');
    }else if(!(/^(?=.*[A-Z])/.test(password.value))){
        errors.password = 'Password must contain at least one uppercase character'
        password.classList.add('input_invalid');
    }else if(!(/^(?=.*[0-9])/.test(password.value))){
        errors.password = 'Password must contain at least one digit'
        password.classList.add('input_invalid');
    }else{
        password.classList.remove('input_invalid');
    }
 
    if(passwordConfirm.value.length < 10 || passwordConfirm.value.length > 20){
        errors.password = 'Password must be between 10 and 20 characters'
        passwordConfirm.classList.add('input_invalid');
    }else{
        passwordConfirm.classList.remove('input_invalid');
    }
 
    if(password.value !== passwordConfirm.value){
        errors.password = 'Password and confirmation password don\'t match.'
        password.classList.add('input_invalid');
    }

    if(organization.value.length < 1){
        errors.organization = 'Missing organization name';
        organization.classList.add('input_invalid');
    }else{
        organization.classList.remove('input_invalid');
    }
 
    if(country.value.length <= 0){
        errors.country = 'Missing Country name';
        country.classList.add('input_invalid');
    }else{
        country.classList.remove('input_invalid');
    }

    if(phone.value.length <= 0 || !/^[0-9]{3}-[0-9]{3}-[0-9]{4}/.test(phone.value)){
        errors.phone = 'Please provide a correct phone number';
        phone.classList.add('input_invalid');
    }else{
        phone.classList.remove('input_invalid');
    }
    
  
    radioButtonValidation();

    if(discountValidation == promotionalCode){
        switch(typeofUser){
            case "Author":
                totalAmount = 400 - (400 * 1/2);
                break;
            case "Participant":
                totalAmount = 300 - (300 * 1/2);
                break;
            case "Student":
                totalAmount = 100 - (100 * 1/2);
                break;
        }

        document.getElementById("amount").innerHTML = "Total Price: $" + totalAmount;
    }
    
    else{
        switch(typeofUser){
            case "Author":
                totalAmount = 400;
                break;
            case "Participant":
                totalAmount = 300;
                break;
            case "Student":
                totalAmount = 100;
                break;
        }
        
        document.getElementById("amount").innerHTML = "Total Price: $" + totalAmount;

    }

    let display_errors = [];
    if(errors['fullName'] || errors['email'] || errors['password'] || errors['organization'] || errors['country'] || errors['phone']){
        if(errors['fullName']){
            display_errors.push(errors['fullName'])
        }
        if(errors['email']){
            display_errors.push(errors['email'])
        }
        if(errors['password']){
            display_errors.push(errors['password'])
        }
        if(errors['organization']){
            display_errors.push(errors['organization'])
        }
        if(errors['country']){
            display_errors.push(errors['country'])
        }
        if(errors['phone']){
            display_errors.push(errors['phone'])
        }
        let displayErrors = `
            <ul>
                ${display_errors.map((error) => (
                    `<li>${error}</li>`
                ))}
            </ul>
        `
        console.log(blockError)
        blockError.innerHTML = displayErrors;
        blockError.classList.add('display_error');
        // document.getElementById('formErrors').innerHTML = displayErrors;

    }else{
        password.classList.remove('input_invalid');
        blockError.classList.remove('display_error');
    }
 }

 document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    // console.log(event)
    formValidation();
 });


function radioButtonValidation(){
    for(i = 0; i < userType.length; i++){
        if(userType[i].checked){
            typeofUser = userType[i].value; 
        }
    }
}

function radioHandler(radioRegister){
    let baseAmount;
    let typeOfUser = radioRegister.value;
 
    switch(typeOfUser){
        case "Author":
            baseAmount = 400;
            break;
        case "Participant":
            baseAmount = 300;
            break;
        case "Student":
            baseAmount = 100;
            break;
    }
    document.getElementById("amount").innerHTML = "Total Price: $" + baseAmount;
}