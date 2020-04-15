'use strict';


/**
 * adds an user
 * Adds an user to the system
 *
 * body InventoryItem Inventory item to add (optional)
 * no response value expected for this operation
 **/
exports.addUser = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * searches User
 * By passing in the appropriate options, you can search for available users in the system 
 *
 * userId BigDecimal userId to search
 * returns List
 **/
exports.searchInventory = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "releaseDate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "Widget Adapter",
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "manufacturer" : {
    "phone" : "408-867-5309",
    "name" : "ACME Corporation",
    "homePage" : "https://www.acme-corp.com"
  }
}, {
  "releaseDate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "Widget Adapter",
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "manufacturer" : {
    "phone" : "408-867-5309",
    "name" : "ACME Corporation",
    "homePage" : "https://www.acme-corp.com"
  }
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

