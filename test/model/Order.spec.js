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
    instance = new ApiDocumentation.Order();
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

  describe('Order', function() {
    it('should create an instance of Order', function() {
      // uncomment below and update the code to test Order
      //var instane = new ApiDocumentation.Order();
      //expect(instance).to.be.a(ApiDocumentation.Order);
    });

    it('should have the property createDate (base name: "createDate")', function() {
      // uncomment below and update the code to test the property createDate
      //var instane = new ApiDocumentation.Order();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApiDocumentation.Order();
      //expect(instance).to.be();
    });

    it('should have the property orderId (base name: "orderId")', function() {
      // uncomment below and update the code to test the property orderId
      //var instane = new ApiDocumentation.Order();
      //expect(instance).to.be();
    });

    it('should have the property subscriber (base name: "subscriber")', function() {
      // uncomment below and update the code to test the property subscriber
      //var instane = new ApiDocumentation.Order();
      //expect(instance).to.be();
    });

  });

}));
