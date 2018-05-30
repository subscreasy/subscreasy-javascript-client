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
    instance = new ApiDocumentation.Subsription();
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

  describe('Subsription', function() {
    it('should create an instance of Subsription', function() {
      // uncomment below and update the code to test Subsription
      //var instane = new ApiDocumentation.Subsription();
      //expect(instance).to.be.a(ApiDocumentation.Subsription);
    });

    it('should have the property appliedCoupon (base name: "appliedCoupon")', function() {
      // uncomment below and update the code to test the property appliedCoupon
      //var instane = new ApiDocumentation.Subsription();
      //expect(instance).to.be();
    });

    it('should have the property cancelDate (base name: "cancelDate")', function() {
      // uncomment below and update the code to test the property cancelDate
      //var instane = new ApiDocumentation.Subsription();
      //expect(instance).to.be();
    });

    it('should have the property card (base name: "card")', function() {
      // uncomment below and update the code to test the property card
      //var instane = new ApiDocumentation.Subsription();
      //expect(instance).to.be();
    });

    it('should have the property company (base name: "company")', function() {
      // uncomment below and update the code to test the property company
      //var instane = new ApiDocumentation.Subsription();
      //expect(instance).to.be();
    });

    it('should have the property endDate (base name: "endDate")', function() {
      // uncomment below and update the code to test the property endDate
      //var instane = new ApiDocumentation.Subsription();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApiDocumentation.Subsription();
      //expect(instance).to.be();
    });

    it('should have the property nextChargingDate (base name: "nextChargingDate")', function() {
      // uncomment below and update the code to test the property nextChargingDate
      //var instane = new ApiDocumentation.Subsription();
      //expect(instance).to.be();
    });

    it('should have the property offer (base name: "offer")', function() {
      // uncomment below and update the code to test the property offer
      //var instane = new ApiDocumentation.Subsription();
      //expect(instance).to.be();
    });

    it('should have the property services (base name: "services")', function() {
      // uncomment below and update the code to test the property services
      //var instane = new ApiDocumentation.Subsription();
      //expect(instance).to.be();
    });

    it('should have the property startDate (base name: "startDate")', function() {
      // uncomment below and update the code to test the property startDate
      //var instane = new ApiDocumentation.Subsription();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new ApiDocumentation.Subsription();
      //expect(instance).to.be();
    });

    it('should have the property subscriberId (base name: "subscriberId")', function() {
      // uncomment below and update the code to test the property subscriberId
      //var instane = new ApiDocumentation.Subsription();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instane = new ApiDocumentation.Subsription();
      //expect(instance).to.be();
    });

  });

}));
