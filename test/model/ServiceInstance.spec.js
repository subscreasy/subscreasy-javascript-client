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
    instance = new ApiDocumentation.ServiceInstance();
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

  describe('ServiceInstance', function() {
    it('should create an instance of ServiceInstance', function() {
      // uncomment below and update the code to test ServiceInstance
      //var instane = new ApiDocumentation.ServiceInstance();
      //expect(instance).to.be.a(ApiDocumentation.ServiceInstance);
    });

    it('should have the property capacity (base name: "capacity")', function() {
      // uncomment below and update the code to test the property capacity
      //var instane = new ApiDocumentation.ServiceInstance();
      //expect(instance).to.be();
    });

    it('should have the property currentUsage (base name: "currentUsage")', function() {
      // uncomment below and update the code to test the property currentUsage
      //var instane = new ApiDocumentation.ServiceInstance();
      //expect(instance).to.be();
    });

    it('should have the property endDate (base name: "endDate")', function() {
      // uncomment below and update the code to test the property endDate
      //var instane = new ApiDocumentation.ServiceInstance();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApiDocumentation.ServiceInstance();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ApiDocumentation.ServiceInstance();
      //expect(instance).to.be();
    });

    it('should have the property numberOfUnits (base name: "numberOfUnits")', function() {
      // uncomment below and update the code to test the property numberOfUnits
      //var instane = new ApiDocumentation.ServiceInstance();
      //expect(instance).to.be();
    });

    it('should have the property offer (base name: "offer")', function() {
      // uncomment below and update the code to test the property offer
      //var instane = new ApiDocumentation.ServiceInstance();
      //expect(instance).to.be();
    });

    it('should have the property overUsage (base name: "overUsage")', function() {
      // uncomment below and update the code to test the property overUsage
      //var instane = new ApiDocumentation.ServiceInstance();
      //expect(instance).to.be();
    });

    it('should have the property overUsageQuota (base name: "overUsageQuota")', function() {
      // uncomment below and update the code to test the property overUsageQuota
      //var instane = new ApiDocumentation.ServiceInstance();
      //expect(instance).to.be();
    });

    it('should have the property quotaOrigin (base name: "quotaOrigin")', function() {
      // uncomment below and update the code to test the property quotaOrigin
      //var instane = new ApiDocumentation.ServiceInstance();
      //expect(instance).to.be();
    });

    it('should have the property serviceOffering (base name: "serviceOffering")', function() {
      // uncomment below and update the code to test the property serviceOffering
      //var instane = new ApiDocumentation.ServiceInstance();
      //expect(instance).to.be();
    });

    it('should have the property serviceType (base name: "serviceType")', function() {
      // uncomment below and update the code to test the property serviceType
      //var instane = new ApiDocumentation.ServiceInstance();
      //expect(instance).to.be();
    });

    it('should have the property startDate (base name: "startDate")', function() {
      // uncomment below and update the code to test the property startDate
      //var instane = new ApiDocumentation.ServiceInstance();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new ApiDocumentation.ServiceInstance();
      //expect(instance).to.be();
    });

    it('should have the property subscriberId (base name: "subscriberId")', function() {
      // uncomment below and update the code to test the property subscriberId
      //var instane = new ApiDocumentation.ServiceInstance();
      //expect(instance).to.be();
    });

    it('should have the property subscription (base name: "subscription")', function() {
      // uncomment below and update the code to test the property subscription
      //var instane = new ApiDocumentation.ServiceInstance();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new ApiDocumentation.ServiceInstance();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instane = new ApiDocumentation.ServiceInstance();
      //expect(instance).to.be();
    });

  });

}));
