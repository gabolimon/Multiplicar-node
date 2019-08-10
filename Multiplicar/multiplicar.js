// REQUIRE: EXISTEN 3 TIPOS DE REQUIRE
// const fs = require('fs'); : PAQUETES NATIVOS
// const fs = require('express'); : PAQUETES DE EXTERNOS
// const fs = require('./fs'); :PAQUETES CREADOS POR NOSOTROS

const fs = require('fs');
const colors = require('colors')

//CREAR ARCHIVO
let crearArchivo = (base, limite=10) => {
    return new Promise((resolve, reject) =>  {

        if (!Number(base)){
            reject(`El valor "${base}" introducido no es un número`)
            return;
        }

        //VARIABLE
        let data = '';
        let nombre_archivo = `Tabla-${base}`;
        let ubicacion = `Tablas/${nombre_archivo}.txt`;



        // TABLA DE MULTIPLICAR (2)
        for (let i=1; i<= limite; i++){
            resultado = base * i;
            data +=`${base} * ${i} = ${resultado} \n`;
        }

        fs.writeFile(ubicacion, data, (err) => {
            //ERROR PROMESA
            if (err)
                reject(err);
            //RESULTADO PROMESA
            else
                resolve(nombre_archivo)
        });
    })
};

//LISTAR ARCHIVOS
let listarTabla = (base, limite = 10) => {

    console.log('============================================='.green)
    console.log('==============TABLA DE MULTIPLICAR==========='.green)
    console.log('============================================='.green)
    for (let i=1; i<=limite; i++){
        resultado = base * i;
        console.log(`${base} * ${i} = ${resultado}`);
    }
};

//EXPORTAR
module.exports = {
    crearArchivo,
    listarTabla
};