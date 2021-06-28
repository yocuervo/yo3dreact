const fs = require('fs');
const path = require('path');
const faker = require('faker');

function createModelos(limit = 5) {
  const result = [];

  for (let i = 0; i < limit; i++) {

    result.push({
      id: faker.random.uuid(),
      nombre,
      alto,
      ancho,
      largo,
      precio,
      creadorModelo,
      artistaModelo
    });
  }

  return result;
}

function main() {
  const data = {
    modelos: createModelos(),
  };

  fs.writeFileSync(
    path.resolve(__dirname, 'db.json'),
    JSON.stringify(data, null, 4)
  );
}

main();
