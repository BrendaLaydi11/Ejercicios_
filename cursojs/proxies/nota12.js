var empleado = {
nombre:'',
apellido:'',
password:'123456'
};

// empleado.nombre = 'alejandro';
function valida(prop, value){
    const keys = Object.keys(empleado);
    const propInvalida = keys.indexOf(prop)=== -1;

    if (propInvalida){
        console.error('Propiedad  invalidad ')
        return false;
        // limita las  propiedas que o quier que se evaluen 
    } 
    //cumple que si es de no tenga tipo numero entra a la condicion 
    if( (prop === 'apellido'|| prop ==='nombre') && /\d/.test(value)) {
        console.error(`El valor de la  propiedad es ${prop} es invalid`);
        return false 
    }

    return true;
}

var handler = {
    set(obj, prop, value){
        if (valida(prop, value)){
            obj[prop]= value;
        }
    },
    //La contraseña  no la muestra  y lo que meustra son *** y lo repite  en la posicion del arrglo
    get(obj,prop){
        if (prop === 'password'){
            return '*'.repeat(obj[prop].length)
        }
        if(prop === 'nombreCompleto'){
          return`${obj['nombre']} ${obj['apellido']} `;
        }
  return obj[prop];
    }
};
var pEmpleado = new Proxy (empleado, handler)
pEmpleado.nombre='Eduardo';
pEmpleado.apellido='Alducin';
pEmpleado.id= 12;
console.log(pEmpleado.password)
// esta  metiendo una propiedad que no corresponde al objeto original
console.log(empleado);
console.log(pEmpleado.nombreCompleto);