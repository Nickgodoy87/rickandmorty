

const validation = (inputs) => {
    /* Validacion Email*/ 
    const error = {}
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ;
    const regexPass = /^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/i
    const regexcar = /^(?=\w*\d)\S{6,10}$/;

    if(!regexEmail.test(inputs.email)){
          error.email = "Email vacio"
    }
    if(!inputs.email){
            error.email = "El email no puede estar vacio";
        }
    if(inputs.email.length > 35){
        error.email ="El email no puede tener mas de 35 caracteres"
    }

    /*Validacion de password*/ 
    if(!regexPass.test(inputs.password)){
        error.password="La contraseña debe tener algun numero"
    }
    
    
    if(!regexcar.test(inputs.password)){
        error.password="La contraseña debe ser entre 6 y 10 caracteres"
    }



















  return error

}

export default validation