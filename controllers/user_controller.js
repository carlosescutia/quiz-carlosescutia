var users = { 
  admon: {id:1, username:"admon", password:"hola"},
  juan: {id:1, username:"juan", password:"123"}
};

// Comprueba si el usuario esta registrado en users
// Si autenticacion falla o hay errores se ejecuta callback(error)
exports.autenticar = function(login, password, callback) {
  if ( users[login] ) {
    if ( password === users[login].password ) {
      callback(null, users[login]);
    } else {
      callback(new Error('Password incorrecto'));
    }
  } else {
    callback(new Error('Usuario desconocido'));
  }
};

