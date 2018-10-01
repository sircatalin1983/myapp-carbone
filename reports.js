const fs = require('fs');
  const carbone = require('carbone');

  // Data to inject
  var contractData = {
    "id" : "1",
    "today" : "23 Septembrie 2018",

    owner : {
      "isprivate" : 1,
      "firstname" : "Catalin",
      "middlename" : "Constantin",
      "lastname" : "Moldovan",
      address : {
        "city" : "Brasov",
        "county" : "Brasov",
        "street" : "Calea Bucuresti",
        "number" : "20",
        "building" : "C9",
        "stair" : "F",
        "floor" : "1",
        "apartament" : "2"
      },
      id : {
        "type" : "CI",
        "serie" : "BV",
        "number" : "803040",
        "nationalid" : "1830517080051",
        "releasedby" : "Politia Brasov"
      }
    },

    renters : [
      {
        "isprivate" : 1,
        "firstname" : "Catalin",
        "middlename" : "Constantin",
        "lastname" : "Moldovan",
        address : {
          "city" : "Brasov",
          "county" : "Brasov",
          "street" : "Calea Bucuresti",
          "number" : "20",
          "building" : "C9",
          "stair" : "F",
          "floor" : "1",
          "apartament" : "2"
        },
        id : {
          "type" : "CI",
          "serie" : "BV",
          "number" : "803040",
          "nationalid" : "1830517080051",
          "releasedby" : "Politia Brasov"
        }
      },

      {
        "isprivate" : 1,
        "firstname" : "Catalin",
        "middlename" : "Constantin",
        "lastname" : "Moldovan",
        address : {
          "city" : "Brasov",
          "county" : "Brasov",
          "street" : "Calea Bucuresti",
          "number" : "20",
          "building" : "C9",
          "stair" : "F",
          "floor" : "1",
          "apartament" : "2"
        },
        id : {
          "type" : "CI",
          "serie" : "BV",
          "number" : "803040",
          "nationalid" : "1830517080051",
          "releasedby" : "Politia Brasov"
        }
      }
    ],

    rentplace : {
      address : {
        "city" : "Brasov",
        "county" : "Brasov",
        "street" : "Calea Bucuresti",
        "number" : "20",
        "building" : "C9",
        "stair" : "F",
        "floor" : "1",
        "apartament" : "2"
      },
      "rooms" : "2", 
      "squaremeters" : "52", 
      "state" : "complete mobilat"
    },

    contract : {
      "startdate" : "1/1/1990",
      "enddate" : "31/12/1990",
      "duration" : "12",
      "paymentdate" : "1",
      "paymenttype" : "numerar", //sau prin transfer
      "paymentlocation" : "adresa", //sau IBAN
      "rent" : "300",
      "rentletters" : "treisute",
      "rentcurrency" : "EUR",
      "upfront" : "300",
      "upfrontletters" : "treisute",
      "upfrontcurrency" : "EUR",
      "upfrontdetails" : "1",
      "warranty" : "300", 
      "warrantyletters" : "treisute",
      "warrantycurrency" : "EUR"
    },

    "specialclauses" : "ddd"
  };


  // Data to inject
  var inventoryData = {
    "id" : "1",
    "today" : "23 Septembrie 2018",
    "specialclauses" : "dddddddddddddddddddddddddddddddddddddd dsasa dsadsadsa dsadsa dsadsa dasdsa dsadsa dsad as dsa dsa dsa dsa dsad sadsa ds dsad sada dsad sa dsa dsa dsad sa dsa dsa dsa dsad sa dsa dsad asd sa",
    rentplace : {
      address : {
        "city" : "Brasov",
        "county" : "Brasov",
        "street" : "Calea Bucuresti",
        "number" : "20",
        "building" : "C9",
        "stair" : "F",
        "floor" : "1",
        "apartament" : "2"
      }
    },

    inventory : [
      {
        "name" : "cada",
        "state" : "buna"
      },
      {
        "name" : "cada",
        "state" : "buna"
      },
      {
        "name" : "cada",
        "state" : "buna"
      },
      {
        "name" : "cada",
        "state" : "buna"
      },
      {
        "name" : "cada",
        "state" : "buna"
      },
      {
        "name" : "cada",
        "state" : "buna"
      },
      {
        "name" : "lavoar",
        "state" : "buna"
      },
      {
        "name" : "dulap",
        "state" : "buna"
      },
      {
        "name" : "cada",
        "state" : "buna"
      },
      {
        "name" : "cada",
        "state" : "buna"
      },
      {
        "name" : "cada",
        "state" : "buna"
      },
      {
        "name" : "cada",
        "state" : "buna"
      },
      {
        "name" : "cada",
        "state" : "buna"
      },
      {
        "name" : "cada",
        "state" : "buna"
      },
      {
        "name" : "lavoar",
        "state" : "buna"
      },
      {
        "name" : "dulap",
        "state" : "buna"
      },
      {
        "name" : "cada",
        "state" : "buna"
      },
      {
        "name" : "cada",
        "state" : "buna"
      },
      {
        "name" : "cada",
        "state" : "buna"
      },
      {
        "name" : "cada",
        "state" : "buna"
      },
      {
        "name" : "cada",
        "state" : "buna"
      },
      {
        "name" : "cada",
        "state" : "buna"
      },
      {
        "name" : "lavoar",
        "state" : "buna"
      },
      {
        "name" : "dulap",
        "state" : "buna"
      },
      {
        "name" : "cada",
        "state" : "buna"
      },
      {
        "name" : "cada",
        "state" : "buna"
      },
      {
        "name" : "cada",
        "state" : "buna"
      },
      {
        "name" : "cada",
        "state" : "buna"
      },
      {
        "name" : "cada",
        "state" : "buna"
      },
      {
        "name" : "cada",
        "state" : "buna"
      },
      {
        "name" : "lavoar",
        "state" : "buna"
      },
      {
        "name" : "dulap",
        "state" : "buna"
      },
      {
        "name" : "cada",
        "state" : "buna"
      },
      {
        "name" : "cada",
        "state" : "buna"
      },
      {
        "name" : "cada",
        "state" : "buna"
      },
      {
        "name" : "cada",
        "state" : "buna"
      },
      {
        "name" : "cada",
        "state" : "buna"
      },
      {
        "name" : "cada",
        "state" : "buna"
      },
      {
        "name" : "lavoar",
        "state" : "buna"
      },
      {
        "name" : "dulap",
        "state" : "buna"
      },
      {
        "name" : "cada",
        "state" : "buna"
      },
      {
        "name" : "cada",
        "state" : "buna"
      },
      {
        "name" : "cada",
        "state" : "buna"
      },
      {
        "name" : "cada",
        "state" : "buna"
      },
      {
        "name" : "cada",
        "state" : "buna"
      },
      {
        "name" : "cada",
        "state" : "buna"
      },
      {
        "name" : "lavoar",
        "state" : "buna"
      },
      {
        "name" : "dulap",
        "state" : "buna"
      },
      {
        "name" : "oglinda",
        "state" : "buna"
      }
    ]
  };

  // Generate a report using the sample template provided by carbone module
  // This LibreOffice template contains "Hello {d.firstname} {d.lastname} !"
  // Of course, you can create your own templates!
  /*
  carbone.render('./Templates/Template_Rental_Contract.odt', contractData, function(err, result){
    if (err) {
      return console.log(err);
    }
    // write the result
    fs.writeFileSync('result.odt', result);
  });
*/

var options = {
  convertTo : 'pdf' //can be docx, txt, ...
};
///*
carbone.render('./Templates/Template_Inventory.odt', inventoryData, options, function(err, result){
    if (err) return console.log(err); 
    fs.writeFileSync('result.pdf', result);
    process.exit(); // to kill automatically LibreOffice workers
});
//*/

/*
carbone.render('./Templates/Template_Inventory.odt', inventoryData, function(err, result){
  if (err) {
    return console.log(err);
  }
  // write the result
  fs.writeFileSync('result.odt', result);
});
//*/