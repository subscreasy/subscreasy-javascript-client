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
    instance = new ApiDocumentation.DeductionResult();
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

  describe('DeductionResult', function() {
    it('should create an instance of DeductionResult', function() {
      // uncomment below and update the code to test DeductionResult
      //var instane = new ApiDocumentation.DeductionResult();
      //expect(instance).to.be.a(ApiDocumentation.DeductionResult);
    });

    it('should have the property capacity (base name: "capacity")', function() {
      // uncomment below and update the code to test the property capacity
      //var instane = new ApiDocumentation.DeductionResult();
      //expect(instance).to.be();
    });

    it('should have the property consumedResourceId (base name: "consumedResourceId")', function() {
      // uncomment below and update the code to test the property consumedResourceId
      //var instane = new ApiDocumentation.DeductionResult();
      //expect(instance).to.be();
    });

    it('should have the property overUsage (base name: "overUsage")', function() {
      // uncomment below and update the code to test the property overUsage
      //var instane = new ApiDocumentation.DeductionResult();
      //expect(instance).to.be();
    });

    it('should have the property requestedAmount (base name: "requestedAmount")', function() {
      // uncomment below and update the code to test the property requestedAmount
      //var instane = new ApiDocumentation.DeductionResult();
      //expect(instance).to.be();
    });

    it('should have the property subscriptionId (base name: "subscriptionId")', function() {
      // uncomment below and update the code to test the property subscriptionId
      //var instane = new ApiDocumentation.DeductionResult();
      //expect(instance).to.be();
    });

    it('should have the property usage (base name: "usage")', function() {
      // uncomment below and update the code to test the property usage
      //var instane = new ApiDocumentation.DeductionResult();
      //expect(instance).to.be();
    });

  });

}));
