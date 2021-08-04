const fs = require('fs');
const colors = require('colors');


const crearArchivo =  async (base = 5, listar = false, hasta = 10) => {
    
    try{

        let salida = '';
        let consola = '';

        const titleFile = `./salida/tabla-${base}.txt`;



        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.red} ${i} ${'='.yellow} ${base * i}\n`;
        };

        if( listar == true ){

            console.log('=========================='.green);
            console.log('        Tabla del:'.magenta, colors.magenta(base)  );
            console.log('=========================='.green);

            console.log(consola);
        }

        // Create file
        fs.writeFileSync( titleFile, salida );
        
        return titleFile.cyan;
    } catch (err) {
        throw err;
    }
    
    
}

module.exports = crearArchivo;