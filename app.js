//IMPORTACIONES
const {argv} = require('./config/yargs');
const colors = require('colors')
const {crearArchivo, listarTabla} = require('./Multiplicar/multiplicar');

let comando  = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo ${archivo.green} ha sido creado`))
            .catch(err => console.log(err))
        break;
    default:
        console.log('Comando no reconocido')
}





