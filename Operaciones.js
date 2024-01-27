
const fs = require('fs');
const citasPath = './citas.json';

const registrar = (nombre, edad, tipo, color, enfermedad) => {
 
  let citas = [];
  try {
    const data = fs.readFileSync(citasPath, 'utf8');
    citas = JSON.parse(data);
  } catch (err) {

  }


  citas.push({
    registro: {
      nombre: nombre,
      edad: edad,
      tipo: tipo,
      color: color,
      enfermedad: enfermedad
    }
  });


  fs.writeFileSync(citasPath, JSON.stringify(citas), 'utf8');

  console.log('Cita registrada con éxito.');
};

const leer = () => {
  try {
    
    const data = fs.readFileSync(citasPath, 'utf8');
    const citas = JSON.parse(data);
    citas.forEach((cita, index) => {
      console.log(`Cita ${index + 1}:`);
      console.log(cita.registro);
      console.log('\n');
    });
  } catch (err) {
    console.error('Error al leer el archivo de citas:', err.message);
  }
};

module.exports = { registrar, leer };
