const crearArchivo = require('./helpers/multiplicar');
const argv = require('./config/yargs');


console.clear();

crearArchivo( argv.b, argv.l, argv.h )
    .then( titleFile => console.log(titleFile, 'creado'))
    .catch( err => console.log(err))

