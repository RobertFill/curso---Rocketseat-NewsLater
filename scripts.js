const buttom = document.querySelector('.btn');
const input = document.getElementById('email');
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

buttom.addEventListener('click', click);



function seterror(){
    document.getElementById('error').style.display ="block";
    input.style.border ="2px solid red";
}

function removeError(){
    document.getElementById('error').style.display ='';
    input.style.border ='';
    input.value = '';
    
}


function click(){
    if(!emailRegex.test(input.value)){
        seterror()
    }else{
        alert('Feito!!')
        removeError()
    }
}