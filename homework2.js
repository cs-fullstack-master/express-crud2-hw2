var hw2Collection =
    [
  {
    "_id": "5c9a871b53dc0490d2d23257",
    "address": "421 Dewey Place, Woodlake, Massachusetts, 5385",
    "latitude": 55.092946,
    "longitude": -139.009766,
    "friends": [
      {
        "id": 0,
        "name": "Adele Ramirez"
      },
      {
        "id": 1,
        "name": "Nadine Padilla"
      },
      {
        "id": 2,
        "name": "Gonzales Dominguez"
      }
    ]
  },
  {
    "_id": "5c9a871b34bfc14f2f293440",
    "address": "169 Croton Loop, Westmoreland, Federated States Of Micronesia, 8249",
    "latitude": 71.275743,
    "longitude": -171.404559,
    "friends": [
      {
        "id": 0,
        "name": "Keller Schroeder"
      },
      {
        "id": 1,
        "name": "Hardin Richard"
      },
      {
        "id": 2,
        "name": "Harper Garrison"
      }
    ]
  },
  {
    "_id": "5c9a871b28cf5b61e4da697c",
    "address": "162 Wakeman Place, Hobucken, Mississippi, 1273",
    "latitude": 11.399441,
    "longitude": 172.866374,
    "friends": [
      {
        "id": 0,
        "name": "Pam Bird"
      },
      {
        "id": 1,
        "name": "Benson Winters"
      },
      {
        "id": 2,
        "name": "Cara Black"
      }
    ]
  },
  {
    "_id": "5c9a871b1aab0322500c07ce",
    "address": "584 Dodworth Street, Indio, North Dakota, 4362",
    "latitude": 60.374831,
    "longitude": 168.925414,
    "friends": [
      {
        "id": 0,
        "name": "Elvira Avery"
      },
      {
        "id": 1,
        "name": "Fitzgerald Oneal"
      },
      {
        "id": 2,
        "name": "Kennedy Lowery"
      }
    ]
  },
  {
    "_id": "5c9a871b097dcc86d4d3f18b",
    "address": "852 Garden Place, Coultervillle, Nebraska, 9456",
    "latitude": -38.489469,
    "longitude": -157.862906,
    "friends": [
      {
        "id": 0,
        "name": "Victoria Thornton"
      },
      {
        "id": 1,
        "name": "Minerva Ayers"
      },
      {
        "id": 2,
        "name": "Puckett Pugh"
      }
    ]
  },
  {
    "_id": "5c9a871bd6aee585ed65657a",
    "address": "646 Dorset Street, Gardners, New Hampshire, 6790",
    "latitude": -76.869151,
    "longitude": -6.375652,
    "friends": [
      {
        "id": 0,
        "name": "Briana Ewing"
      },
      {
        "id": 1,
        "name": "Frank Guy"
      },
      {
        "id": 2,
        "name": "Malinda Ryan"
      }
    ]
  },
  {
    "_id": "5c9a871b0e8eacb92bc16e57",
    "address": "267 Ivan Court, Ripley, Connecticut, 6556",
    "latitude": 26.133711,
    "longitude": 139.065547,
    "friends": [
      {
        "id": 0,
        "name": "Hardy Herman"
      },
      {
        "id": 1,
        "name": "Rowe Parsons"
      },
      {
        "id": 2,
        "name": "Berry Gilliam"
      }
    ]
  }
];

var express = require('express');
var router = express.Router();
var HW2Data = require('../models/crimesModel');


router.get('/', (req, res)=> {


    HW2Data.create(hw2Collection, (error, results)=>{
        if(error){
            res.send(error);
        }
        else{
            res.send(results);
        }
    });

});

module.exports = router;
