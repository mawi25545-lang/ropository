const passwordInput = document.getElementById('passInput');
const strengthInput = document.getElementById('strengthText');

const hasNumber = /\d/;
const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/

passwordInput.addEventListener('input', () =>{
  const val = passwordInput.value;
  
  const longEnough = val.length >= 8;
  const containsNumber = hasNumber.test(val);
  const containsSpecial = hasSpecial.test(val);
  
  if (val.length === 0) {
    strengthText.innerText = 'Waiting...';
    strengthText.style.color = 'black';
  } else if(longEnough && containsNumber && containsSpecial){
    strengthText.innerText = 'Weak';
    strengthText.style.color = 'red';
  } else if (val.length >= 8) {
    strengthText.innerText = 'Medium';
    strengthText.style.color = 'orange';  
  }else {
    strengthText.innerText = 'Strong';
    strengthText.style.color = 'green';
  }
})
