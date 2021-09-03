const fs = require('fs');
const path = require('path');
const faker = require('faker');

function createModels(limit = 5) {
  const result = [];

  for (let i = 0; i < limit; i++) {

    result.push({
      id: faker.random.uuid(),
      img,
      nombre,
      alto,
      ancho,
      largo,
      precio,
      creadorModelo,
      artistaModelo

      // Todos me los marca como "any" pero en la prueba de platzi salen como "strings"
    });
  }

  return result;
}

function main() {
  const data = {
    modelos: createModels(),
  };

  fs.writeFileSync(
    path.resolve(__dirname, 'db.json'),
    JSON.stringify(data, null, 4)
  );
}

main();
