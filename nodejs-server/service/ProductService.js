'use strict';


/**
 * adds a product
 * Adds a product to the system
 *
 * body Product Inventory item to add (optional)
 * no response value expected for this operation
 **/
exports.addProduct = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * delete a product
 * Delete a product in the system
 *
 * productId BigDecimal productId to delete
 * no response value expected for this operation
 **/
exports.deleteProduct = function(productId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * searches product by id
 * By passing in the appropriate options, you can search for available products in the system 
 *
 * productId BigDecimal productId to search
 * returns Product
 **/
exports.searchProduct = function(productId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "productId" : 10001,
  "productAttributeSet" : [ {
    "attributeId" : 18701,
    "attributeValue" : "Red",
    "attributeName" : "Color"
  }, {
    "attributeId" : 18701,
    "attributeValue" : "Red",
    "attributeName" : "Color"
  } ],
  "productPrice" : 26.44,
  "productName" : "Smoohstack Handbag (Medium)",
  "productDescription" : "Medium Handbag with Smoothstack logo",
  "productCategory" : {
    "categoryName" : "Handbag",
    "categoryId" : 10301,
    "categoryDescription" : "Handbag for Women"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * adds a product
 * Update a product in the system
 *
 * body Product Inventory item to update (optional)
 * no response value expected for this operation
 **/
exports.updateProduct = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

