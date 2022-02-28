let userName = document.getElementById('userName');
let phoneNumber = document.getElementById('phoneNumber');
let userEmail = document.getElementById('userEmail');
let issueDescription = document.getElementById('issueDescription');
let greenButton = document.getElementById('greenButton');
let redButton = document.getElementById('redButon');
let mainField = document.querySelector('.mainField');
let body = document.querySelector('body');
let greyArea = document.createElement('div');
let successInfoDiv = document.createElement('div');

body.appendChild(greyArea);
body.appendChild(successInfoDiv);
greyArea.classList.add('greyArea'); 
successInfoDiv.classList.add('successInfoDiv');
successInfoDiv.innerHTML = 'Заявка отправлена';

let toLocalStorageData = []; 
if (JSON.parse(localStorage.getItem("toLocalStorageData"))!==null) {
toLocalStorageData = JSON.parse(localStorage.getItem("toLocalStorageData"));
}    


function removeSuccessField (successInfoDiv) {
    
    greyArea.style.visibility = 'hidden';
    successInfoDiv.style.visibility = 'hidden';
    document.location.reload();
    /* userName.value = '';
    phoneNumber.value = '';
    userEmail.value = '';
    issueDescription.value = '';
    userName.classList.remove('greenClass');
    phoneNumber.classList.remove('greenClass');
    userEmail.classList.remove('greenClass'); */
    
}

let successReport = () => {
    
    
    greyArea.style.visibility = 'visible';
    successInfoDiv.style.visibility = 'visible';
    
    
    greyArea.addEventListener('click', ()=>{
        removeSuccessField(successInfoDiv);
    })

}


let userNameTrigger = false;
let phoneNumberTrigger = false;
let emailTrigger = false; 
userName.addEventListener('input',function(){
    
        if (userName.value.toString().length>0){
            console.log(userName.value);
            userNameTrigger = true;
            userName.classList.remove('redClass');
            userName.classList.add('greenClass'); 
        }  else {
            userNameTrigger = false
            userName.classList.remove('greenClass');
            userName.classList.add('redClass'); 
        }
    
})

phoneNumber.addEventListener('input', function (){
    let validSymbols = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    if ( validSymbols.test(phoneNumber.value) ) {
        console.log(phoneNumber.value);
        phoneNumberTrigger = true;
        phoneNumber.classList.remove('redClass');
        phoneNumber.classList.add('greenClass'); 
    } else {
        console.log(phoneNumber.value);
        phoneNumberTrigger = false;
        phoneNumber.classList.remove('greenClass');
        phoneNumber.classList.add('redClass');
    }
})

userEmail.addEventListener('change', function (){
    let newArr = userEmail.value.split('@');
    let newArrAfterSplt = newArr[1].split('.');

    if(newArr[0].length>0 && newArrAfterSplt[0].length>0 && newArrAfterSplt[1].length>0) {
        console.log(newArr);
        emailTrigger = true;
        userEmail.classList.remove('redClass');
        userEmail.classList.add('greenClass');
    } else {
        emailTrigger = false;
        userEmail.classList.remove('greenClass');
        userEmail.classList.add('redClass');

    }
})   
    




greenButton.addEventListener('click', ()=>{

    if(userNameTrigger===true && phoneNumberTrigger===true && emailTrigger===true) {
        
    let report = [userName.value, phoneNumber.value, userEmail.value, issueDescription.value];
    toLocalStorageData.push(report);
    successReport();
    localStorage.setItem("toLocalStorageData", JSON.stringify(toLocalStorageData));

    
    } else {
        alert('поля введены некорректно, попробуйте еще раз')
    }
});