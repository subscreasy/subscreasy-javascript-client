/**
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ApiDocumentation);
  }
}(this, function(expect, ApiDocumentation) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ApiDocumentation.InvoiceRequest();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InvoiceRequest', function() {
    it('should create an instance of InvoiceRequest', function() {
      // uncomment below and update the code to test InvoiceRequest
      //var instane = new ApiDocumentation.InvoiceRequest();
      //expect(instance).to.be.a(ApiDocumentation.InvoiceRequest);
    });

    it('should have the property customerId (base name: "customerId")', function() {
      // uncomment below and update the code to test the property customerId
      //var instane = new ApiDocumentation.InvoiceRequest();
      //expect(instance).to.be();
    });

    it('should have the property selectedDate (base name: "selectedDate")', function() {
      // uncomment below and update the code to test the property selectedDate
      //var instane = new ApiDocumentation.InvoiceRequest();
      //expect(instance).to.be();
    });

    it('should have the property serviceUserId (base name: "serviceUserId")', function() {
      // uncomment below and update the code to test the property serviceUserId
      //var instane = new ApiDocumentation.InvoiceRequest();
      //expect(instance).to.be();
    });

  });

}));