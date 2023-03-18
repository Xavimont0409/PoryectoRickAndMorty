const regexUser = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /\d/;
const regexPassword2 = /^[\s\S]{6,10}$/;

export function validate(userData) {
  let errors = {};
  if(!userData.username){
    errors.username = "El nombre de usuario no debe estar vacio";
  }else if(userData.username.length > 35){
    errors.username = "El nombre de usarui no puede tener mas de 35 caracteres";
  }else if(!regexUser.test(userData.username)){
    errors.username = "El usuario debe ser un email";
  }else if(!regexPassword.test(userData.password)){
    errors.password = 'Debe tener al menos un numero';
  }else if(!regexPassword2.test(userData.password)) errors.password = "La longitud del password debe ser entre 6 y 10 caracteres"

  return errors;
}
