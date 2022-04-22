# haversineformula
a npm package to calculate distance between two and several coordinates

npm install haversineformula

you use the haversineformula with two different functions: 
twoCoordinates and array

the twoCoordinates function takes tree variables:
the first coordinates, the second coordinates, and the type of measurement you want.

coordinates are in this form: {longitude: 23.13123, latitude: 80,123}

the types are these: 'mile', 'km', 'meter', 'foot', 'yard'

the array function works the with the same principle, but there is only
an array of coordinates and the type. 

example of the functions: 

const haversineformula = require('haversineformula')

const array = [
   {

      latitude: 60.15476,
      longitude: 24.9464283,

    },
    {

      latitude: 60.1547396,
      longitude: 24.9465404,

    },
     {

      latitude: 60.1547365,
      longitude: 24.9465579,

    },
   {
      latitude: 59.8702617,
      longitude: 30.3746517,
    },
  ]

  console.log(haversineformula.array(array, 'meter'))

  console.log(haversineformula.twoCoordinates(array[0], array[1], 'meter'))