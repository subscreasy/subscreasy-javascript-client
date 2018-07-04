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
    instance = new ApiDocumentation.CreateOrderRequest();
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

  describe('CreateOrderRequest', function() {
    it('should create an instance of CreateOrderRequest', function() {
      // uncomment below and update the code to test CreateOrderRequest
      //var instane = new ApiDocumentation.CreateOrderRequest();
      //expect(instance).to.be.a(ApiDocumentation.CreateOrderRequest);
    });

    it('should have the property order (base name: "order")', function() {
      // uncomment below and update the code to test the property order
      //var instane = new ApiDocumentation.CreateOrderRequest();
      //expect(instance).to.be();
    });

    it('should have the property paymentCard (base name: "paymentCard")', function() {
      // uncomment below and update the code to test the property paymentCard
      //var instane = new ApiDocumentation.CreateOrderRequest();
      //expect(instance).to.be();
    });

  });

}));
