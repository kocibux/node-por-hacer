const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
};
const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('borrar', 'Borrar elemeneto de la tabla', {
        descripcion
    })
    .command('actualizar', 'Actualizar el estado completado de una tarea', {
        descripcion,
        completado,
    })
    .help()
    .argv;

module.exports = {
    argv
}