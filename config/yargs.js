//CONSTANTES DE COMANDOS
const  opciones = {
    base:{
            demand:true,
            alias: 'b',
        },
        limite:{
            alias: 'l',
            default: 10,
        }
}
//CREACION DE COMANDOS
const  argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opciones )
    .command('crear', 'Generar un archivo',opciones)
    .help()
    .argv;

//EXPORTAR
module.exports={
    argv
}