// Iteration #1

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drones-dev', {useMongoClient: true});

const Dron = require('../models/drone');

// bin/seeds.js

const drone = [
 {
   droneName  : "Manu",
   propellers : 4,
   maxSpeed   : 100,
 },

 {
   droneName  : "Gema",
   propellers : 2,
   maxSpeed   : 120,
 },
];

Dron.collection.drop(); //Elimina la colección asociada al modelo. Para que cada vez que lo ejecute, no lo vuelva a crear.


Dron.create(drone, (err, docs) => {
  //le pasamos como primer parámetro un array de objetos
  if (err) {
    throw err;
  }

  docs.forEach((dron) => {
    console.log(dron.droneName)
  });

  //importante cerrar la conexión con mongoose
  mongoose.connection.close();
});
