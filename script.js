let passwordStrength = document.querySelector('.strength');
let password = document.querySelector('#password');
let passwordConfirmed = document.querySelector('#conf-password');
let confirmMessage = document.querySelector('.error')

password.addEventListener('input', () => {
  if (password.value.match(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)) {
    passwordStrength.textContent = "Strong";
    passwordStrength.setAttribute('style', 'color: green');
  } else if (password.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/)) {
    passwordStrength.textContent = "Medium";
    passwordStrength.setAttribute('style', 'color: orange');
  } else {
    passwordStrength.textContent = "Weak";
    passwordStrength.setAttribute('style', 'color: rgba(255, 0, 0, 0.7)')
  }
})

passwordConfirmed.addEventListener('input', () => {
  if (password.value !== passwordConfirmed.value) {
    confirmMessage.textContent = "Passwords do not match.";
    confirmMessage.setAttribute('style', 'color: rgba(255, 0, 0, 0.7)');
  } else {
    confirmMessage.textContent = "Passwords match.";
    confirmMessage.setAttribute('style', 'color: green');
  }
})

