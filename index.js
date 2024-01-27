const operaciones = require('./Operaciones');

const comando = process.argv[2];

switch (comando) {
  case 'registrar':
    operaciones.registrar(
      process.argv[3], 
      process.argv[4], 
      process.argv[5], 
      process.argv[6], 
      process.argv[7]  
    );
    break;
  case 'leer':
    operaciones.leer();
    break;
  default:
    console.log('Comando no reconocido. Use "registrar" o "leer".');
}
